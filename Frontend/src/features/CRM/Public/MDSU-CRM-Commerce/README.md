# MDSU CRM Commerce

Secteur : Commerces / boutiques
Version : 3.0.0
Stack : React (Vite) + Node.js + PostgreSQL + Redis

## Arborescence

```
MDSU-CRM-Commerce/
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
| Frontend | http://localhost:8500 |
| Backend  | http://localhost:8501 |
| PostgreSQL | localhost:8502 |
| Cache    | localhost:8503 |

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