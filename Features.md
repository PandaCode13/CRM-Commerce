# Fonctionnalités de Commerce CRM

## Authentification

* Inscription
* Connexion
* Déconnexion
* JWT
* Protection des routes
* Hashage des mots de passe

---

## Gestion des utilisateurs

* Création d'utilisateurs
* Modification
* Suppression
* Consultation
* Attribution des rôles

---

## Gestion des rôles

Deux rôles principaux :

* Administrateur
* Utilisateur

Chaque rôle possède des permissions spécifiques.

---

## Tableau de bord

Le Dashboard permet de visualiser rapidement :

* nombre de clients
* nombre de ventes
* nombre de commandes
* activité récente
* statistiques générales

---

## Gestion des clients

Chaque client possède notamment :

* nom
* prénom
* email
* téléphone
* adresse
* historique

Actions disponibles :

* Ajouter
* Modifier
* Supprimer
* Rechercher

---

## Gestion des produits

Le CRM permet de gérer :

* catalogue
* prix
* stock
* catégorie

---

## Gestion des commandes

Fonctionnalités :

* création
* modification
* suppression
* consultation
* suivi du statut

---

## Gestion des ventes

* enregistrement des ventes
* historique
* consultation
* statistiques

---

## API REST

Toutes les fonctionnalités sont accessibles via une API REST.

Exemples :

```text
GET
POST
PUT
PATCH
DELETE
```

---

## Sécurité

* JWT
* Hashage des mots de passe
* Validation des données
* Contrôle des permissions
* Protection des routes privées

---

## Responsive Design

L'application est compatible :

* Desktop
* Tablette
* Mobile

---

## Évolutions futures

* Notifications
* Export PDF
* Export Excel
* Gestion des factures
* Gestion des paiements
* Tableau de bord avancé
* Graphiques interactifs
* Recherche avancée
* Création de l'application mobile CRM-Commercial

---

# 📄 Gestion documentaire, corbeille et audit — CRM Commerce

## 📌 Présentation

Le CRM Commerce ne se limite pas à la gestion des clients et des utilisateurs.
L'objectif est également de proposer un système de **création, génération, modification, archivage et suppression de documents professionnels**.

Le principe s'inspire du fonctionnement de plateformes comme les générateurs de CV :

> **Formulaire → Données structurées → Template → Génération du document → Modification → Nouvelle génération**

L'utilisateur n'a donc pas nécessairement besoin de rédiger manuellement un document complet. Il renseigne les informations demandées dans un formulaire et le CRM génère automatiquement le document correspondant.

---

## 1. 📝 Génération des contrats

### Principe

L'utilisateur sélectionne un type de contrat puis remplit un formulaire.

Exemple :

* Informations de l'entreprise
* Informations du client
* Représentant
* Date de début
* Date de fin
* Montant
* Conditions particulières
* Clauses
* Statut du contrat
* Informations complémentaires

Les informations saisies sont enregistrées sous forme de **données structurées**.

Le système utilise ensuite ces données avec un template afin de générer automatiquement le document.

```text
Formulaire
    ↓
Données structurées
    ↓
Template du contrat
    ↓
Génération
    ↓
Document final
```

Le document généré peut ensuite être consulté ou téléchargé.

---

## 2. ✏️ Modification des documents

Le document généré doit rester modifiable.

L'utilisateur peut modifier les informations du contrat sans devoir recommencer entièrement le document.

Exemple :

```text
Contrat #154

Montant initial : 2 000 €
        ↓
Modification
        ↓
Nouveau montant : 2 500 €
        ↓
Nouvelle génération du document
```

Le document final est donc considéré comme le **résultat des données enregistrées**, et non comme la seule source de données.

Cela permet de modifier facilement un contrat et de générer une nouvelle version.

---

## 3. 🔢 Gestion des versions

Les contrats et documents importants doivent pouvoir être associés à plusieurs versions.

Exemple :

```text
Contrat #154

Version 1
Création : 10/09/2026

Version 2
Modification : 15/09/2026

Version 3
Modification : 20/09/2026
```

La version actuelle peut être identifiée comme :

```text
Version actuelle : V3
```

Selon le type de document et les règles de conservation définies par l'entreprise, les anciennes versions peuvent également être conservées.

Cette fonctionnalité permet notamment de comprendre l'évolution d'un document.

---

## 4. 🗑️ Système de corbeille

La suppression d'un document ne doit pas entraîner immédiatement sa suppression définitive.

Lorsqu'un utilisateur supprime un document :

```text
Document actif
      ↓
Suppression
      ↓
Corbeille
      ↓
Conservation pendant 3 mois
      ↓
Suppression définitive
```

La corbeille permet notamment d'éviter les suppressions accidentelles.

Pendant cette période, l'utilisateur autorisé peut :

* consulter le document ;
* prévisualiser le document ;
* restaurer le document ;
* consulter ses informations ;
* éventuellement demander une suppression définitive.

---

## 5. ⏳ Durée de conservation dans la corbeille

La durée prévue pour la corbeille est de :

> **3 mois**

À partir de la date de suppression, le système calcule la date d'expiration.

Exemple :

```text
Suppression :
13/09/2026

Expiration de la corbeille :
13/12/2026
```

Après cette date, le document peut être supprimé définitivement conformément à la politique de conservation définie pour l'application.

---

## 6. 🔔 Notification avant suppression définitive

Afin d'éviter une suppression définitive inattendue, le système doit prévenir l'utilisateur avant l'expiration de la période de corbeille.

Une notification particulière est prévue **48 heures avant la suppression définitive**.

Exemple :

> ⚠️ Suppression définitive imminente
>
> Le contrat « Contrat Fournisseur ABC » sera définitivement supprimé dans 48 heures.
>
> Créé le : 12/03/2026
> Dernière modification : 28/05/2026
> Supprimé le : 13/06/2026
>
> **[Prévisualiser] [Restaurer]**

La notification doit permettre à l'utilisateur de prendre connaissance du document avant sa suppression définitive.

---

## 7. 👁️ Prévisualisation avant suppression

La prévisualisation est importante pour éviter qu'un utilisateur restaure ou conserve un mauvais document par erreur.

Depuis la corbeille, l'utilisateur peut consulter le document avant de décider :

```text
Prévisualiser
      ↓
Vérifier le contenu
      ↓
       ├── Restaurer
       │
       └── Laisser supprimer
```

La prévisualisation ne doit pas nécessairement restaurer le document.

---

## 8. ♻️ Restauration

Pendant la période de conservation dans la corbeille, un document peut être restauré si l'utilisateur possède les permissions nécessaires.

```text
Corbeille
    ↓
Restaurer
    ↓
Document actif
```

La restauration doit également être enregistrée dans le journal d'audit.

Exemple :

```text
Utilisateur : User #125
Action : RESTORE
Objet : Contrat #154
Date : 20/09/2026
```

---

## 9. 🔐 Ne pas confondre corbeille et audit

La corbeille et le système d'audit ont deux objectifs différents.

### Corbeille

La corbeille sert principalement à :

* récupérer une suppression accidentelle ;
* permettre une restauration ;
* conserver temporairement les documents supprimés ;
* préparer leur suppression définitive.

### Journal d'audit

Le journal d'audit sert à :

* savoir qui a effectué une action ;
* savoir quand l'action a été effectuée ;
* connaître l'objet concerné ;
* suivre les modifications importantes ;
* assurer la traçabilité des opérations.

Ainsi :

> **Un document peut être définitivement supprimé sans que l'événement de sa suppression soit nécessairement supprimé du journal d'audit.**

---

## 10. 📊 Journal d'audit

Le CRM doit disposer d'un système permettant d'enregistrer les actions importantes effectuées dans l'application.

Exemples d'actions :

```text
CREATE
UPDATE
DELETE
RESTORE
LOGIN
LOGOUT
DOWNLOAD
EXPORT
PERMISSION_CHANGE
```

Chaque événement peut notamment contenir :

| Information        | Exemple          |
| ------------------ | ---------------- |
| Utilisateur        | User #125        |
| Action             | DELETE           |
| Type d'objet       | Contrat          |
| Identifiant        | Contrat #154     |
| Date / heure       | 13/09/2026 14:32 |
| Résultat           | SUCCESS          |
| Ancienne valeur    | si nécessaire    |
| Nouvelle valeur    | si nécessaire    |
| Contexte technique | si nécessaire    |

---

## 11. 👤 Audit par utilisateur

Le journal d'audit doit permettre de filtrer les actions par utilisateur.

Exemple :

```text
Utilisateur : User #125

13/09/2026 — CREATE — Contrat #154
14/09/2026 — UPDATE — Contrat #154
15/09/2026 — DOWNLOAD — Contrat #154
20/09/2026 — DELETE — Contrat #154
```

Cela permet à un responsable de répondre à une question comme :

> « Quelles actions cet utilisateur a-t-il effectuées ? »

---

## 12. 🏢 Audit par client

Le système doit également permettre de retrouver l'historique associé à un client.

Exemple :

```text
Client : Client #58

Contrat #154
    ↓
Création
    ↓
Modification
    ↓
Téléchargement
    ↓
Suppression
```

L'objectif est de pouvoir suivre l'activité liée à un client sans devoir rechercher manuellement chaque événement.

---

## 13. 📄 Audit par document

Il doit également être possible de consulter l'historique d'un document.

Exemple :

```text
Contrat #154

10/09/2026
CREATE
User #125

15/09/2026
UPDATE
User #125

20/09/2026
DOWNLOAD
User #126

25/09/2026
DELETE
User #125

25/12/2026
SUPPRESSION DÉFINITIVE
SYSTEM
```

Cela permet d'avoir une chronologie complète des principales actions effectuées sur le document.

---

## 14. 🧾 Documents supprimés vs traces d'audit

Il ne faut pas nécessairement conserver tous les documents supprimés pendant 10, 15 ou 20 ans uniquement pour permettre les audits.

Le système doit distinguer :

```text
DOCUMENT
    ↓
Gestion de sa durée de conservation

AUDIT
    ↓
Gestion de la traçabilité des actions
```

Par exemple, un contrat peut être supprimé définitivement après sa période de conservation applicable, tandis que le journal peut conserver la trace qu'il a été créé, modifié et supprimé, si cette conservation est justifiée et autorisée.

---

## 15. 🗄️ Conservation des données

Le CRM ne doit pas appliquer automatiquement une durée unique de conservation à toutes les données.

Les différentes catégories de données peuvent avoir des règles différentes.

Exemple conceptuel :

```text
Données actives
    ↓
Conservation pendant leur utilisation

Documents supprimés
    ↓
Corbeille : 3 mois

Archives
    ↓
Durée définie selon le type de document et les obligations applicables

Journal d'audit
    ↓
Durée définie selon les besoins de sécurité,
de traçabilité et les obligations applicables
```

La durée de conservation doit donc être pensée **par type de donnée et par finalité**, plutôt que de conserver toutes les données indéfiniment.

Pour un produit destiné à de véritables entreprises, les règles de conservation devront être définies en tenant compte notamment du RGPD, des obligations légales et des contraintes propres au secteur d'activité.

---

## 16. 🔒 Protection du journal d'audit

Le journal d'audit est une partie sensible du CRM.

Un utilisateur normal ne doit pas pouvoir modifier ou supprimer librement les traces de ses propres actions.

L'accès au journal doit être contrôlé par les permissions.

Exemple :

```text
Utilisateur classique
    ↓
Accès limité

Responsable
    ↓
Consultation des audits autorisés

Administrateur / Auditeur
    ↓
Accès aux journaux selon les permissions
```

Les actions réalisées sur le journal d'audit lui-même doivent également être contrôlées.

---

## 17. 🏗️ Architecture fonctionnelle générale

Le fonctionnement global du système peut être représenté ainsi :

```text
                    CRM COMMERCE
                         │
        ┌────────────────┼────────────────┐
        │                │                │
        ▼                ▼                ▼
   Données métier    Documents         Utilisateurs
        │                │
        │                ▼
        │          Génération
        │                │
        │                ▼
        │           Versions
        │                │
        │                ▼
        │            Corbeille
        │                │
        │          ┌─────┴─────┐
        │          │           │
        │       Restaurer   Expiration
        │                      │
        │                      ▼
        │             Suppression définitive
        │
        └──────────────┐
                       ▼
                  JOURNAL D'AUDIT
                       │
             ┌─────────┼─────────┐
             ▼         ▼         ▼
          User      Client    Document
```

---

## 18. 🎯 Objectif du système

L'objectif n'est pas simplement de permettre à une entreprise de créer des PDF.

Le CRM Commerce doit permettre de gérer **tout le cycle de vie d'un document** :

```text
Créer
  ↓
Remplir le formulaire
  ↓
Générer
  ↓
Prévisualiser
  ↓
Modifier
  ↓
Créer une nouvelle version
  ↓
Utiliser / Télécharger
  ↓
Archiver si nécessaire
  ↓
Supprimer
  ↓
Corbeille
  ↓
Notification
  ↓
Restaurer OU supprimer définitivement
```

En parallèle, les actions importantes sont enregistrées dans :

```text
JOURNAL D'AUDIT
```

---

## 19. 🚀 Évolution possible

Ce système de génération documentaire peut être étendu à plusieurs types de documents :

* Contrats
* Devis
* Factures
* Bons de commande
* Attestations
* Rapports d'inspection
* Conventions
* Documents administratifs
* Rapports internes
* Documents spécifiques à un secteur d'activité

L'objectif à terme est de proposer des **CRM spécialisés par secteur**, accompagnés d'outils permettant de générer et gérer les documents nécessaires à l'activité de l'entreprise.

---

## ✅ Résumé

Le système repose sur quatre concepts principaux :

### 1. Génération

**Formulaire → données → template → document**

### 2. Gestion du cycle de vie

**Créer → modifier → versionner → archiver → supprimer**

### 3. Corbeille

**Suppression → 3 mois → notification 48 h avant → restauration ou suppression définitive**

### 4. Audit

**Utilisateur → action → objet → date → historique**

Le principe fondamental est :

> **Ne pas conserver éternellement tous les documents uniquement pour les audits.**

Il est préférable de distinguer la **conservation des documents** de la **traçabilité des actions**, avec des durées de conservation adaptées à chaque catégorie de données et aux obligations applicables.