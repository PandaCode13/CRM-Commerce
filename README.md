# Commerce CRM

Commerce CRM est une application Full Stack permettant aux entreprises de gérer leurs clients, leurs utilisateurs, leurs ventes et leurs activités commerciales à partir d'une interface moderne.

Le projet est conçu avec une architecture Frontend/Backend séparée afin de faciliter la maintenance, les évolutions et le déploiement.

---

## Objectifs

* Centraliser les informations clients.
* Simplifier la gestion commerciale.
* Sécuriser les accès grâce à un système d'authentification.
* Fournir un tableau de bord permettant de suivre les activités.
* Proposer une architecture facilement extensible.

---

## Explication plus claire 

Le projet CRM Commerce est un projet conçu qui répond à cette problématique 

## Architecture

```text
commerce-crm/
│
├── frontend/          # Application React
├── backend/           # API REST Express
├── database/          # Scripts SQL (optionnel)
├── docs/              # Documentation
└── README.md
```

---

## Fonctionnalités principales

* Authentification sécurisée
* Gestion des utilisateurs
* Gestion des rôles
* Tableau de bord
* Gestion des clients
* Gestion des produits
* Gestion des commandes
* Gestion des ventes
* Historique des activités
* API REST

---

## Installation

### Cloner le projet

```bash
git clone https://github.com/ton-compte/commerce-crm.git
```

### Installer le Frontend

```bash
cd frontend
npm install
npm run dev
```

### Installer le Backend

```bash
cd backend
npm install
npm run dev
```

---

## Variables d'environnement

Créer un fichier `.env`.

Exemple :

```env
PORT

DB_HOST
DB_PORT
DB_USER
DB_PASSWORD
DB_NAME

JWT_SECRET
```

---

## Documentation

Une documentation détaillée est disponible :

* `README-FEATURES.md`
* `README-TECHNOLOGIES.md`

---

## Auteur

Développé par **Said Mohamed Abdo**.
