# db.md — Base de données CRM Commerce

## Tables

### user

user (
    id,
    first_name,
    last_name,
    email UNIQUE,
    password,
    role,
    is_active,
    created_at,
    updated_at
)

### crm

crm (
    id,
    nom,
    description,
    technologies,
    base_de_donnees,
    price,
    version
)

### client

client (
    id_client,
    id_user FK → user.id,
    date_achat,
    status
)

status :
- en_cours
- valide
- refuse
- annule

### messages

messages (
    id_message,
    id_user FK → user.id,
    first_name,
    last_name,
    objet_message,
    content,
    created_at,
    updated_at
)

`id_user` identifie l'utilisateur ayant envoyé le message.
`first_name` et `last_name` permettent de conserver l'identité de
l'expéditeur au moment de l'envoi.

### commandes

commandes (
    id_commande,
    id_client FK → client.id_client,
    id_crm FK → crm.id,
    date_commande,
    status,
    created_at,
    updated_at
)

status :
- en_cours
- valide
- refuse
- annule

### factures

factures (
    id_facture,
    id_client FK → client.id_client,
    id_commande FK → commandes.id_commande,
    montant,
    date_facture,
    nbr_fois_paye,
    type_contrat,
    status,
    created_at,
    updated_at
)

status :
- paid
- unpaid
- pending

## Relations

user
├── client
└── messages

client
├── commandes
└── factures

crm
└── commandes

commandes
└── factures

## Contraintes principales

- `user.email` est unique.
- Les clés étrangères doivent référencer des enregistrements existants.
- `price` et `montant` doivent être positifs.
- Les champs `status` respectent les valeurs autorisées.
- `created_at` et `updated_at` assurent la traçabilité des modifications.

# Description de la base de données CRM Commerce

La base de données du CRM Commerce est composée de six tables principales : `user`, `crm`, `client`, `messages`, `commandes` et `factures`.

## Table `user`

La table `user` permet de stocker les informations relatives aux utilisateurs de l'application.

Chaque utilisateur possède un identifiant unique appelé `id`.

Chaque utilisateur possède un prénom stocké dans le champ `first_name`.

Chaque utilisateur possède un nom de famille stocké dans le champ `last_name`.

Chaque utilisateur possède une adresse e-mail stockée dans le champ `email`.

L'adresse e-mail d'un utilisateur doit être unique dans la base de données.

Chaque utilisateur possède un mot de passe stocké dans le champ `password`.

Chaque utilisateur possède un rôle stocké dans le champ `role`.

Le rôle permet de déterminer les permissions et les fonctionnalités auxquelles l'utilisateur peut accéder.

Chaque utilisateur possède un indicateur `is_active` permettant de déterminer si son compte est actuellement actif.

Chaque utilisateur possède une date de création enregistrée dans le champ `created_at`.

Chaque utilisateur possède une date de dernière modification enregistrée dans le champ `updated_at`.

## Table `crm`

La table `crm` permet de stocker les différents produits ou solutions CRM proposés par l'application.

Chaque CRM possède un identifiant unique appelé `id`.

Chaque CRM possède un nom enregistré dans le champ `nom`.

Chaque CRM possède une description enregistrée dans le champ `description`.

Chaque CRM possède une liste ou une description des technologies utilisées enregistrée dans le champ `technologies`.

Chaque CRM possède une information concernant le système de base de données utilisé, enregistrée dans le champ `base_de_donnees`.

Chaque CRM possède un prix enregistré dans le champ `price`.

Le prix d'un CRM doit toujours être strictement positif.

Chaque CRM possède une version enregistrée dans le champ `version`.

## Table `client`

La table `client` permet de représenter les utilisateurs ayant effectué ou étant susceptibles d'effectuer un achat.

Chaque client possède un identifiant unique appelé `id_client`.

Chaque client est associé à un utilisateur grâce au champ `id_user`.

Le champ `id_user` est une clé étrangère qui référence l'identifiant `id` de la table `user`.

Un client ne peut donc être associé qu'à un utilisateur existant dans la base de données.

Chaque client possède une date d'achat enregistrée dans le champ `date_achat`.

Chaque client possède un statut enregistré dans le champ `status`.

Le statut d'un client peut prendre l'une des valeurs suivantes : `en_cours`, `valide`, `refuse` ou `annule`.

Le statut `en_cours` indique que le processus concernant le client est actuellement en cours.

Le statut `valide` indique que le client a été validé.

Le statut `refuse` indique que le client a été refusé.

Le statut `annule` indique que le processus concernant le client a été annulé.

## Table `messages`

La table `messages` permet de stocker les messages envoyés par les utilisateurs.

Chaque message possède un identifiant unique appelé `id_message`.

Chaque message est associé à un utilisateur grâce au champ `id_user`.

Le champ `id_user` est une clé étrangère qui référence l'identifiant `id` de la table `user`.

Le champ `id_user` permet d'identifier l'utilisateur ayant envoyé le message.

Le champ `first_name` permet de conserver le prénom de l'expéditeur au moment où le message est envoyé.

Le champ `last_name` permet de conserver le nom de famille de l'expéditeur au moment où le message est envoyé.

La conservation du prénom et du nom dans la table `messages` permet de conserver l'identité de l'expéditeur telle qu'elle était au moment de l'envoi du message.

Chaque message possède un objet enregistré dans le champ `objet_message`.

Chaque message possède un contenu enregistré dans le champ `content`.

Chaque message possède une date de création enregistrée dans le champ `created_at`.

Chaque message possède une date de dernière modification enregistrée dans le champ `updated_at`.

## Table `commandes`

La table `commandes` permet de stocker les commandes effectuées par les clients.

Chaque commande possède un identifiant unique appelé `id_commande`.

Chaque commande est associée à un client grâce au champ `id_client`.

Le champ `id_client` est une clé étrangère qui référence l'identifiant `id_client` de la table `client`.

Chaque commande est associée à un CRM grâce au champ `id_crm`.

Le champ `id_crm` est une clé étrangère qui référence l'identifiant `id` de la table `crm`.

Chaque commande possède une date de commande enregistrée dans le champ `date_commande`.

Chaque commande possède un statut enregistré dans le champ `status`.

Le statut d'une commande peut prendre l'une des valeurs suivantes : `en_cours`, `valide`, `refuse` ou `annule`.

Le statut `en_cours` indique que la commande est actuellement en traitement.

Le statut `valide` indique que la commande a été validée.

Le statut `refuse` indique que la commande a été refusée.

Le statut `annule` indique que la commande a été annulée.

Chaque commande possède une date de création enregistrée dans le champ `created_at`.

Chaque commande possède une date de dernière modification enregistrée dans le champ `updated_at`.

## Table `factures`

La table `factures` permet de stocker les factures associées aux commandes des clients.

Chaque facture possède un identifiant unique appelé `id_facture`.

Chaque facture est associée à un client grâce au champ `id_client`.

Le champ `id_client` est une clé étrangère qui référence l'identifiant `id_client` de la table `client`.

Chaque facture est associée à une commande grâce au champ `id_commande`.

Le champ `id_commande` est une clé étrangère qui référence l'identifiant `id_commande` de la table `commandes`.

Chaque facture possède un montant enregistré dans le champ `montant`.

Le montant d'une facture doit être strictement positif.

Chaque facture possède une date de facturation enregistrée dans le champ `date_facture`.

Le champ `nbr_fois_paye` permet d'enregistrer le nombre de fois où le paiement de la facture a été effectué.

Le champ `type_contrat` permet d'identifier le type de contrat associé à la facture.

Chaque facture possède un statut enregistré dans le champ `status`.

Le statut d'une facture peut prendre l'une des valeurs suivantes : `paid`, `unpaid` ou `pending`.

Le statut `paid` indique que la facture a été entièrement payée.

Le statut `unpaid` indique que la facture n'a pas été payée.

Le statut `pending` indique que le paiement de la facture est actuellement en attente.

Chaque facture possède une date de création enregistrée dans le champ `created_at`.

Chaque facture possède une date de dernière modification enregistrée dans le champ `updated_at`.

# Relations entre les tables

Un utilisateur peut être associé à un ou plusieurs clients selon les règles métier définies par l'application.

Un utilisateur peut envoyer plusieurs messages.

Un client peut posséder plusieurs commandes.

Un client peut être associé à plusieurs factures.

Un CRM peut être associé à plusieurs commandes.

Une commande appartient à un client.

Une commande est associée à un CRM.

Une commande peut être associée à une facture.

Une facture appartient à un client.

Une facture est associée à une commande.

# Contraintes principales

L'adresse e-mail enregistrée dans `user.email` doit être unique.

Les clés étrangères doivent obligatoirement référencer des enregistrements existants.

Une commande ne peut donc pas être créée avec un `id_client` qui n'existe pas dans la table `client`.

Une commande ne peut pas être créée avec un `id_crm` qui n'existe pas dans la table `crm`.

Une facture ne peut pas être créée avec un `id_client` qui n'existe pas dans la table `client`.

Une facture ne peut pas être créée avec un `id_commande` qui n'existe pas dans la table `commandes`.

Le champ `price` de la table `crm` doit contenir une valeur strictement positive.

Le champ `montant` de la table `factures` doit contenir une valeur strictement positive.

Les champs `status` doivent uniquement accepter les valeurs définies par les règles métier.

Les champs `created_at` permettent de connaître la date de création d'un enregistrement.

Les champs `updated_at` permettent de connaître la date de dernière modification d'un enregistrement.

Les champs `created_at` et `updated_at` permettent ainsi d'assurer la traçabilité des données et des modifications effectuées dans le système.

# Fonctionnement global

Le système permet de gérer les utilisateurs de l'application, les clients, les solutions CRM disponibles, les messages, les commandes et les factures.

Un utilisateur peut devenir client lorsqu'il entre dans le processus commercial.

Un client peut ensuite effectuer une commande portant sur un CRM disponible dans le système.

La commande permet de relier le client au CRM qu'il souhaite acquérir.

Une facture peut ensuite être générée à partir de la commande afin de gérer le paiement et le suivi financier.

Les statuts permettent de suivre l'évolution des clients, des commandes et des factures tout au long du processus commercial.

L'ensemble des relations entre les tables permet de conserver la cohérence des données et d'assurer le suivi complet du parcours commercial, depuis l'utilisateur jusqu'à la commande et à la facturation.
