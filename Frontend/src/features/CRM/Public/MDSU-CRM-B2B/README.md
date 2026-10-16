# MDSU CRM B2B

Secteur : Entreprises / services
Version : 2.0.0
Stack : React (Vite) + Node.js + PostgreSQL + Redis

## Arborescence

```
MDSU-CRM-B2B/
|-- .env                 # variables Docker Compose (faux)
|-- .env.example         # template
|-- docker-compose.yml   # stack complete
|-- package.json         # scripts de developpement
|-- VERSION
|-- backend/
|   |-- .env             # variables applicatives (faux)
|   |-- Dockerfile
|   |-- package.json
|   `-- src/             # code backend (vide)
|-- frontend/
|   |-- .env             # variables Vite (faux)
|   |-- Dockerfile
|   |-- nginx.conf
|   |-- package.json
|   `-- src/             # code frontend (vide)
|-- database/
|   |-- init/
|   |-- seed/
|   `-- backups/
`-- docs/
    `-- api/
```

## Ports

| Service | URL |
| ------- | --- |
| Frontend | http://localhost:8600 |
| Backend  | http://localhost:8601 |
| PostgreSQL | localhost:8602 |
| Cache    | localhost:8603 |

## Mise en route

```bash
npm run install:all

cp .env.example .env
cp backend/.env.example backend/.env
cp frontend/.env.example frontend/.env

docker compose up -d --build
```

Developpement sans Docker :

```bash
npm run dev:backend
npm run dev:frontend
```

## Remarque

Aucun code applicatif n'est encore ecrit (`src/` est vide).
Les images Docker `frontend` et `backend` ne pourront etre construites
qu'une fois les sources presentes.