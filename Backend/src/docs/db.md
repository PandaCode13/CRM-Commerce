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