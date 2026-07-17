import re,glob,os,json
ENT="/mnt/c/Users/konta/Documents/_backup/domainfactory/full_backup/webseiten/xenobladex/xenoblade-symfony/src/AppBundle/Entity"
def camel_snake(s):
    s=re.sub(r'(.)([A-Z][a-z]+)',r'\1_\2',s)
    return re.sub(r'([a-z0-9])([A-Z])',r'\1_\2',s).lower()
spec={}
for f in sorted(glob.glob(ENT+"/*.php")):
    base=os.path.basename(f)[:-4]
    if base.endswith('Repository'): continue
    src=open(f,encoding='utf-8',errors='replace').read()
    tm=re.search(r'@ORM\\Table\(name="([^"]+)"',src)
    table=tm.group(1) if tm else None
    props=[]
    # split into docblock+declaration units
    for m in re.finditer(r'/\*\*(.*?)\*/\s*(?:public|private|protected)\s+(?:function\s+)?(\$?\w+)',src,re.S):
        doc,decl=m.group(1),m.group(2)
        if not decl.startswith('$'): continue  # skip methods here
        pname=decl[1:]
        col=re.search(r'@ORM\\Column\(name="([^"]+)"',doc)
        typ=re.search(r'@ORM\\Column\([^)]*type="([^"]+)"',doc)
        sname=re.search(r'@SerializedName\("([^"]+)"\)',doc)
        m2o='ManyToOne' in doc; m2m='ManyToMany' in doc
        target=re.search(r'targetEntity="([^"]+)"',doc)
        jointbl=re.search(r'@ORM\\JoinTable\(name="([^"]+)"',doc)
        joincols=re.findall(r'JoinColumn\(name="([^"]+)",\s*referencedColumnName="([^"]+)"',doc)
        joincol=re.search(r'@ORM\\JoinColumn\(name="([^"]+)"',doc)
        rel_entity_type='RelatedEntity' in doc
        nullable='nullable=true' in doc
        p={'prop':pname,'json':(sname.group(1) if sname else camel_snake(pname))}
        if col: p['col']=col.group(1)
        if typ: p['type']=typ.group(1)
        if nullable: p['nullable']=True
        if m2o or m2m:
            p['relation']='m2m' if m2m else 'm2o'
            p['target']=target.group(1) if target else None
            p['related_id_only']=rel_entity_type
            if jointbl: p['jointable']=jointbl.group(1)
            if joincols: p['joincols']=joincols
            if joincol and not m2m: p['fkcol']=joincol.group(1)
        props.append(p)
    # virtual properties
    virts=[]
    for m in re.finditer(r'/\*\*((?:(?!\*/).)*?@VirtualProperty(?:(?!\*/).)*?)\*/\s*public function (\w+)\s*\([^)]*\)\s*\{(.*?)\n    \}',src,re.S):
        doc,fn,body=m.group(1),m.group(2),m.group(3)
        sn=re.search(r'@SerializedName\("([^"]+)"\)',doc)
        virts.append({'json':sn.group(1) if sn else camel_snake(fn),'fn':fn,'body':' '.join(body.split())})
    spec[base]={'table':table,'props':props,'virtuals':virts}
json.dump(spec,open('_research/entity_spec.json','w'),indent=1)
# print summary
for e,d in spec.items():
    print(f"### {e}  table={d['table']}")
    for p in d['props']:
        r=''
        if p.get('relation'): r=f" REL={p['relation']} -> {p.get('target')} id_only={p.get('related_id_only')} jt={p.get('jointable')} fk={p.get('fkcol')}"
        print(f"   {p['json']:26} col={p.get('col')} type={p.get('type')}{r}")
    for v in d['virtuals']:
        print(f"   *{v['json']:25} <= {v['fn']}: {v['body'][:90]}")
