# CRM COMMERCE — Brand Book v1.0

Identité visuelle complète.
Document de référence. Toute décision visuelle du projet doit être justifiable par une section de ce document.

---

## 0. Diagnostic de l'existant (avant propositions)

Audit réalisé sur le dépôt réel, pas sur une intention.

| Constat | Où | Conséquence |
|---|---|---|
| 2 couleurs d'accent concurrentes : violet `#863bff` (logo/favicon) et cyan `#7dd3fc` (toute l'UI) | `design.md:20`, `index.html`, `logo.png` | La marque n'est pas identifiable. Le logo et le produit appartiennent à deux systems. |
| **57 codes HEX distincts** codés en dur, non factorisés | `Pages/user/css/dashboard.css`, `Pages/admin/css/dashboard.css`, `navbar.css`, `home.css` | Impossible de produire « plusieurs CRM depuis un socle » : chaque CRM duplique et diverge. |
| Le fichier de design system ne décrit que la **landing page** | `design.md` | Aucune règle pour les dashboards, qui sont le vrai produit. |
| Typographie mono-famille (Inter) | `index.html:49` | Pas de voix de marque, pas de registre distinct pour les documents/contrats. |
| Esthétique « dark SaaS + glow » (= template 2021) | `design.md:120`, cartes | Donne l'impression d'un template, pas d'un produit. |
| Catalogue vide, produits non encore listés | `Pages/user/catalog.jsx` | Le actif de marque n'existe pas encore visuellement. Priorité. |

**Le blocage n°1 n'est pas la palette. C'est l'absence de couche de tokens.**
Tant que le HEX est écrit dans le CSS, aucune identité ne peut se propager à un nouveau CRM.

---

## A. ADN DE MARQUE

6 adjectifs. Chacun est une décision de design, pas un mot d'accroche.

### 1. FONDÉ
Le socle n'est pas une étape de construction, c'est l'actif. Tout part de là.
→ **Traduction** : géométrie descendante. Une base pleine et lourde, des éléments qui s'en détachent. Jamais de forme flottante sans appui. Le logo a un point d'ancrage bas. Le pied des cartes est plus épais que le haut.

### 2. SECTORIEL
La spécialité est le produit. Un CRM généraliste ne peut pas se dire « métier ».
→ **Traduction** : chaque CRM sectoriel possède une **teinte propre** (voir §E.6) prise dans une seule famille chromatique. Le catalogue montre le métier par la couleur, pas par une photo. Un secteur = une nuance de la même matière.

### 3. BÂTI
Ce n'est pas une entreprise qui édite un logiciel, c'est un atelier qui construit un outil. Le terme de la promesse est « le CRM qui **part** de votre métier ».
→ **Traduction** : surface de travail, pas de showroom. Densité moyenne, typographie de labeur, détails techniques visibles (horodatages, versions, identifiants). Le vide est modéré, jamais décoratif.

### 4. TRANSPARENT
Autonomie, code source fourni, audit, corbeille, traçabilité. Le client doit voir l'intérieur.
→ **Traduction** : pas de verre dépoli opaque, pas de flou marketing. États visibles, causes toujours explicables, angles nets, bordures franches plutôt que dégradés. Le journal d'audit est un composant de premier plan, pas un menu caché.

### 5. SOBRE
Décision esthétique forte : la couleur est rare. Si tout est accentué, rien ne l'est.
→ **Traduction** : maximum 5 % de surface colorée, un seul accent. L'ambre est le seul élément « chaleureux » et il sert à la valeur et à l'action, pas à la décoration.

### 6. COMPOSABLE
Le cœur du concept : 1 socle → plusieurs CRM → plusieurs métiers.
→ **Traduction** : une primitive unique repeated. Rectangle à rayon dérivé de la taille du module. Le rayon n'est pas une constante décorative, c'est une **échelle** qui encodes la modularité.

---

## B. PERSONNALITÉ

**Archétype : l'ingénieur-artsisan.**

Ni le commercial qui vend des licences, ni le géant qui affiche son chiffre d'affaires. Celui qui montre son établi et explique pourquoi c'est solide.

| Axe | Position | Lecture |
|---|---|---|
| Sérieux ↔ Accessible | **80 / 20** | Sérieux dominant. L'accessibilité vient de la clarté, pas du ton. |
| Moderne ↔ Intemporel | **70 / 30** | Moderne, mais sans trend. Aucune effets à durée de vie courte. |
| Transparent ↔ Opaque | **75 / 25** | On montre le fonctionnement. |
| Structuré ↔ Flexible | **60 / 40** | La structure est la promesse ; la promesse est l'élasticité. |
| Humain ↔ Institutionnel | **55 / 45** | Une personne réelle derrière, mais une methods. |

**S'il s'adressait à un client en face :** il parle en phrases courtes, il donne les chiffres avant les adjectifs, il dit ce que le système ne fait pas.

---

## C. VALEURS VISUELLES

1. **La couleur est une hiérarchie, jamais une décoration.** Si une couleur n'exprime pas un rang ou un état, elle n'est pas là.
2. **La densité maîtrisée.** Riche en information, calme à l'œil. Un dashboard peut être plein sans être bruyant.
3. **Le détail qui prouve.** Un champ « V3 », un `#C-0142`, un « 3 mois · expire le 13/12 » : ce sont eux qui vendent la confiance.
4. **La structure visible.** Grille, rail, hiérarchie. On doit deviner l'architecture avant de lire le texte.
5. **Le calme.** Pas de parallaxe, pas de bounce, pas de particules.

---

## D. POSITIONNEMENT VISUEL

### La métaphore directrice : **L'ÉTABLI**

Pas « la plateforme ». Pas « l'écosystème ». **L'établi** : un plan de travail, des outils, une pièce en cours, une main qui sait ce qu'elle fait.

| CRM Commerce est | CRM Commerce n'est pas |
|---|---|
| L'atelier qui construit l'outil du métier | La suite horizontale qui stocke des données |
| Le socle dont on dérive des modules | Le catalogue de gadgets sectoriels |
| L'ingénieur qui explique son choix | LePlaceholder qui remplit des cases |
| Le produit qui montre ses coutures | La boîte noire propriétaire |

**Les 3 références visuelles légitimes :** l Conventions des ateliers d'ingénierie (ateliers prototypes), l'interface d'outils developers (dense, sobre, exacte), l'identité d'éditeurs de systèmes d'exploitation (modulaire, technique, sobre).

**Le piège à éviter absolument :** l'esthétique « SaaS dark purple glow » — c'est-à-dire exactement ce qui est actuellement en place. C'est aujourd'hui l'identité de plusieurs milliers de startups, dont aucune n'est CRM Commerce.

---

## E. PALETTE DE COULEURS

### E.1 Principe fondateur

> **Les neutres sont teintés de violet. Ce n'est pas un détail, c'est le système.**

Si les surfaces sont des gris bleutés et que la marque est violette, le logo flotte au-dessus du produit. Si les surfaces portent la même teinte que la marque, **le produit et le logo sont taillés dans la même matière**. C'est l'application directe du concept « 1 socle → plusieurs modules ».

Violet de fond : `hue 258°`. Noir de base : `#08070D` (R8 G7 B13) — 5 points de violet dans le noir.

---

### E.2 Palette — Thème sombre (défaut, écran & produit)

#### Neutres — « Matière »

| Nom | HEX | RGB | Rôle | Utiliser | Éviter |
|---|---|---|---|---|---|
| Void | `#08070D` | 8, 7, 13 | Fond de page, canevas | Fond global, zones de respiration | Texte, aplats behind contenu |
| Deep | `#0D0B16` | 13, 11, 22 | Fond de section | Bandes alternées, footer | Cartes (trop proche de Void) |
| Panel | `#12101F` | 18, 16, 31 | Panneau, sidebar, modale | Sidebar, tiroirs, panneaux de filtre | Fonds de tableau dense |
| Card | `#191627` | 25, 22, 39 | Carte, surface de travail | Cartes KPI, cartes produit | Texte (contraste insuffisant) |
| Raised | `#232036` | 35, 32, 54 | Survol, actif, champ | `:hover`, champ focus, ligne active | Fond de zone large |
| Line | `#2E2A44` | 46, 42, 68 | Bordure visible | Bordures denses, séparateurs | Fond |
| Disabled | `#4A4566` | 74, 69, 102 | Élément désactivé | Texte off, bordure off | Texte informatif |

#### Texte

| Nom | HEX | RGB | Rôle | Contraste sur Void |
|---|---|---|---|---|
| Text Hi | `#F4F2FA` | 244, 242, 250 | Titres, valeurs, texte principal | **18,1:1** — AAA |
| Text Mid | `#B6B1CC` | 182, 177, 204 | Texte courant, libellés | **9,7:1** — AAA |
| Text Low | `#918CA9` | 145, 140, 169 | Légendes, métadonnées, placeholders | **6,1:1** — AA+ |
| Text On Brand | `#FFFFFF` | 255, 255, 255 | Texte sur aplat violet `Brand 500` | **5,3:1** — AA |
| Text On Signal | `#0A0910` | 10, 9, 16 | Texte sur aplat ambre `Signal 500` | **9,9:1** — AAA |

> Ratios mesurés sur le pire cas de surface (`Void` pour le texte, `Card` pour les aplats).
> `#8A85A3` a été remplacé par `#918CA9` : le précédent tombait à **5,0:1** sur `Card`, à la limite de l'AA.

#### Marque — « Socle » (violet-indigo)

| Nom | HEX | RGB | Rôle | Utiliser | Éviter |
|---|---|---|---|---|---|
| Brand 700 | `#4A2FD6` | 74, 47, 214 | Lien texte, survol | Texte de lien en thème clair, hover dark | Fond d'interface (trop sombre) |
| Brand 600 | `#5B3DE8` | 91, 61, 232 | Action principale | Fond de bouton, accent de navigation | Texte de corps |
| Brand 500 | `#6C4BF4` | 108, 75, 244 | **Couleur principale** | Bouton primaire, focus, sélection | Fond de section (trop présent) |
| Brand 400 | `#8E72F8` | 142, 114, 248 | Action sur fond sombre | Hover bouton dark, icône active | Texte long |
| Brand 300 | `#B6A3FC` | 182, 163, 252 | Bordure colorée, wash | Bordure de focus, fond selected | Texte (contraste insuffisant) |
| Brand Wash | `rgba(108,75,244,0.12)` | — | Fond selected / tint | Ligne sélectionnée, badge actif | Fond de carte entière |

#### Signal — « Commerce » (ambre)

| Nom | HEX | RGB | Rôle | Utiliser | Éviter |
|---|---|---|---|---|---|
| Signal 700 | `#96590A` | 150, 89, 10 | **Signal en texte sur fond clair** | Accent ambre en thème clair (5,6:1 sur blanc) | Thème sombre |
| Signal 600 | `#C97F1E` | 201, 127, 30 | Bordure, wash, chart (clair) | Fond `Signal Wash`, bordure d emphasizing | **Texte sur blanc** (3,2:1 — échoue AA) |
| Signal 500 | `#F2A93B` | 242, 169, 59 | **Couleur d'accent commerce** | KPI « CA », prix, badge « Populaire », CTA secondaire | Fond de grand bloc, texte de paragraphe |
| Signal Wash | `rgba(242,169,59,0.12)` | — | Fond de badge ambre | Badge tarif, ligne mise en avant | — |

> **L'ambre est la seule couleur chaude de la marque.** Elle existe pour empêcher le violet de devenir froid, et pour désigner le commerce (prix, volume, valeur). Elle ne doit jamais devenir une troisième couleur décorative.

#### Données — « Systèmes » (cyan)

| Nom | HEX | RGB | Rôle |
|---|---|---|---|
| Data 500 | `#38BDF8` | 56, 189, 248 | **Graphiques et données uniquement** |

> Le cyan est **explicitement promu hors du chrome d'interface**. Il ne colore plus un seul bouton, un seul lien, une seule bordure. Il n'apparaît que dans : séries de graphiques, graphe d'architecture, état « synchronisé », visualisation du socle.
> C'est la seule façon de garder une 3ᵉ couleur sans salir le système. Aujourd'hui il est utilisé comme accent n°1 : c'est à supprimer.

#### États

| État | Sombre HEX | RGB | Clair HEX | Fond (sombre) | Fond (clair) |
|---|---|---|---|---|---|
| Succès | `#2FBF71` | 47, 191, 113 | `#157F4A` | `rgba(47,191,113,0.13)` | `rgba(21,127,74,0.09)` |
| Erreur | `#F2555A` | 242, 85, 90 | `#C2333A` | `rgba(242,85,90,0.13)` | `rgba(194,51,58,0.09)` |
| Avertissement | `#E8A33D` | 232, 163, 61 | `#A96A12` | `rgba(232,163,61,0.13)` | `rgba(169,106,18,0.10)` |
| Information | `#4C8DF6` | 76, 141, 246 | `#1E5BC4` | `rgba(76,141,246,0.13)` | `rgba(30,91,196,0.09)` |

> Un état = **pastille + libellé texte**, jamais la couleur seule. Accessibilité obligatoire.

---

### E.3 Palette — Thème clair (documents, contrats, lecture dense)

| Rôle | HEX | RGB | Contraste mesuré |
|---|---|---|---|
| Canvas | `#F6F7FA` | 246, 247, 250 | — |
| Surface | `#FFFFFF` | 255, 255, 255 | — |
| Sunken | `#F1F3F7` | 241, 243, 247 | — |
| Text Hi | `#17132A` | 23, 19, 42 | 16,9:1 sur Canvas — AAA |
| Text Mid | `#565173` | 86, 81, 115 | 7,0:1 — AAA |
| Text Low | `#6B6478` | 107, 100, 120 | 5,7:1 / 5,3:1 sur Sunken — AA |
| Border | `#E4E2EC` | 228, 226, 236 | bordure |
| Border Strong | `#D2CFDE` | 210, 207, 222 | bordure marquée |
| Brand (action) | `#5B3DE8` | 91, 61, 232 | 6,4:1 sur blanc — AA |
| Brand (lien texte) | `#4A2FD6` | 74, 47, 214 | 7,9:1 — AAA |
| Signal (texte) | `#96590A` | 150, 89, 10 | 5,6:1 — AA |
| Erreur (texte) | `#C2333A` | 194, 51, 58 | 5,5:1 — AA |
| Avertissement | `#A96A12` | 169, 106, 18 | 4,4:1 — AA (grands tx. seulement) |

**Règle de bascule :** le thème clair n'est pas « le thème sombre inversé ». Il a sa propre structure : ombres réelles (pas de glow), bordures franches, densité identique.

**Quand basculer ?** Le clair est le thème par défaut pour : contrats, documents générés, factures, export PDF, pages de lecture longue, impression. Le sombre est le défaut pour : marketplace, dashboards, navigation.

---

### E.4 Ratio recommandé

**Interface (écran de travail) :**

| Famille | Part de la surface |
|---|---|
| Neutres (Void → Line) | **82 %** |
| Texte & bordures | 13 % |
| Violet (Brand) | **4,5 %** |
| Ambre (Signal) | 0,4 % |
| Cyan (Data) | 0,1 % |

**Marketing / présentation :**

| Famille | Part |
|---|---|
| Neutres | 74 % |
| Texte | 14 % |
| Violet | 10 % |
| Ambre | 2 % |

> Règle mnémotechnique : **le violet ne doit jamais dépasser la surface d'une carte principale sur une page.**

---

### E.5 Pourquoi ces choix

- **Violet-indigo plutôt que cyan** : le cyan `#7dd3fc` est l'accent par défaut de Tailwind depuis 2020. Il ne peut plus être un signe distinctif. Le violet-indigo porte en plus la connotation « plateforme / socle / b2b » sans la cliché du SaaS mauve vif.
- **Neutres teintés** : c'est le seul levier qui relie le logo au produit sans changer de logo. See `tokens.css`.
- **Ambre** : introduit de la chaleur humaine et signale la valeur. Un produit « commerce » qui ne montre jamais de chiffre en ambre manque son propre nom.
- **Cyan cantonné aux données** : le graphe d'architecture « 1 socle → 3 CRM » est le moment où le cyan est légitime. Ailleurs, c'est du bruit.

---

### E.6 Teintes sectorielles (différenciation des CRM)

Pour que chaque CRM sectoriel soit identifiable sans changer la marque, on utilise **une seule variable** : `--module-hue`.

| Secteur | Module | Teinte |
|---|---|---|
| Socle (commun) | Base | `#6C4BF4` violet |
| Immobilier | `--module` | `#6C4BF4` |
| Santé | `--module` | `#3F8CF5` |
| Hôtellerie | `--module` | `#2FA9A0` |
| Restaurant | `--module` | `#E08A2E` |
| RH | `--module` | `#B455D6` |
| Automobile | `--module` | `#4E7BE0` |
| Bâtiment | `--module` | `#8A7A4E` |

**Règle** : la teinte ne s'applique **qu'au liseré gauche de la carte, à l'icône de catégorie, et à l'anneau du graphe.** Jamais au bouton, jamais au fond de page, jamais au texte courant. Un changement de teinte ne doit pas ressembler à un changement de marque.

---

## F. TYPOGRAPHIE

### F.1 Les trois voix

| Rôle | Famille | Justification |
|---|---|---|
| **Voix de marque** — titres, couverture, marketing, documents commerciaux | **IBM Plex Sans** 500/600/700 | Dessinée par des ingénieurs, pour des gens techniques. Instillationnel etuhnlich, **pas** « startup ». A une vraie identité de glyphe. C'est le choix anti-générique. |
| **Voix machine** — UI, tableaux, formulaires, dashboards, corps de texte long à l'écran | **Inter** 400/500/600/700 | Excellente en densité, chiffres tabulaires intégrés, très lisible en petit. Déjà chargée, donc coût nul. |
| **Voix preuve** — KPI, identifiants, n° de contrat, journal d'audit, versions, code, unitée | **IBM Plex Mono** 400/500/600 | Le détail qui prouve l'ADN (§C). Un numéro de contrat en chasse fixe est un acte de rigueur, pas un effet. |

> **Alternativesi tu veux réduire à 2 familles :** supprime IBM Plex Sans et passe les titres en Inter 800 avec `letter-spacing: -0.03em`. L'identité reste cohérente, mais perd sa voix propre.

### F.2 Chargement

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@500;600;700&family=IBM+Plex+Mono:wght@400;500;600&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
```

Auto-héberger si la cible est 100 % francophone (RGPD / performance) : `woff2` uniquement, `font-display: swap`, une seule graisse par style sauf titres.

### F.3 Échelle

Base 16 px. Rythme vertical based sur une grille de 4 px.

| Rôle | Taille | Graisse | Ligne | Tracking | Police |
|---|---|---|---|---|---|
| Display XL (couverture) | `clamp(40px, 6vw, 72px)` | 700 | 1.05 | −0.03em | Plex Sans |
| H1 (hero) | `clamp(30px, 4.5vw, 48px)` | 700 | 1.10 | −0.025em | Plex Sans |
| H2 (section) | `clamp(23px, 3vw, 33px)` | 600 | 1.18 | −0.02em | Plex Sans |
| H3 (carte) | `19px` | 600 | 1.30 | −0.01em | Plex Sans |
| H4 (bloc) | `16px` | 600 | 1.35 | 0 | Plex Sans |
| Lead (chapeau) | `18px` | 400 | 1.65 | 0 | Inter |
| Body L | `16px` | 400 | 1.65 | 0 | Inter |
| Body | `15px` | 400 | 1.60 | 0 | Inter |
| Body S | `14px` | 400 | 1.55 | 0 | Inter |
| Label | `13px` | 500 | 1.40 | 0 | Inter |
| Eyebrow | `11.5px` | 600 | 1.40 | **0.10em** UPPERCASE | Inter |
| Caption | `12px` | 400 | 1.45 | 0.01em | Inter |
| **KPI** | `32px` | 600 | 1.00 | −0.02em | **Plex Mono** `tabular-nums` |
| **Identifiant** | `13px` | 500 | 1.4 | 0.01em | **Plex Mono** |
| Code inline | `13px` | 400 | 1.5 | 0 | Plex Mono, fond `--surface-sunken` |

**Règles :**
- Jamais plus de 700. Jamais d'`italic` sur plus de 30 mots. Jamais de texte justifié.
- Un H1 par page. Le H1 est une phrase, pas un mot.
- `font-variant-numeric: tabular-nums` **obligatoire** dans tout tableau, KPI, colonne de prix, compteur d'audit.
- Chiffres en corps de texte : `font-feature-settings: 'tnum' 1;` pour aligner les colonnes.

---

## G. LOGO

3 concepts. Aucun ne représente une poignée de main, une personne, un écran, ni un graphique financier.

---

### CONCEPT 1 — « LE SOCLE » *(recommandé)*

**Construction.** Un rectangle plein en bas : la base. Depuis cette base, trois montants verticaux de hauteurs égales s'élèvent. Chaque montant est un rectangle au même rayon que la base. Un fourth petit carré détaché flotte au-dessus du montant de droite, suggérant le module en cours de construction.

```
   ▪
  ▮ ▮ ▮
  ▮ ▮ ▮
  ▮ ▮ ▮
 ███████████
```

**Grille.** Grille 24×24. Base : 20 × 5 px de haut, rayon 2. Montants : 4 × 13 px, rayon 2, écart 4 px. Gap vertical base/montants : 2 px.

**Sens.** Le socle porte. Les modules montent. Rien ne flotte sans appui — cohérent avec l'adjectif FONDÉ.

**Rapport CRM** : la base est le socle technique commun. **Rapport modularité** : les montants sont interchangeables, tous rigoureusement identiques → c'est la définition graphique de « plusieurs CRM identiques en structure, différents en métier ». **Rapport commerce** : la pile verticale évoque un rayonnage, un catalogue, des rayons.

**Favicon** : Excellent. Réduit à 16 px, on ne garde que la base + 3 montants. Lisible sans couleur (remplissage plein). **C'est le seul concept des trois qui survit au 16 px sans ambiguïté.**

**Risque** : peut se lire « barre de progression » enReduction seul. Le mitigé : en usage complet, la présence des 3 montants Regulations.

---

### CONCEPT 2 — « LE MODULE »

**Construction.** Un carré de 14×14 px. Depuis son coin supérieur droit, 3 carrés de 6×6 px s'échappent en éventail, orientés −30°, 0°, +30°. Un trait de 1,5 px relie chaque petit carré au carré central. Coins arrondis 2 px partout.

**Sens.** Un noyau, plusieurs modules qui en émergent. L'angle d'échappement rend le mouvement, pas juste la juxtaposition.

**Rapport CRM** : la relation est explicite (un → plusieurs). **Rapport modularité** : chaque module est identique, seule sa direction change → le métier module le système, pas l'inverse. **Rapport commerce** : l'éventail évoque le choix, la sélection dans un catalogue.

**Favicon** : Moyen. À 16 px, les 3 traits de liaison disparaissent. Il faut alors supprimer les traits → le favicon devient 4 carrés, plus faible.

**Usage recommandé** : logo de campagne, illustration de couverture, motif de fond. **Pas le favicon.**

---

### CONCEPT 3 — « LA BRANCHE »

**Construction.** Un trait unique de 1,75 px part du bas à gauche, monte verticalement sur 40 % de la hauteur, puis se divise en trois courbes de Bézier vers trois points terminaux. Extrémités : ronds de 3 px de diamètre. Le trait est à Coins arrondis (round cap), la fourche est symétrique.

**Sens.** La fourche. C'est la traduction la plus littérale de la promesse : un tronc, plusieurs voies.

**Rapport CRM** : excellent. **Rapport modularité** : excellent. **Rapport commerce** : faible — c'est le point faible du concept, il ne dit rien du commerce.

**Favicon** : Bon, à condition de supprimer les courbes et de conserver 3 segments droits à 45°.

**Usage recommandé** : alternative sobre pour un environnement sobre (contrats, en-tête de document, signature).

---

### Règles communes aux 3 concepts

| Règle | Détail |
|---|---|
| Zone de protection | `= hauteur du symbole × 0,5` sur les 4 côtés |
| Taille minimale | 24 px (symbole seul) / 120 px (lockup horizontal) |
| Favicon | 16, 32, 180, 192 px + monochrome SVG |
| Monochrome | Obligatoire : une seule couleur, sur fond clair **et** sombre |
| Ne jamais | incliner, incliner, mettre en dégradé, ajouter d'ombre, entourer d'un cercle |
| Version claire | `theme-color: #08070D` (dark) — cohérent avec le fond Void |

### Lockup

```
[symbole]  CRM Commerce
           Socle CRM métier
```

- `CRM Commerce` : IBM Plex Sans 600, 18 px, tracking −0.02em, Text Hi / #17132A
- `Socle CRM métier` : Inter 500, 11 px, tracking 0.08em, UPPERCASE, Text Low
- Le baseline (la signature sous le nom) ne doit apparaître que si la hauteur du lockup ≥ 32 px.

---

## H. SYMBOLIQUE

Cinq formes portent l'identité. Elles doivent être réutilisables comme **motif décoratif** (fonds, séparateurs, illustrations) et comme **composants UI**.

| Forme | Nom | Construction | Sens |
|---|---|---|---|
| ▭ | **Le Module** | Rectangle à rayon dérivé | L'unité de base. Tout est module. |
| ▬ | **Le Rail** | Trait 2 px, longueur variable | Le lien entre modules. Utilisé en séparateur et en bordure active. |
| ● | **Le Nœud** | Cercle 8 px, 2 px de trait | Un point de données, une étape, un état. |
| ⑂ | **La Bifurcation** | 1 trait → 3 | Le concept directeur. Signature du projet. |
| ▦ | **La Grille** | Modules alignés, gap 8 px | L'architecture, le catalogue. |

**Le motif de fond signature — « La Trame »** : une grille de modules carrés (12×12 px, gap 8 px, opacité 4 %) avec 1 module sur 12 rempli en Brand 500 à 22 % d'opacité. Utilisé en fond de hero et de section CTA. C'est la texture de l'ensemble, et elle est directamente l'idée du projet.

---

## I. FORMES GRAPHIQUES

### I.1 Le rayon : une échelle, pas une constante

C'est la décision de forme la plus importante. Le rayon encode la taille du module — donc la modularité.

| Élément | Rayon | Justification |
|---|---|---|
| Nœud / tag / pastille | `4px` | Plus petit module, angle serré |
| Champ, bouton, badge | `9px` | Module de contrôle |
| Carte, tuile KPI | `16px` | Module de contenu |
| Panneau, modale | `22px` | Module de surface |
| Timeline pill, badge | `999px` | Module de statut |
| pastille d'état | `3px` | Pixel de donnée |

**Pourquoi ces nombres :** ce sont des multiples nearby d'une base 8/9 cohérente. Le passage d'un rayon à l'autre est **prévisible** — on sait à quelle taille de module on a affaire.

### I.2 Règle des formes

- **Toujours** : coins arrondis selon l'échelle ci-dessus. Jamais de `border-radius: 0`.
- **Toujours** : un rayon unique par élément. Pas de rayon top-seul.
- **Toujours** : bordure 1 px. Jamais 2 px sur une UI de travail (réservé à la mise en avant marketing).
- **Interdit** : capsule totale sur un bloc de contenu (> 100 px de large).
- **Interdit** : forme à 6 ou 8 côtés, forme figurative, forme « blob », dégradé sur la forme.
- **Autorisé, encadré** : le losange 8×8 px du séparateur de section (repris de l'existant, mais violet et non cyan).

### I.3 Épaisseur de trait

| Contexte | Trait |
|---|---|
| Interface de travail | 1 px |
| Séparateur / rail | 2 px |
| Illustration / logo | 1,75 – 2 px |
| Mise en avant marketing | 2 px |

---

## J. ICONOGRAPHIE

### J.1 Style

| Paramètre | Valeur | Raison |
|---|---|---|
| Style | **Outline** | Cohérent avec BÂTI et TRANSPARENT. Le filled est plus « playful » et plus SaaS-générique. |
| Grille | **24 × 24** | La même que le symbole du logo → un seul système. |
| Tracé | **1,75 px** | Assez présent pour 16 px, assez fin pour 32 px. |
| Extrémités | **Round cap** | Douce le ton, prolonge les courbes du logo. |
| Jointures | **Round join** | Cohérence totale avec le logo. |
| Rayon d'angle | **2 px** | Exactement le rayon du logo. Trace commune. |
| Détail | **Bas** — 1 ou 2 niveaux max | Une icône complexe n'est plus une icône en SaaS. |
| Coins du carré de vue | 2 px | Reproduit l'angle de la marque. |

> **Règle d'or :** si on doit simplifier pour tenir dans 16 px, c'est qu'elle était trop détaillée. Le set complet doit rester lisible à 100 % en 16 px, noir sur blanc.

### J.2 Jeu d'icônes nécessaire au projet

Toutes disponibles en outline 1,75 px sur grille 24.

| Concept | Icône | Construction | Usage |
|---|---|---|---|
| **CRM / Système** | Modules empilés | 3 rectangles décalés de 4 px | Socle, catalogue CRM |
| **Utilisateur** | Cercle + arc | Ø 8 + arc à y=17 | Compte, opérateur |
| **Entreprise** | Carré + toit plat | 14×14 avec 2 lignes | Société cliente, tenancy |
| **Client / Contact** | Silhouette buste | Ø 7 + trapèze | Fiche client, lead |
| **Document** | Page + 3 lignes | 14×18, lignes à y=8/12/16 | Documents générés |
| **Contrat** | Page + signature | Page + trait en bas à gauche | Contrats, devis |
| **Facture** | Page + ligne + € | Montant aligné à droite | Facturation |
| **Dashboard** | 3 barres verticales | Hauteurs 8/12/16, base commune | Tableau de bord |
| **Paramètres** | 6 sliders horizontaux | 3 lignes × 2 curseurs | Configuration |
| **Personnalisation** | Curseur + module | 3 sliders dont 1 en violet | Champs personnalisés |
| **Sécurité** | Bouclier + rainure | 12×14 + 1 ligne interne | Sécurité, RGPD |
| **Audit** | Horloge + coche | Cercle 14 + 2 traits | Journal d'audit |
| **Automatisation** | Engrenage + éclair | Roue 8 + zigzag | Workflows, triggers |
| **Version** | 2 couches superposées | 2 rectangles décalés | Versions, V1/V2/V3 |
| **Corbeille** | Couvercle + corps | 12×14 + lid 14×2 | Corbeille, suppression |
| **Personne** | 2 cercles | 2 silhouettes décalées | Équipe, rôles |
| **Marketplace** | Grille 2×2 + liseré | 4 carrés 8×8 | Catalogue, catalogue CRM |
| **Code source** | Chevrons + slash | `< / >` monospace | Code fourni, Git |
| **Base de données** | 3 cylindres empilés | 3 ellipses | Données, schéma |
| **Documentation** | Livre ouvert | 2 pages + reliure centrale | Documentation |
| **Secteur** | Building / tag | Étiquette à encoche | Secteur d'activité |
| **Clé** | Circle + tige à 2 dents | Clé de licence | Droits, licence |
| **Export** | Boîte + flèche montante | ↑ hors du cadre | Export PDF / Excel |

### J.3 Icônes système

- **Temps** : une seule horloge, un seul format. `14/03/2026 · 14:32`
- **Identifiant** : `#C-0142` en mono, jamais en Inter.
- **Statut** : pastille 8 px + libellé. Jamais une icône seule pour signifier un état.

---

## K. UI / UX

### K.1 Principes

1. **Le contenu d'abord.** Chrome réduit, données visibles. Density moyenne, pas de coins.
2. **Une action primaire par vue.** Si deux boutons sont en violet, l'un des deux n'est pas prioritaire.
3. **Rien n'est caché par défaut.** Filtres avancés visibles, colonnes configurables, état vide qui explique quoi faire ensuite.
4. **La couleur ne décore pas.** Elle signale un rang, un état, une appartenance sectorielle.
5. **Aucune animation obstructive.** 150–200 ms, `cubic-bezier(0.22, 0.61, 0.36, 1)`. Pas de bounce, pas de parallaxe.

### K.2 Spécifications

**Sidebar** — largeur 248 px, `Panel`. Logo + nom en haut. Groupes de nav séparés par un label Eyebrow (`0.10em`, Text Low). Item actif : fond `Brand Wash` + **rail 2 px violet à gauche** + texte `Brand 300` en 600. Item hover : `Card`. Icône 20 px. Collapsible à 72 px.

**Navbar** — hauteur 64 px, fond `Panel` avec `backdrop-filter: blur(12px)` et bordure `Line`. Logo à gauche. Nav au centre. Actions à droite. Ombre uniquement au scroll. Recherche globale ⌘K alignée à droite.

**Cartes KPI** — 3 à 4 par ligne. Fond `Card`, bordure `Line`, rayon 16. Label Eyebrow en haut. Valeur en Plex Mono 32 px. Delta en état (vert/rouge) + Sparkline 60×24. **Pas de dégradé, pas de glow au repos.** Le hover fait monter la carte de 2 px *et* allume la bordure — c'est tout.

**Tableaux** — densité par défaut 44 px de hauteur de ligne (option : 36 px « compact », 56 px « confortable`). En-tête `Sunken`, `Eyebrow`, sticky. Lignes séparées par `Line` 1 px, **jamais de zébrage** (le zébrage est un pis-aller qui signale une mauvaise hiérarchie). Hover = `Card`. Chiffres alignés à droite, `tabular-nums`, mono pour les montants. Cellule à tri : chevron 14 px, `Text Low`. Pagination : 25/50/100 lignes + sélecteur de colonnes engrenage.

**Boutons** — hauteur 40 px (L) / 32 px (S) / 48 px (XL). Rayon 9. Police Inter 600 / 14 px. Padding 16 px horizontal. 4 variantes :
- `Primary` : fond `Brand 500`, texte `#FFF`. Hover `Brand 400`.
- `Secondary` : fond `Raised`, texte `Text Hi`, bordure `Line`.
- `Ghost` : transparent, texte `Text Mid`. Hover `Raised`.
- `Danger` : fond `Erreur` à 13 %, bordure `Erreur` 40 %, texte `Erreur`. Hover → fond `Erreur`, texte `#FFF`.
- Icone : 20 px, gap 8 px. `:active` → `scale(0.98)`, 80 ms.

**Formulaires** — hauteur 40 px, rayon 9, fond `Card`, bordure `Line`. Focus : bordure `Brand 400` + **ring 3 px `Brand Wash`**. Erreur : bordure `Erreur` + message sous le champ en 12 px, jamais en `title` uniquement. Label toujours au-dessus, `13 px / 500`. Placeholder `Text Low`. Groupes de formulaire en 2 colonnes max. Les sections longues utilisent un **rail vertical** de 2 px à gauche avec les étapes.

**Badges / tags** — hauteur 22 px, rayon 999, `11.5 px / 600`, padding 8 px. 5 variantes : `Brand Wash` + `Brand 300`, `Signal Wash` + `Signal 400`, `Erreur` 13 % + `Erreur`, `Succès` 13 % + `Succès`, `Raised` + `Text Mid`. Liseré gauche 3 px pour le badge sectoriel (teinte module).

**Notifications / toasts** — largeur 380 px, fond `Card`, bordure gauche 3 px de la couleur d'état, rayon 12, ombre `Shadow 3`. Entrée : `translateX(16px) + opacity`, 200 ms. Sortie : 150 ms. Durée : 4 s (info), persistante (erreur, action requise).

**Graphiques** — grille de fond `Line` 1 px à 8 % d'opacité. Axe unique, jamais de grille verticale. Courbes de 2 px, sans aire, sans point sauf sur le survol. Barres : rayon 4 en haut uniquement. Le cyan `Data 500` est la couleur de série par défaut. **Légende obligatoire** (les daltonismes existent). Palette de 6 séries max, jamais plus.

**Modales** — largeur 480 / 640 / 880 px selon le contenu. Fond `Panel`, bordure `Line`, rayon 22, ombre `Shadow 4`. Titre `H4`, 24 px de padding. Pied aligné à droite : `Ghost` puis `Primary`. Fermeture par `Échap` + clic externe. Trap focus obligatoire.

**État vide** — jamais un écran vide. Icône 40 px, `Text Mid`, un titre, une phrase d'explication, **un bouton d'action**. L'état vide est un écran de vente.

**Page de détail** — 3 zones : en-tête (nom + statut + actions), rail latéral de contexte (fiche), contenu principal. Le rail latéral 320 px est **sticky** avec sections repliables. L'en-tête a une bordure basse `Line` et reste sticky au scroll.

**Page catalogue** — grille 3 colonnes (> 1180 px) / 2 (768–1180) / 1 (< 768). Carte CRM : bandeau de teinte module (3 px en haut) + icône 40 px sur `Brand Wash` + nom + secteur (`Eyebrow`) + 3 features en `Body S` + prix `Signal 400` + bouton `Secondary` « Voir le CRM ». Toute la carte est cliquable, pas seulement le bouton. **État « disponible bientôt »** : carte désaturée, bordure pointillée, badge `Bientôt` — assume clairement, ne simule pas un produit existant.

**Fiche client** — en-tête avec nom, entreprise, segment (`badge`), score (`Plex Mono`). 3 onglets : `Activité`, `Documents`, `Facturation`. Timeline verticale à gauche, rail 2 px `Line`, nœuds 8 px ; les nœuds d'action sont colorés par type (create/update/delete/restore). Panneau droit : métadonnées en `label / valeur` sur fond `Sunken`, toujours visible.

---

## L. STYLE DES DASHBOARDS

**C'est ici que l'identité doit gagner.** Le dashboard est le produit, pas la vitrine.

- **Grille** : 12 colonnes, gap 16 px, conteneur max 1440 px, padding latéral 24 px (32 px sur ≥ 1440).
- **Hiérarchie verticale d'une vue** : (1) Fil d'Ariane + titre, (2) Sélecteur de période + actions, (3) 3–4 KPI, (4) 2 graphiques, (5) Table ou liste d'activité. Jamais de saut de rang.
- **Période** : sélecteur segmenté à gauche de la barre d'actions. Jamais de menu déroulant pour 3 options.
- **KPI** : une seule métrique par carte. Pas de « 3 chiffres + mini graphique + pourcentage + sparkline ». Si on ne peut pas nommer la métrique en 3 mots, ce n'est pas un KPI.
- **Graphiques** : 2 par ligne maximum, ratio 16:9. Le premier est toujours le chiffre d'affaires / volume. Le deuxième est toujours la tendance ou la répartition.
- **Table** : toujours présente en bas de vue, c'est le passage à l'action.
- **Modale d'action** : jamais pour un formulaire de 3 champs. Inline, en ligne, avec sauvegarde immédiate.
- **Notifications in-app** : cloche en navbar avec pastille de comptage, panneau de 380 px, statut non lu en `Brand Wash`.
- **Thème** : sombre par défaut. Le clair est proposé par le sélecteur de période (« Thème » n'est pas dans la navbar, c'est une préférence, pas une identité).

---

## M. STYLE DES PRÉSENTATIONS

Format **16:9 — 1920 × 1080 px**.

- **Grille** : 12 colonnes, marge 96 px, gouttière 24 px. Zone de texte : 6 colonnes.
- **Marge de sécurité** : 64 px sur les 4 bords ( Canva imprime parfois).
- **Diapositive de couverture** : fond `Void`, trame de fond « La Trame », symbole du logo 96 px au centre-gauche, `Display XL` en `Text Hi`, baseline `Signal 400`, slogan en `Text Mid` 18 px. **Jamais** de photo, jamais d'illustration 3D.
- **Diapositive de section** : fond `Panel`, numéro de section en `Display XL` `Brand 500` 12 % d'opacité derrière le titre, titre `H1`, rien d'autre.
- **Diapositive de contenu** : fond `Void` ou blanc (jamais les deux dans la même séquence). Une idée = un titre = un bloc. Si vous avez besoin de deux blocs, faites deux diapositives.
- **Chiffres** : `Display XL` en **Plex Mono 600**. 3 chiffres maximum par diapositive. Le chiffre porte la diapositive, il est de 2 à 4× plus grand que le texte.
- **Graphiques** : sans légende si un seul série, sinon légende en bas. Axes en `Text Low` 1 px. Jamais de 3D, jamais de perspective, jamais d'animation.
- **Icônes** : jeu outline 1,75 px, 64 px, `Brand 400` sur `Brand Wash` dans un carré à rayon 16.
- **Cartes** : fond `Card`, bordure `Line`, rayon 16, une seule carte « mise en avant » par diapositive avec bordure gauche 3 px `Signal 400`.
- **Marges** : 96 px. **Espace blanc** : au moins 40 % de la surface d'une diapositive doit rester vide. Une diapositive pleine = une diapositive ratée.
- **Transitions** : dans Canva, une seule famille de transitions. `Fondu` 0,3 s, ou `Aucune`. **Jamais** de glissement, de zoom, de cube.
- **Interdits** : emojis, clipart, silhouettes de personnes, photos d'accolades, icônes 3D, dégradés violets-vifs, photos de skyscrapers.

---

## N. STYLE DES IMAGES / PHOTOS

### N.1 Photo — usage restreint

La photographie n'a pas sa place dans l'identité. Si une photo est nécessaire :

| Autorisé | Interdit |
|---|---|
| Détail d'atelier / établi réel (mains, outil, plan de travail) | Silhouette de personne avec bras écartés |
| Interface réelle en situation (capture entière, pas zoom flou) | Photo de banque d'images « business meeting » |
| Vuemacro de quelque chose de réel et|texturé | Skyline, gratte-ciel, drone, hélicoptère |
| Capture d'écran en fond très désaturé (8 % opacité) | Stéréotype deiales de genre (visages génériques « pro ») |
| Photo d'équipe si et seulement si c'est la vraie équipe, seule | Faux bureau, faux open space, fausse équipe |

**Traitement obligatoire des photos :** désaturation 40 %, contraste +10 %, et un voile `Void` à 20 % par-dessus. Une photo doit toujours tirer vers le violet, jamais vers le bleu.

### N.2 Illustration / rendu

- **Aucun rendu 3D isométrique.** C'est le cliché exact de « startup SaaS » et il date en 12 mois.
- **Illustrations** : flat, 2 couleurs max (Void + Brand 500), formes de §H uniquement, trame « La Trame » en fond.
- **Capture d'écran** : montrez le produit réel, en thème sombre, dans un cadre 1 px `Line` avec un rayon 16 et un fond `Card`. Jamais de maquette fantaisiste.
- **Icônes dans les images** : set §J, jamais de mélange avec un autre set.

---

## O. DESIGN SYSTEM

### O.1 Architecture des tokens

Trois niveaux. Le code ne doit jamais écrire un HEX.

```
Primitifs        --ink-*, --brand-*, --signal-*, --data-*, --state-*
   ↓
Sémantiques      --surface-canvas, --text-hi, --border-default, --action-primary
   ↓
Composants       --btn-primary-bg, --card-border, --input-focus-ring
```

Fichier prêt à l'emploi : **`Frontend/src/styles/tokens.css`**.

### O.2 Espacements

Base **4 px**. Échelle : `4 · 8 · 12 · 16 · 20 · 24 · 32 · 40 · 48 · 64 · 80 · 96 · 128`.
Seules ces valeurs sont autorisées. `padding: 18px` est interdit.

- Gouttière de grille : **16 px**
- Padding de carte : **20 px** (compact 16, confort 24)
- Padding de section marketing : **96 px** desktop / 64 px tablette / 48 px mobile
- Padding de cellule de tableau : **12 px 16 px**

### O.3 Rayons

`3 · 4 · 9 · 16 · 22 · 999` — voir §I.1. Aucun autre.

### O.4 Ombres

Le thème sombre utilise **très peu** d'ombre : sur fond sombre, c'est la **bordure** qui sépare, pas l'ombre. L'ombre ne sert que pour les éléments flottants.

| Token | Valeur | Usage |
|---|---|---|
| `Shadow 1` | `0 1px 2px rgba(8,7,13,0.4)` | Carte au repos (sombre) |
| `Shadow 2` | `0 4px 12px rgba(8,7,13,0.45)` | Hover, popover |
| `Shadow 3` | `0 12px 32px rgba(8,7,13,0.55)` | Modale, toast, dropdown |
| `Shadow 4` | `0 24px 64px rgba(8,7,13,0.65)` | Modale large, drawer |
| `Shadow L1` (clair) | `0 1px 2px rgba(23,19,42,0.06)` | Carte |
| `Shadow L2` (clair) | `0 4px 12px rgba(23,19,42,0.08)` | Hover, popover |
| `Shadow L3` (clair) | `0 12px 32px rgba(23,19,42,0.12)` | Modale |

**Interdit :** toute ombre colorée, tout `glow`, tout `0 0 30px rgba(...)`. C'est le premier élément à supprimer de `design.md:120`.

### O.5 Transitions

| Token | Valeur | Usage |
|---|---|---|
| `Transition fast` | `120ms cubic-bezier(0.22, 0.61, 0.36, 1)` | Hover, focus, couleur |
| `Transition base` | `180ms cubic-bezier(0.22, 0.61, 0.36, 1)` | Apparition, dropdown |
| `Transition slow` | `280ms cubic-bezier(0.22, 0.61, 0.36, 1)` | Modale, page |
| Easing | `cubic-bezier(0.22, 0.61, 0.36, 1)` | Unique dans toute la marque |

Apparition au scroll : `opacity 0 → 1` + `translateY(16px) → 0`, 400 ms, cascade 60 ms. **Pas de 40 px, pas de 0,7 s.**

### O.6 Focus

```css
:focus-visible { outline: 2px solid var(--brand-400); outline-offset: 2px; }
```
Sur fond clair : `outline: 2px solid var(--brand-600)`.
Toujours visible. Jamais `outline: none` sans remplacement.

### O.7 Règle de nommage CSS

```
.crm-<composant>__<élément>--<état>
.btn--primary / .btn--ghost / .card--module / .badge--warning
```

Préférer **les variables CSS** à Tailwind, à moins d'introduire Tailwind. Le projet est en CSS modules / CSS plat, sans Tailwind : **ne pas introduire Tailwind maintenant**, ce serait une migration inutile.

### O.8 Z-index

| Layer | z |
|---|---|
| Base | 0 |
| Sticky header / sidebar | 100 |
| Dropdown / popover | 400 |
| Drawer | 600 |
| Modale + overlay | 800 |
| Toast | 1000 |

### O.9 Contrôle qualité avant livraison

- [ ] Zéro HEX écrit hors `tokens.css` (`grep -rE "#[0-9a-f]{3,6}" src/` ne doit matcher que `tokens.css`)
- [ ] Zéro `border-radius` hors de l'échelle §I.1
- [ ] Zéro `padding` / `gap` hors de l'échelle §O.2
- [ ] Zéro ombre colorée / glow
- [ ] Contraste AA minimum vérifié sur les 4 états et sur les 2 thèmes
- [ ] Focus visible sur 100 % des éléments interactifs
- [ ] Un seul accent violet par vue
- [ ] Icônes lisibles à 16 px
- [ ] `tabular-nums` sur toute donnée numérique alignée

---

## P. EXEMPLES D'APPLICATION

### P.1 Boutique de composants « CRM Commerce »

Chaque CRM sectoriel livré au client est accompagné de sa boutique de composants, héritée du socle. C'est **la démonstration physique du concept**.

- Le socle fournit : 48 composants (boutons, champs, tables, cartes, badges, modales, toasts, KPI, timeline, états vides).
- Chaque CRM sectoriel fournit : 6 à 10 composants spécifiques + sa teinte module.
- Le client peut construire son CRM métier **sans jamais réinventer l'identité**.

Argument commercial, directly issu de la promesse : « Vous ne partez pas d'une page blanche. Vous partez d'un socle. »

### P.2 La carte CRM du catalogue

```
┌─────────────────────────────────┐  ← liseré haut 3px : teinte module
│  ▣          CRM Hôtellerie      │
│  ▣          HÔTELLERIE          │  ← eyebrow, Text Low
│                                │
│  Réservations, clients,          │
│  housekeeping, taux d'occupation │
│                                │
│  Socle commun · 6 modules       │
│                                │
│  1 490 €        [ Voir le CRM ] │  ← Signal 400 / Secondary
└─────────────────────────────────┘
```

Fond `Card`, bordure `Line`, rayon 16, padding 20. Le liseré haut est le seul élément coloré. Le prix est la seule chose en ambre.

### P.3 Le rapport d'audit généré

Chaque ligne du journal d'audit porte les codes de `Features.md` §10 :

```
13/09/2026 14:32   RESTORE     Contrat #C-0142     User #125     SUCCESS
```

- Date : Inter 12 px `Text Low`
- Action : **Plex Mono 500**, `Erreur` si `DELETE`/`SUPPRESSION`, `Succès` si `SUCCESS`
- Objet : Plex Mono, `Text Hi`
- Résultat : pastille + libellé

C'est un document de preuve. Il doit avoir l'air d'un document de preuve.

### P.4 Le contrat

Format A4, **thème clair**, marges 25 mm.

- En-tête : logo lockup noir, à gauche. Référence contrat en Plex Mono à droite.
- Bandeau de titre : `Void`, texte blanc, 20 mm de haut, nom du client + type de contrat.
- Corps : Inter 10.5 pt, `line-height 1.6`, une seule colonne.
- **Numérotation des clauses en niveaux (1. / 1.1 / 1.1.1)** alignée à gauche, pas de retrait fancy.
- Montants : **Plex Mono**, alignés à droite, `tabular-nums`.
- Tableaux : `Sunken`, lignes `Border`, en-tête `Eyebrow` uppercase.
- Signatures : 2 colonnes, filets `Border Strong`, noms en `Caption`.
- Pied de page : `Caption` `Text Low`, 3infos : référence, version (`V3` en mono), date de génération.
- **Aucun** accent violet dans le corps du contrat. Le violet est réservé au logo et aux bordures de séparation. Un contrat se lit, ne se décore pas.

### P.5 Page LinkedIn / X

- Visuel : fond `Void`, trame « La Trame » 8 %, symbole `Branch` centré, une seule ligne de texte.
- Format : 1200 × 675 (LinkedIn) / 1600 × 900 (X).
- Texte : 1 idée, `H1` Inter 700, 3 lignes maximum.
- Jamais de carousel 10 pages pour annoncer une fonctionnalité.

### P.6 Portfolio développeur

L'identité CRM Commerce peut coexister avec un portfolio personnel sans que l'un parasite l'autre : le portfolio utilise **les mêmes tokens mais avec `--brand-500` = couleur personnelle**, et conserve 100 % de la structure (rayons, espacements, typographie, composants). C'est la démonstration que le système est réel.

---

## Q. RÈGLES À ÉVITER

### Q.1 Identité

| ❌ À éviter | Pourquoi |
|---|---|
| Deux couleurs d'accent concurrentes (violet + cyan) | Le logo et le produit ne sont plus reliés. **C'est l'erreur n°1 actuelle.** |
| Le cyan comme accent d'interface | C'est l'accent Tailwind par défaut depuis 2020. Zéro différenciation. |
| Dégradé violet → rose | Cliché SaaS, date en 12 mois. |
| Glow / halo au repos sur les cartes | Signale « template », pas « produit ». |
| Verre dépoli / `backdrop-filter` généralisé | Coûteux, illisible, et masque la structure — le contraire de TRANSPARENT. |
| Illustration 3D isométrique | Cliché absolu, aging rapide. |
| Emoji comme icône | Incompatible avec le registre. |
| Dégradé sur le texte des titres | Lisibilité dégradée, sensation « template ». |
| Verbe + adjectif marketing sur la home (« La solution ultime ») | Le registre BÂTI ne le permet pas. |

### Q.2 Produit

| ❌ À éviter | Pourquoi |
|---|---|
| Zéro-bordure avec fond de carte | Sur fond sombre, rien ne sépare. La bordure est la séparation. |
| Zébrure de tableau | Masque une mauvaise hiérarchie. |
| Zéro-bordure sur tableau dense (`table-layout` serré) | Illisible après 30 lignes. |
| 6 couleurs d'état | Il y en a 4. Le reste, ce sont des nuances de fond. |
| Icône seule pour signifier un état | inaccessible et ambiguë. |
| Modale pour un formulaire de 3 champs | Coût cognitif inutile. |
| Bouton violet + bouton ambre côte à côte | Deux primaires, aucune hiérarchie. |
| Tooltip comme seul porteur d'information | Invisible au mobile, invisible au clavier. |
| Animation > 300 ms sur une action de travail | Ralentit la productivité. |
| Zéro état vide | Page vide = page ratée. |
| Carte catalogue qui ressemble à un produit livré alors qu'il n'existe pas | C'est le point d'honnêteté le plus visible du projet. Assume `Bientôt`. |

### Q.3 Cohérence projet solo

| ❌ À éviter | Pourquoi |
|---|---|
| Chiffre d'affaires, nombre de clients, « +150 entreprises » | Immédiatement vérifiable et invérifiable. Le ruin immédiatement la confiance. |
| Photo d'équipe de 8 personnes | Le projet est porté par une personne. L'identité doit le dire. |
| « Plateforme leader », « écosystème », « solusi on Answers » | Vocabulaire de multinationale. Le projet est un atelier. |
| Logotype en 3D, en métal, en dégradé argenté | Registre 2008. |
| Logos de clients sur la home (logos wall) | Aucun client public n'existe. |
| Roadmap avec 24 mois de dates | Une roadmap de 2 trimestres max, en « en cours / ensuite / plus tard ». |
| Certifications et badges d'entreprise | Inutiles, non vérifiables. |

---

# BRAND BOOK — SYNTHÈSE

## 1. ADN

**Fondé · Sectoriel · Bâti · Transparent · Sobre · Composable**

Le projet n'est pas une entreprise qui édite un logiciel : c'est un atelier qui construit un outil pour un métier. Sa credibility vient de la **matière unique** — un socle dont on dérive des modules — pas de la quantité.

## 2. Positionnement visuel

**L'établi.** Atelier d'ingénierie + interface d'outil developer + éditeur de systèmes d'exploitation.
Ni plateforme, ni écosystème. On voit les coutures.

## 3. Personnalité

L'ingénieur-artsisan. Sérieux avant tout. Montre le travail. Phrases courtes, chiffres avant adjectifs.

## 4. Valeurs

Densité maîtrisée · couleur = hiérarchie · détail qui prouve · structure visible · calme.

## 5. Palette

| | HEX |
|---|---|
| **Principale** | `#6C4BF4` violet-indigo |
| Principale action | `#5B3DE8` |
| **Secondaire / signal** | `#F2A93B` ambre (prix, valeur, KPI) |
| **Données** | `#38BDF8` cyan (**graphiques uniquement**) |
| Fond (dark) | `#08070D` · `#0D0B16` · `#12101F` · `#191627` |
| Texte (dark) | `#F4F2FA` / `#B6B1CC` / `#8A85A3` |
| Surface (light) | `#F6F7FA` / `#FFFFFF` / `#EEF0F5` |
| Texte (light) | `#17132A` / `#565173` / `#7C7690` |
| États | `#2FBF71` · `#F2555A` · `#E8A33D` · `#4C8DF6` |

**Les neutres sont teintés de violet (hue 258°) — c'est ce qui relie le logo au produit.**

Ratio : 82 % neutres / 13 % texte / 4,5 % violet / 0,5 % ambre+cyan.

## 6. Typographie

| Rôle | Police |
|---|---|
| Marque & titres | **IBM Plex Sans** 500/600/700 |
| UI, tableaux, corps | **Inter** 400/500/600/700 |
| Chiffres, IDs, contrats, audit | **IBM Plex Mono** 400/500/600 |

H1 48/1.10/−0.025em · H2 33/1.18 · H3 19/1.30 · Body 15/1.60 · Eyebrow 11.5/600/0.10em · KPI 32 mono `tabular-nums`.

## 7. Logo

**« LE SOCLE »** — base pleine + 3 montants verticaux interchangeables + 1 module détaché.
24×24, trait 1,75 px, coins 2 px. Seul concept qui survit au favicon 16 px.

## 8. Formes

Le Module · le Rail (2 px) · le Nœud (8 px) · la Bifurcation · la Trame (fond signature).

**Rayon = échelle, pas constante :** `3 → 4 → 9 → 16 → 22 → 999`.

## 9. Iconographie

Outline · grille 24 · trait 1,75 px · round cap/join · angle 2 px · détail bas. Lisible à 16 px.

## 10. UI

Sidebar 248 px + rail violet d'actif · Navbar 64 px · cartes KPI en mono · tableaux à bordure 1 px sans zébrage · un seul accent par vue · bordure = séparation (pas d'ombre au repos) · états vides = écrans de vente.

## 11. Design system

Tokens en 3 couches (primitif → sémantique → composant) · espacement base 4 · 3 niveaux d'ombre en sombre · 1 seule courbe d'easing · `crm-` comme préfixe · **zéro HEX hors `tokens.css`**.

## 12. Canva / présentation

1920×1080 · marges 96 px · couverture `Void` + trame + logo + Display XL · une idée par page · chiffres en mono 600 ×3 plus grands que le texte · ≥ 40 % de vide · transitions `fondu` uniquement.

## 13. Moodboard

Établi d'ingénieur · interfaces developer · schémas d'architecture · bois sombre et métal brossé · écrans en thème sombre réel · cyan réservé aux graphes · papier et encre pour les documents · photographie d'atelier, pas de banque d'images.

## 14. Do / Don't

**Do** — montrer le produit réel · afficher versions, IDs, horodatages · assumer les produits « Bientôt » · 1 module = 1 teinte.
**Don't** — 2 accents concurrents · glow au repos · chiffres d'affaires imaginaires · photos de banque d'images · dégradés violet-rose · zébrage · animations > 300 ms.

## 15. Exemple de page d'accueil

```
Fond Void + trame 6 % + radial Brand 10 % en haut
  eyebrow : PLATEFORME DE CRM MÉTIER          (Inter 11.5 / 600 / 0.10em / Brand 400)
  H1      : Le CRM qui part de votre métier.  (Plex Sans 700 / 48 / -0.025em / Text Hi)
  Lead    : Des CRM sectoriels construits sur un socle commun,     (Inter 18 / Text Mid)
            personnalisables, et livrés avec le code source.
  [Primary : Explorer les CRM]  [Ghost : Voir le socle]
  ─── Graphe « 1 socle → 3 CRM → 3 métiers » en cyan Data 500 ───
  [ Module Card ] [ Module Card ] [ Module Card ]      ← liseré teinte module
  [ Module Card ] [ Module Card ] [ Module Card ]
```

## 16. Exemple de dashboard

```
┌ Sidebar 248 (Panel) ──┬────────────────────────────────────────┐
│ ▪ CRM Commerce        │ Fil › Dashboard        [7j][30j][90j]   │
│                        │ Chiffre d'affaires                    │
│ PILOTAGE              │ 248 300 €   ↑ 12,4 %   ▁▂▃▅▄▆        │ ← mono 32
│ ▪ Dashboard  ACTIF    │                                        │
│   Clients             │ Clients actifs  Commandes  Panier moy. │ ← 3 cartes
│   Contrats            │ 1 284         318        342 €          │
│                        │                                        │
│ DOCUMENTS             │ ┌──────────────┐ ┌──────────────┐      │
│   Modèles             │ │ Courbe 16:9  │ │ Répartition  │      │ ← cyan #38BDF8
│   Génération          │ └──────────────┘ └──────────────┘      │
│                        │ ┌────────────────────────────────────┐ │
│ SYSTÈME               │ │ Table 44px, bordure 1px, sans      │ │
│   Audit               │ │ zébrage, montants mono alignés D  │ │
│   Paramètres          │ └────────────────────────────────────┘ │
└────────────────────────┴────────────────────────────────────────┘
```

## 17. Exemple de carte CRM

```
┌═══════════════════════════════════════════┐  ← liseré 3px teinte module
│                                           │
│   ▣  CRM Restaurant                ⋮     │  icône 40 sur Brand Wash
│      RESTAURATION                       │  eyebrow
│                                           │
│   Tables, réservations, carte,           │  Body S / Text Mid
│   chiffre d'affaires                     │
│                                           │
│   Socle commun · 7 modules               │  Caption / Text Low
│                                           │
│   890 €                          [ Voir ] │  Signal 400 / Secondary
│                                           │
└────────────────────────────────════════───┘
Card #191627 · bordure Line · rayon 16 · padding 20
```

## 18. Exemple de bouton

```
┌──────────────────────┐
│  Générer le contrat │   height 40 · radius 9 · padding 0 16
└──────────────────────┘   bg #6C4BF4 · texte #FFF
   hover → #8E72F8        Inter 600 / 14 / -0.01em
   active → scale 0.98    icône 20, gap 8
   focus → ring 3px rgba(108,75,244,.12) + outline 2px #8E72F8
   transition 120ms cubic-bezier(0.22,0.61,0.36,1)
```

Variantes : `Secondary` (bg `Raised` #232036, bordure `Line`) · `Ghost` (transparent) · `Danger` (bg `Erreur` 13 %, bordure `Erreur` 40 %).

## 19. Exemple de fiche client

```
┌──────────────────────────────────────────────────────────────────┐
│ Marie Dubois                    [CLIENT FIDÈLE]  [Modifier]       │
│ Société Martin & Fils · Segment B2B · Score 72        ← mono     │
├──────────────────────────────────────────────────────────────────┤
│ Activité │ Documents (12) │ Facturation                        │
├─────────────────────────────────┬────────────────────────────────┤
│ 13/09 14:32  ● RESTORE  C-0142   │ SEGMENT        B2B             │
│ 14/09 09:11  ● UPDATE   C-0142   │ SECTEUR        Distribution   │
│ 15/09 16:04  ● CREATE   C-0158   │ RESPONSABLE    User #125       │
│ ...                             │ CRÉÉ LE        04/02/2026      │
│                                 │ CONTRAT ACTIF  3 mois restants │
│ rail 2px + nœuds 8px            │ ▸ Panneau Sunken, label/valeur │
└─────────────────────────────────┴────────────────────────────────┘
```

---

## Plan d'application recommandé

| Ordre | Action | Pourquoi |
|---|---|---|
| **1** | Déployer `tokens.css` et remplacer les 57 HEX en dur | Sans ça, rien ne se propage. Bloquant. |
| **2** | Supprimer le cyan comme accent d'interface | C'est la moitié du problème de marque. |
| **3** | Aligner le logo sur `Brand 500` (`#6C4BF4`) et le favicon | Cohérence logo ↔ produit. |
| **4** | Supprimer les glows / `backdrop-filter` des cartes (`design.md:120,142`) | Retire le « look template ». |
| **5** | Passer les titres en IBM Plex Sans | Voix de marque. |
| **6** | Adopter l'échelle de rayons §I.1 | Coherence multi-CRM. |
| **7** | Introduire `--module-hue` + liseré sectoriel | Le catalogue devient lisible d'un coup d'œil. |
| **8** | Écrire les tokens dans les documents/contrats (thème clair) | Les contrats sont le produit le plus crédible. |

---

*Fin du Brand Book v1.0 — CRM Commerce*
