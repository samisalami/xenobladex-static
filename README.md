# XenobladeX.org — static archive

A fully static, read-only rebuild of **xenobladex.org** (a German fan wiki for the game
*Xenoblade Chronicles X*): monster/creature data, missions, collectibles, materials,
equipment upgrades, FAQ, guides and the interactive Mira map.

The original site was an **AngularJS** single-page app talking to a **Symfony**
(FOSRestBundle + JMS Serializer) REST API backed by MySQL. The backend is gone (the live
API now returns HTTP 500), so this version keeps the original frontend **unchanged** and
replaces the dead API with **pre-generated static JSON snapshots** of the data. No
database, no PHP, no server code — it can be hosted on any static host.

## How it works

* The original AngularJS app (`docs/js/main.min.js`, `docs/js/templates.js`) fetched data
  from `/xenobladex/<resource>` via [FOSJsRouting](https://github.com/FriendsOfSymfony/FOSJsRoutingBundle).
* [`docs/js/static-shim.js`](docs/js/static-shim.js) registers an AngularJS `$http`
  interceptor that rewrites those GET requests to the static files under
  [`docs/data/`](docs/data) (e.g. `/xenobladex/monster` → `/data/monster.json`,
  `/xenobladex/monster/type` → `/data/monster_type.json`).
* Attachment images (`/xenobladex/attachment/<id>`) are served as real files under
  [`docs/xenobladex/attachment/`](docs/xenobladex/attachment).
* The admin/login area and all write operations (POST/PUT/DELETE) are intentionally
  non-functional — this is a read-only archive.

The JSON snapshots reproduce the exact output of the original Symfony/JMS serializer
(camelCase→snake_case keys, related entities serialized to id(s) or nested objects,
virtual properties, `serialize_null: false`). The reconstruction was validated
**byte-for-byte** against two API responses captured by the Wayback Machine
(`/xenobladex/mission` = 520 records and `/xenobladex/person` = 237 records) — 0 mismatches.

## Data source & provenance

The data comes from the site's own database backup, `nsmu0kk_5.sql` — the only dump whose
tables use the `xenobladex_` prefix and whose row counts/records match the live API exactly.
(Two sibling sites, xenoblade.org and xenoblade2.org, live in other dumps with the
`xenoblade_` prefix — a different game — and are **not** used here.)

`_research/` keeps the provenance: extracted table schemas, the parsed entity spec, the
FOSJsRouting definition, and the two Wayback ground-truth captures used for validation.

## Run locally

```bash
python3 tools/serve.py          # serves ./docs at http://127.0.0.1:8099 with SPA fallback
```

Then open <http://127.0.0.1:8099/>.

> The app uses AngularJS HTML5-mode routing, so a static server must fall back to
> `index.html` for unknown paths. `tools/serve.py` does this. For production, see below.

## Regenerate the data

Only needed if you re-import from the SQL backup. Edit the `DUMP` path at the top of
`tools/generate.py` if the backup moves, then:

```bash
python3 tools/generate.py       # rewrites docs/data/*.json
```

## Deploy

The web root is [`docs/`](docs). It is **path-agnostic**: `index.html` sets `<base href>`
at runtime — on a GitHub Pages *project* site it uses the first path segment
(`/<repo>/`), and on a root domain it uses `/`. Every other URL in the app is relative,
so the same files work in both places with no changes.

* **GitHub Pages (project site)** — *Settings → Pages → Deploy from a branch →
  `main` / `/docs`*. Served at `https://<user>.github.io/<repo>/`. `docs/404.html`
  (a copy of `index.html`) provides the SPA deep-link fallback; `.nojekyll` is included.
* **Custom domain / root** (e.g. `xenobladex.org`) — same repo, add the domain in the
  Pages settings (and a `docs/CNAME` file). The dynamic base resolves to `/` automatically.
* **Netlify / Cloudflare Pages** — publish directory `docs`; `docs/_redirects` provides
  the SPA fallback.
* **nginx / Apache** — point the web root at `docs/` and add an SPA fallback
  (`try_files $uri /index.html;`).

> The original `main.min.js` / `templates.js` were lightly patched to use relative URLs
> (nav links, `attachmentsUrl`, and the leaflet tile URL, which originally pointed at the
> live domain). See `tools/relativize` notes in the commit history.

External calls in the original page were removed/kept minimal: Google Analytics was
removed; the two Google Fonts stylesheets are kept for visual fidelity.

## Layout

```
docs/                 # static site (web root)
  index.html          # SPA shell (Google Analytics removed; static-shim.js added)
  404.html            # SPA deep-link fallback (copy of index.html)
  data/               # generated JSON API snapshots (the whole dataset)
  xenobladex/attachment/<id>   # attachment image files
  js/                 # main.min.js, templates.js (original), routing.js, static-shim.js
  css/ images/ libraries/ maps/ bundles/ ...   # original frontend assets
tools/                # generate.py (SQL→JSON), serve.py (local server), render tests
_research/            # schemas, entity spec, routing dump, Wayback ground-truth
```
