# Technologies utilisées

## Frontend

* React
* TypeScript
* Vite
* React Router
* Axios
* CSS3

Le Frontend fournit une interface utilisateur moderne, rapide et responsive.

---

## Backend

* Node.js
* Express.js

Le Backend expose une API REST sécurisée permettant la communication avec la base de données.

---

## Base de données

* PostgreSQL

La base de données relationnelle stocke les utilisateurs, clients, produits, commandes et ventes.

---

## Authentification

* JWT
* bcrypt

Les mots de passe sont chiffrés avant leur stockage et les accès sont protégés par des jetons JWT.

---

## Outils de développement

* Git
* GitHub
* npm
* Visual Studio Code

---

## Architecture

Le projet suit une architecture en couches :

```text
Frontend
      │
      ▼
API REST
      │
      ▼
Controllers
      │
      ▼
Services
      │
      ▼
Models
      │
      ▼
PostgreSQL
```

---

## Organisation du Backend

```text
backend/
│
├── controllers/
├── routes/
├── middleware/
├── services/
├── models/
├── config/
├── utils/
├── database/
└── server.js
```

---

## Organisation du Frontend

```text
frontend/
│
├── src/
│   ├── components/
│   ├── pages/
│   ├── layouts/
│   ├── hooks/
│   ├── services/
│   ├── context/
│   ├── assets/
│   └── styles/
```

---

## Principes appliqués

* Architecture REST
* Séparation Frontend / Backend
* Code modulaire
* Réutilisabilité des composants
* Validation des données
* Sécurité des accès
* Maintenance facilitée

---

## Perspectives

Le projet peut évoluer vers :

* Docker
* CI/CD avec GitHub Actions
* Tests automatisés
* Documentation Swagger/OpenAPI
* Déploiement Cloud
* Monitoring
* Journalisation avancée
