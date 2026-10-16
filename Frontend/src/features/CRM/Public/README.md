# MDSU CRM - Public

Socle de reference pour les 10 CRM MDSU destines aux professionnels.

## Les 10 CRM

| Dossier | CRM | Secteur | Version | Base de donnees | Cache | Frontend | Backend |
| ------- | --- | ------- | :-----: | ---------------- | :---: | :------: | :-----: |
| `MDSU-CRM-Resto`     | MDSU CRM Resto     | Restaurants / restauration    | 3.0.0 | PostgreSQL |  -  | 8000 | 8001 |
| `MDSU-CRM-Immo`      | MDSU CRM Immo      | Immobilier                    | 3.0.0 | PostgreSQL |  -  | 8100 | 8101 |
| `MDSU-CRM-Beauty`    | MDSU CRM Beauty    | Coiffure / beaute             | 2.0.0 | MongoDB    |  -  | 8200 | 8201 |
| `MDSU-CRM-Artisan`   | MDSU CRM Artisan   | Artisans / independants       | 2.0.0 | PostgreSQL |  -  | 8300 | 8301 |
| `MDSU-CRM-Auto`      | MDSU CRM Auto      | Garages / automobile          | 2.0.0 | PostgreSQL |  -  | 8400 | 8401 |
| `MDSU-CRM-Commerce`  | MDSU CRM Commerce  | Commerces / boutiques         | 3.0.0 | PostgreSQL | Redis | 8500 | 8501 |
| `MDSU-CRM-B2B`       | MDSU CRM B2B       | Entreprises / services        | 2.0.0 | PostgreSQL | Redis | 8600 | 8601 |
| `MDSU-CRM-SantePro`  | MDSU CRM Sante Pro | Professionnels de services    | 2.0.0 | PostgreSQL |  -  | 8700 | 8701 |
| `MDSU-CRM-Education` | MDSU CRM Education | Formation / ecoles            | 2.0.0 | PostgreSQL |  -  | 8800 | 8801 |
| `MDSU-CRM-Transport` | MDSU CRM Transport | Transport / livraison         | 2.0.0 | PostgreSQL |  -  | 8900 | 8901 |

Ports de base de donnees : `+2` (ex. 8002). Ports Redis : `+3` (uniquement Commerce et B2B).

## Stack commune

| Couche | Choix |
| ------ | ----- |
| Frontend | React 19 + Vite 8 + React Router 7 |
| Backend  | Node.js 22 + Express 5 (ESM) |
| Auth     | JWT + bcryptjs |
| Validation | Zod |
| Securite | Helmet, CORS, rate limiting, compression |
| Base     | PostgreSQL 17 (`pg`) ou MongoDB 8 (`mongoose`) |
| Cache    | Redis 8 (`ioredis`) - Commerce et B2B |
| Conteneur | node:22-alpine, nginx:alpine |

## Arborescence type

```
MDSU-CRM-<Nom>/
|-- .env                 # variables Docker Compose (FAUX)
|-- .env.example         # template
|-- docker-compose.yml   # db + cache? + backend + frontend
|-- package.json         # scripts de developpement
|-- README.md
|-- VERSION
|-- .vscode/settings.json
|-- backend/
|   |-- .env             # FAUX
|   |-- .env.example
|   |-- Dockerfile
|   |-- .dockerignore
|   |-- .gitignore
|   |-- package.json
|   |-- src/             # VIDE - a coder
|   |   |-- config/ controllers/ models/ middleware/
|   |   |-- routes/ services/ utils/ validators/
|   |-- tests/
|   |-- uploads/
|   `-- logs/
|-- frontend/
|   |-- .env             # FAUX
|   |-- .env.example
|   |-- Dockerfile       # multi-stage build + nginx
|   |-- nginx.conf
|   |-- index.html
|   |-- .dockerignore
|   |-- .gitignore
|   |-- package.json
|   |-- public/
|   `-- src/             # VIDE - a coder
|       |-- assets/ components/ pages/ hooks/
|       |-- services/ store/ styles/
|-- database/
|   |-- init/            # monte dans /docker-entrypoint-initdb.d
|   |-- seed/
|   `-- backups/
`-- docs/
    `-- api/
```

## Etat actuel

Socle uniquement. Aucun code applicatif n'est ecrit.

Deja fait :

- arborescence complete des 10 CRM
- 30 `package.json` (10 racine + 10 backend + 10 frontend)
- 60 fichiers `.env` et `.env.example` (valeurs factices)
- 20 `Dockerfile` + 20 `.dockerignore` + 20 `.gitignore`
- 10 `docker-compose.yml` valides (`docker compose config` = OK)
- 20 `npm install` reussis (~753 Mo de `node_modules`)
- 5 images Docker de base telechargees

Images Docker non encore constructibles : le build du frontend
execute `npm run build` et le backend lance `src/server.js`.
Les deux necessitent les sources, absentes pour l'instant.

## Commandes

Voir [test-cmd.md](./test-cmd.md) pour la liste complete des commandes
de verification, de demarrage et de nettoyage.
