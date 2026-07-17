#!/usr/bin/env python3
"""Reconstruct xenobladex.org REST API responses as static JSON from the SQL backup.
Reproduces the Symfony/JMS serializer output (validated against Wayback captures)."""
import re, json, os, sys

DUMP = "/mnt/c/Users/konta/Documents/_backup/domainfactory/db_backups/mwp_db/nsmu0kk_5.sql"
ROOT = "/home/sami/_projects/xenobladex-org-static"
OUT  = os.path.join(ROOT, "docs", "data")
schema = json.load(open(os.path.join(ROOT, "_research/schema.json")))

# ---------- MySQL INSERT VALUES parser ----------
ESC = {'n':'\n','t':'\t','r':'\r','0':'\0','b':'\b','Z':'\x1a','\\':'\\',"'":"'",'"':'"'}

def parse_tuple(s, i):
    """Parse one (...) tuple starting at s[i]=='('. Return (list_of_values, next_index)."""
    assert s[i] == '(', repr(s[i:i+20])
    i += 1
    vals = []
    n = len(s)
    while True:
        # skip spaces
        while s[i] in ' \t\n\r': i += 1
        if s[i] == "'":
            i += 1
            buf = []
            while True:
                c = s[i]
                if c == '\\':
                    nc = s[i+1]
                    buf.append(ESC.get(nc, nc)); i += 2; continue
                if c == "'":
                    if s[i+1] == "'":  # doubled quote escape
                        buf.append("'"); i += 2; continue
                    i += 1; break
                buf.append(c); i += 1
            vals.append(''.join(buf))
        else:
            # number, NULL, or unquoted token until , or )
            j = i
            while s[j] not in ',)': j += 1
            tok = s[i:j].strip(); i = j
            if tok.upper() == 'NULL':
                vals.append(None)
            else:
                try:
                    vals.append(int(tok))
                except ValueError:
                    try: vals.append(float(tok))
                    except ValueError: vals.append(tok)
        # now s[i] is ',' or ')'
        if s[i] == ',': i += 1; continue
        if s[i] == ')': i += 1; break
    return vals, i

def load_table(sql, table):
    """Return list of dicts keyed by column name, for every row of `table`."""
    cols = schema[table]
    rows = []
    pat = "INSERT INTO `%s` VALUES " % table
    idx = 0
    while True:
        p = sql.find(pat, idx)
        if p == -1: break
        i = p + len(pat)
        # one or more comma-separated tuples until ';'
        while True:
            while sql[i] in ' \t\n\r': i += 1
            vals, i = parse_tuple(sql, i)
            rows.append(dict(zip(cols, vals)))
            while sql[i] in ' \t\n\r': i += 1
            if sql[i] == ',': i += 1; continue
            if sql[i] == ';': break
        idx = i
    return rows

print("Loading dump...")
sql = open(DUMP, encoding='utf-8', errors='replace').read()

T = {t: load_table(sql, t) for t in schema}
for t in schema: print(f"  {t}: {len(T[t])} rows")

def by_id(table):
    return {r['id']: r for r in T[table]}

# ---------- helpers ----------
def ci(row, col):
    """case-insensitive column get (handles grid_offset_Y vs grid_offset_y)."""
    if col in row: return row[col]
    low = {k.lower(): k for k in row}
    return row.get(low.get(col.lower()))

def b(v):   # boolean; None stays None (JMS omits nulls)
    return bool(v) if v is not None else None

def i(v):   # int; None stays None
    return int(v) if v is not None else None

def fix_content(t):
    # Rewrite external URLs embedded in rich-text/content fields to local/relative ones:
    #  - image host uploads.xenobladex.org -> local uploads/ (files copied from _uploads)
    #  - internal links to (www.)xenobladex.org -> relative (so they route within the SPA)
    if not isinstance(t, str) or 'xenobladex.org' not in t:
        return t
    t = re.sub(r'https?://uploads\.xenobladex\.org/', 'uploads/', t)
    t = re.sub(r'https?://(?:www\.)?xenobladex\.org/?', '', t)
    return t

def s(v):   # string; None stays None
    return fix_content(v) if v is not None else None

def strip(d):  # JMS serialize_null=false -> drop null-valued keys
    return {k: v for k, v in d.items() if v is not None}

def dt(v):  # datetime -> ISO8601
    if not v: return None
    v = str(v).strip()
    if ' ' in v: v = v.replace(' ', 'T')
    return v + "+00:00"

# ---------- join tables ----------
mon_mat = {}   # monster_id -> [material_id]
mat_mon = {}   # material_id -> [monster_id]
for r in T['xenobladex_monster_material']:
    mon_mat.setdefault(r['monster_id'], []).append(r['material_id'])
    mat_mon.setdefault(r['material_id'], []).append(r['monster_id'])
mt_mat = {}    # monster_type_id -> [material_id]
mat_mt = {}    # material_id -> [monster_type_id]
for r in T['xenobladex_monster_type_material']:
    mt_mat.setdefault(r['monster_type_id'], []).append(r['material_id'])
    mat_mt.setdefault(r['material_id'], []).append(r['monster_type_id'])

missiontype = by_id('xenobladex_mission_type')
monstertype = by_id('xenobladex_monster_type')
collcat     = by_id('xenobladex_collection_category')
equipcat    = by_id('xenobladex_equip_upgrade_category')
attachment  = by_id('xenobladex_attachment')
item        = by_id('xenobladex_item')

def rel(v):  # RelatedEntity single -> id or None
    return int(v) if v is not None else None

# ---------- serializers ----------
def ser_person(r):
    return {'id':i(r['id']),'name':s(r['name']),'age':s(r['age']),'description':s(r['description']),
            'location_note':s(r['location_note']),'region':s(r['region']),'species':s(r['species']),
            'job':s(r['job']),'conditions':s(r['conditions']),'activity_time':s(r['activity_time'])}

def ser_missiontype(r):
    return {'id':i(r['id']),'name':s(r['name'])}

def ser_monstertype(r):
    return {'id':i(r['id']),'name':s(r['name']),'description':s(r['description']),'prio':i(r['prio']),
            'materials':[int(x) for x in mt_mat.get(r['id'],[])]}

def ser_mission(r):
    mt = missiontype.get(r['mission_type_id'])
    return {
        'id':i(r['id']),'name':s(r['name']),'description':s(r['description']),
        'location_note':s(r['locationNote']),'conditions':s(r['conditions']),'tasks':s(r['tasks']),
        'solution':s(r['solution']),'rewards':s(r['rewards']),
        'mission_type': strip(ser_missiontype(mt)) if mt else None,
        'mission_type_name': s(mt['name']) if mt else None,
        'person': rel(r['person_id']),
        'person_unrelated':s(r['person_unrelated']),'has_person':b(r['has_person']),
        'target_area':s(r['target_area']),'sidejob_type':s(r['sidejob_type']),
        'difficulty':i(r['difficulty']),'blade_level':i(r['blade_level']),'chapter':i(r['chapter']),
        'map_geo_json':s(r['map_geo_json'])}

def ser_monster(r):
    mt = monstertype.get(r['monster_type_id'])
    return {
        'id':i(r['id']),'name':s(r['name']),'level_min':i(r['level_min']),'level_max':i(r['level_max']),
        'time':s(r['time']),'weather':s(r['weather']),'is_unique':b(r['is_unique']),'is_story':b(r['is_story']),
        'ep':s(r['ep']),'hp':s(r['hp']),
        'res_physic':i(r['res_physic']),'res_laser':i(r['res_laser']),'res_ether':i(r['res_ether']),
        'res_thermo':i(r['res_thermo']),'res_electric':i(r['res_electric']),'res_gravit':i(r['res_gravit']),
        'aggression_day':s(r['aggression_day']),'agression_night':s(r['agression_night']),
        'agression_skell_day':s(r['agression_skell_day']),'agression_skell_night':s(r['agression_skell_night']),
        'description':s(r['description']),'location_note':s(r['location_note']),'region':s(r['region']),
        'map_geo_json':s(r['map_geo_json']),
        'monster_type': rel(r['monster_type_id']),
        'monster_type_prio': i(mt['prio']) if mt else None,
        'materials':[int(x) for x in mon_mat.get(r['id'],[])]}

def ser_item_base(it):
    return {'id':i(it['id']),'name':s(it['name']),'rarity':s(it['rarity']),
            'credit_cost':i(it['credit_cost']),'ticket_cost':i(it['ticket_cost']),
            'body_part':s(it['body_part']),'description':s(it['description'])}

def ser_material(r):
    it = item.get(r['id'], {})
    d = ser_item_base(it) if it else {'id':i(r['id'])}
    d['is_not_buyable']=b(r['is_not_buyable'])
    d['show_monsters']=b(r['show_monsters'])
    d['monster_types']=[int(x) for x in mat_mt.get(r['id'],[])]
    d['monsters']=[int(x) for x in mat_mon.get(r['id'],[])]
    return d

def ser_resource(r):
    it = item.get(r['id'], {})
    d = ser_item_base(it) if it else {'id':i(r['id'])}
    d['region']=s(r['region'])
    d['location_note']=s(r['location_note'])
    return d

def ser_faq(r):
    return {'id':i(r['id']),'name':s(r['name']),'answer':s(r['answer']),
            'answer_read_more':s(r['answer_read_more']),'category':s(r['category'])}

def ser_guide(r):
    return {'id':i(r['id']),'name':s(r['name']),'author':s(r['author']),
            'last_edited':dt(r['last_edited']),'created':dt(r['created']),'copy':s(r['copy'])}

def ser_attachment(r):
    return {'id':i(r['id']),'name':s(r['name']),'file_name':s(ci(r,'file_name')),
            'uuid':s(r['uuid']),'description':s(r['description']),'mime_type':s(ci(r,'mime_type'))}

def ser_map(r):
    at = attachment.get(ci(r,'attachment_id'))
    return {'id':i(r['id']),'name':s(r['name']),'description':s(r['description']),
            'grid_offset_x':i(ci(r,'grid_offset_x')),'grid_offset_y':i(ci(r,'grid_offset_y')),
            'grid_width':i(ci(r,'grid_width')),'grid_height':i(ci(r,'grid_height')),
            'grid_tile_diameter':i(ci(r,'grid_tile_diameter')),'grid_tile_margin':i(ci(r,'grid_tile_margin')),
            'attachment': strip(ser_attachment(at)) if at else None}

def ser_collectible(r):
    return {'id':i(r['id']),'name':s(r['name']),'description':s(r['description']),
            'rarity':s(r['rarity']),'location_note':s(r['location_note']),
            'is_lucky_field':b(r['is_lucky_field'])}

def ser_collection(r):
    return {'id':i(r['id']),'region':s(r['region']),'reward_sp':i(r['reward_sp']),
            'reward_item':s(r['reward_item'])}

def ser_collectioncategory(r):
    return {'id':i(r['id']),'name':s(r['name']),'prio':i(r['prio'])}

def ser_collectiongroup(r):
    cc = collcat.get(r['collection_category_id'])
    d = {'id':i(r['id']),'reward_sp':i(r['reward_sp']),'reward_item':s(r['reward_item']),
         'collection': rel(r['collection_id']),
         'collection_category': rel(r['collection_category_id'])}
    for k in range(1,9):
        d['collectible%d'%k] = rel(r['collectible%d_id'%k])
    d['collection_category_prio'] = i(cc['prio']) if cc else None
    d['collection_category_name'] = s(cc['name']) if cc else None
    return d

def ser_equipcategory(r):
    return {'id':i(r['id']),'name':s(r['name']),'description':s(r['description']),'type':s(r['type'])}

def ser_equipupgrade(r):
    cat = equipcat.get(r['equip_upgrade_category_id'])
    d = {'id':i(r['id']),'name':s(r['name']),'alternative_name':s(r['alternative_name']),
         'description':s(r['description']),'is_not_manufacturable':b(r['is_not_manufacturable']),
         'has_no_tiers':b(r['has_no_tiers']),
         'category': rel(r['equip_upgrade_category_id'])}
    for tag in ('small1','small2','small3','large1','large2','large3'):
        d['material_'+tag] = rel(r['material_%s_id'%tag])
    d['category_name'] = s(cat['name']) if cat else None
    d['category_type'] = s(cat['type']) if cat else None
    return d

def ser_equiptier(r):
    d = {'id':i(r['id']),'name':s(r['name']),'description':s(r['description']),
         'credit_cost':i(r['credit_cost']),
         'resource': rel(r['resource_id']),'resource_count':i(r['resource_count']),
         'material_count':i(r['material_count']),'material_individual':b(r['material_individual']),
         'material1': rel(r['material1_id']),'material2': rel(r['material2_id']),'material3': rel(r['material3_id']),
         'material_count_individual':b(r['material_count_individual']),
         'material1_count':i(r['material1_count']),'material2_count':i(r['material2_count']),
         'material3_count':i(r['material3_count']),
         'equip_upgrade': rel(r['equipupgrade_id'])}
    return d

# ---------- endpoint -> (table, serializer) ----------
ENDPOINTS = {
    'person':                 ('xenobladex_person', ser_person),
    'mission':                ('xenobladex_mission', ser_mission),
    'mission_types':          ('xenobladex_mission_type', ser_missiontype),
    'monster':                ('xenobladex_monster', ser_monster),
    'monster_type':           ('xenobladex_monster_type', ser_monstertype),
    'material':               ('xenobladex_item_material', ser_material),
    'resource':               ('xenobladex_item_resource', ser_resource),
    'faq':                    ('xenobladex_faq', ser_faq),
    'guide':                  ('xenobladex_guide', ser_guide),
    'attachment':             ('xenobladex_attachment', ser_attachment),
    'map':                    ('xenobladex_map', ser_map),
    'collectible':            ('xenobladex_collectible', ser_collectible),
    'collection':             ('xenobladex_collection', ser_collection),
    'collection_category':    ('xenobladex_collection_category', ser_collectioncategory),
    'collection_group':       ('xenobladex_collection_group', ser_collectiongroup),
    'equip_upgrades':         ('xenobladex_equip_upgrade', ser_equipupgrade),
    'equip_upgrade_category': ('xenobladex_equip_upgrade_category', ser_equipcategory),
    'equip_upgrade_tier':     ('xenobladex_equipupgrade_tier', ser_equiptier),
}

os.makedirs(OUT, exist_ok=True)
for name,(table,fn) in ENDPOINTS.items():
    data = [strip(fn(r)) for r in T[table]]
    json.dump(data, open(os.path.join(OUT, name+'.json'),'w'), ensure_ascii=False, separators=(',',':'))
    print(f"  wrote data/{name}.json ({len(data)})")

print("Done.")
