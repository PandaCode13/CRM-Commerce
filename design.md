# Design System — Landing Page CRM Commerce

Specification de conception pour creer une **landing page** homogene avec l'existant.
Base sur l'analyse du frontend public (`Frontend/src/Pages/public`, `Frontend/src/Components`) et des documents racine (`README.md`, `Features.md`, `Technologie.md`).

---

## 1. Identite de marque

| Element | Valeur |
|---|---|
| Nom | **CRM Commerce** (variante : *Commerce CRM*) |
| Positionnement | Marketplace de CRM metier par secteur (architecture interieure, medical, hotel, immobilier, RH, restaurant…) |
| Marche | B2B, francophone (`fr_FR`) |
| Promesse | Decouvrir, comparer, acheter des CRM prets a l'emploi, personnalisables, avec code source + documentation |
| Tone | Moderne, tech, confiant, professionnel, "SaaS premium sombre" |
| Langue | Francais uniquement |
| Emails | contact@crm-commerce.com |

**Note logo :** le favicon utilise un violet `#863bff`, mais **toute l'interface utilise un accent bleu ciel (cyan)**. La landing page doit suivre l'accent bleu ciel du site. Le violet n'apparait que dans le logo/favicon — le conserver sur le logo mais ne pas l'utiliser comme couleur d'accent UI.

---

## 2. Palette de couleurs

Le site est **sombre par defaut** avec un theme clair optionnel (toggle `data-app-theme="light"`). La landing page doit etre construite en theme sombre par defaut et s'ajuster via le toggle.

### 2.1 Theme sombre (DEFAUT)

| Variable | Hex | Usage |
|---|---|---|
| `--bg-void` | `#05070d` | Fond global, plus fonce |
| `--bg-deep` | `#0a0f1c` | Fond des sections |
| `--bg-panel` | `#10182b` | Panneaux, FAQ, auth-card |
| `--bg-card` | `#131d33` | Cartes, fond de survol |
| `--accent` | `#7dd3fc` | Accent principal (boutons outline, liens, bordures) |
| `--accent-soft` | `#38bdf8` | Accent secondaire (diamants, prix, details) |
| `--accent-hover` | `#0ea5e9` | Survol des accents |
| `--accent-glow` | `rgba(125, 211, 252, 0.25)` | Halo / ombre des accents |
| `--text-primary` | `#f8fafc` | Titres et texte principal |
| `--text-secondary` | `#cbd5e1` | Textes intermediaires |
| `--text-muted` | `rgba(248, 250, 252, 0.65)` | Sous-titres, descriptions |
| `--border` | `rgba(255, 255, 255, 0.08)` | Bordures fines |
| `--shadow` | `0 20px 45px rgba(0, 0, 0, 0.35)` | Ombre standard des cartes |

Fonds de cartes : `linear-gradient(160deg, rgba(19, 29, 51, 0.9), rgba(10, 15, 28, 0.95))`.
Fond de page : `radial-gradient(circle at top, rgba(56, 189, 248, 0.12), transparent 35%), linear-gradient(to bottom, var(--bg-deep), var(--bg-void))`.

### 2.2 Theme clair (optionnel — `:root[data-app-theme="light"]`)

| Variable | Hex |
|---|---|
| `--bg-void` | `#eef3f8` |
| `--bg-deep` | `#f7f9fc` |
| `--bg-panel` | `#e6eef6` |
| `--bg-card` | `#fbfcfe` |
| `--accent` | `#2374a7` |
| `--accent-soft` | `#3185b9` |
| `--accent-hover` | `#176b9e` |
| `--accent-glow` | `rgba(35, 116, 167, 0.16)` |
| `--text-primary` | `#19324a` |
| `--text-secondary` | `#496176` |
| `--text-muted` | `#627b91` |
| `--border` | `#d4e0eb` |
| `--shadow` | `0 16px 36px rgba(28, 55, 79, 0.08)` |

### 2.3 Couleurs ponctuelles

| Usage | Valeur |
|---|---|
| Etoiles remplies (temoignages) | `#FFD43B` |
| Etoiles vides | `#CFCFCF` |
| Texte sur bouton accent (sombre) | `#071018` |
| Alerte erreur (auth) | bg `rgba(251, 113, 133, 0.13)`, bord `#fb7185`, texte `#fecdd3` |
| Navbar (sombre) | `#0d1b2a` (scrolled : `#0a1521`) |
| Footer | `#080d18`, bordure `rgba(125, 211, 252, 0.16)` |

---

## 3. Typographie

### 3.1 Police
- **Inter** uniquement (Google Fonts), graisses : `400; 600; 700; 800`.
- Chargement : `<link>` preconnect + preload dans `<head>` (`css2?family=Inter:wght@400;600;700;800&display=swap`).
- `font-family: "Inter", sans-serif;`

### 3.2 Echelle (sombre de reference)

| Element | Taille | Graisse | Detail |
|---|---|---|---|
| Titre hero | `clamp(2.7rem, 6vw, 4.8rem)` | 800 | `line-height 1.15`, max-width 900px |
| Sous-titre hero | `1.2rem` | — | `--text-muted`, `line-height 1.8`, max-width 700px |
| Titre de section | `clamp(2rem, 4vw, 3rem)` | 700 | centre, `line-height 1.15` |
| Titre carte | `1.35rem` | 700 | gradient `linear-gradient(135deg, var(--text-primary), var(--accent-soft))` (background-clip text) |
| Description carte | `0.95rem` | — | `--text-muted`, `line-height 1.75` |
| Titre temoignage | `1.15rem` | 700 | |
| Body / paragraphe | `0.9–1.05rem` | 400 | `line-height 1.7` |
| Lien nav | `0.9rem` | 500 | |
| Bouton | `0.875–1rem` | 600 | |
| Eyebrow (auth) | `0.75rem` | 700 | majuscules, `letter-spacing 0.08em` |

### 3.3 Regles
- Titres jamais en gras > 800. Pas d'autres polices.
- En theme clair, le gradient de titre devient acceptable mais garder le contraste (`#19324a` → `#2374a7`).
- Paragraphes courts, francais correct (pas d'emojis, pas d'accents manquants).

---

## 4. Espacements, rayons et grille

### 4.1 Espacements
- Sections : `padding: 7rem 8%` (desktop) ; `5rem 2rem` (tablette) ; `2.5–4.5rem 1.5rem` (mobile).
- Gap entre cartes : `1.75rem`.
- Hero : `padding: 4rem 2rem; gap: 2rem; min-height: 80vh` (70vh tablette, 65vh mobile).

### 4.2 Rayons et ombres
- `--radius: 20px` pour les cartes / panneaux.
- Boutons : `border-radius: 14px`.
- Inputs : `9px`. Petits elements : `8–10px`.
- Ombre carte : `var(--shadow)` ; survol : `0 30px 70px rgba(0,0,0,0.5), 0 0 30px rgba(56,189,248,0.12), inset 0 1px 0 rgba(255,255,255,0.05)`.

### 4.3 Grilles
- Cartes engagement / CRM / temoignages : `grid-template-columns: repeat(auto-fit, minmax(280px, 1fr))`.
- Pricing : `repeat(3, minmax(0, 1fr))` (2 col < 850px, 1 col < 520px).
- Avantages : `repeat(4, minmax(0, 1fr))` (2 col < 850px, 1 col < 520px).
- Max-width contenu : `1180–1320px`, centre.

---

## 5. Elements d'interface recurrents

### 5.1 Boutons
- **Outline / primaire** : `padding: 15px 30px; border-radius: 14px; border: 2px solid var(--accent); color: var(--accent); background: transparent; backdrop-filter: blur(8px); font-weight: 600;`
- **Survol outline** : `background: var(--accent); color: #071018; transform: translateY(-4px); box-shadow: 0 15px 35px var(--accent-glow);`
- **Secondaire (plein)** : `background: var(--accent); color: #071018; border: 2px solid var(--accent);`
- **Survol secondaire** : `background: var(--accent-hover); border-color: var(--accent-hover); color: #fff;`
- Petite variante carte : `padding: 12px 24px`.

### 5.2 Cartes
- Fond : `linear-gradient(160deg, rgba(19, 29, 51, 0.9), rgba(10, 15, 28, 0.95))`.
- `border: 1px solid var(--border); border-radius: var(--radius); padding: 2.5rem 2rem 2rem; text-align: center; box-shadow: var(--shadow); overflow: hidden; isolation: isolate;`
- **Survol** : `transform: translateY(-8px) scale(1.01); border-color: rgba(56, 189, 248, 0.35);` + glow. Image : `transform: scale(1.1) translateY(-4px)`.
- Option "spotlight souris" (deja en place sur `.card`) : halo radial 600px suivant `--mx/--my`.

### 5.3 Separateurs de section
- 3 elements : 2 lignes en `linear-gradient(90deg, transparent, rgba(56,189,248,0.55), transparent)` + **losange** 9x9px, `background: var(--accent-soft); transform: rotate(45deg); border-radius: 2px; box-shadow: 0 0 14px rgba(56,189,248,0.7)`.
- Container : `max-width: 600px; margin: 0 auto; padding: 1.5rem 8%;`

### 5.4 Badges (offres)
- Pilule : `border-radius: 999px; color: #071018; background: var(--feature-accent); font-size: 0.7rem; font-weight: 800; text-transform: uppercase; letter-spacing: 0.04em;` — position top-right.

### 5.5 Etoiles de notation
- Font Awesome : `fa-solid fa-star` (plein) / `fa-regular fa-star` (vide).
- Remplies `#FFD43B`, vides `#CFCFCF`, `margin-right: 4px`.

### 5.6 Liste a coches (pricing)
- `content: "✓"; color: var(--accent); font-weight: 800;` — bordure haute `rgba(125,211,252,0.14)`.

---

## 6. Navigation (header)

La landing page utilise la Navbar existante (`Components/Navbar.jsx`).

- Fixe en haut, `height` reservee : `body { padding-top: 80px; }`.
- Barre : `padding: 18px 32px; background: #0d1b2a;` (scrolled : `padding: 10px 32px; background: #0a1521;`).
- Logo image 44px + nom **Commerce CRM** `1.15rem / 800 / #fff`, hover `#90caf9`.
- Liens : `rgba(255,255,255,0.75)` ; soulignement 2px `#90caf9` au survol (animation width).
- Boutons : `nav-btn--outline` (S'inscrire), `nav-btn--primary` (Connexion = `bg #90caf9, texte #0d1b2a`), `nav-btn--theme` (toggle clair/sombre).
- Menu hamburger `☰` < 768px (menu deroulant vertical).

---

## 7. Footer

- Fond `#080d18`, bordure haute `rgba(125, 211, 252, 0.16)`, `padding: 4rem 8% 1.25rem`.
- Grille : `1.6fr 1fr 1.2fr` (1 col < 700px).
- Titres de colonnes : `0.9rem`, majuscules, `letter-spacing 0.08em`, `#f8fafc`.
- Liens `#cbd5e1`, hover `#7dd3fc`. CTA "Se connecter" : bordure `rgba(125,211,252,0.45)`, texte `#7dd3fc`.
- Ligne basse : copyright + slogan, `rgba(203,213,225,0.7)`, `0.82rem`.

---

## 8. Animations et micro-interactions

- **Apparition au scroll** : `.animate-on-scroll` = `opacity 0; transform: translateY(40px);` → `.visible` = `opacity 1; translateY(0);` — `0.7s cubic-bezier(0.23, 1, 0.32, 1)`, via IntersectionObserver (`threshold: 0.15`), delais en cascade `0.1s` a `0.5s` (nth-child 2..6).
- **Entree de page** : `pageFadeIn 0.8s ease` (opacity + translateY 12px).
- **Survol cartes** : translateY(-8px) scale(1.01), glow, image scale.
- **Boutons** : translateY(-4px) + glow ; `:active` scale(0.95).
- Transition globale : `--transition: 0.35s ease`.
- `html { scroll-behavior: smooth; }` (ancres type `#crm-exploration-section`).

---

## 9. Structure recommandee de la landing page

Sections dans l'ordre (dans le style des pages existantes) :

1. **Hero** — titre 800 + sous-titre + 2 CTA (`Découvrir les CRM` / `S'inscrire`).
2. **Separateur** (ligne + losange).
3. **Nos engagements** — 4 cartes (image 96px, titre gradient, description).
4. **Separateur**.
5. **Découvrez nos CRM** — grille de cartes CRM (image 120px, `id="crm-exploration-section"`, bouton "Visiter").
6. **Separateur**.
7. **Temoignages** — cartes avec etoiles + avatar rond 80px.
8. **Separateur**.
9. **CTA final** — "Commencez dès maintenant" + 2 boutons (register/login).
10. **Footer**.

La page Features existante apporte les blocs supplementaires reutilisables : **comment ca marche (frise numerotee)**, **avantages**, **offres tarifaires**, **FAQ (accordion)**.

---

## 10. SEO, meta et accessibilite

- Langue `lang="fr"` ; `theme-color: #05070d`.
- Balises : title unique, description, OG/Twitter, canonical `https://crm-commerce.com/`.
- JSON-LD : `Organization`, `WebSite` (deja en place) + `ItemList` de produits/reviews (voir `Home.jsx`).
- Alts d'images descriptifs, `aria-label` sur boutons, `role="alert"` pour erreurs.
- Contrastes : texte principal `#f8fafc` sur fond `#05070d` ; accent `#7dd3fc` sur fonds sombres.
- Focus visible : `outline: 2px solid var(--accent)` sur les elements interactifs.

---

## 11. Breakpoints responsive

| Breakpoint | Changements |
|---|---|
| `992px` | hero `70vh`, titre `3rem`, sections `5rem 2rem` |
| `768px` | hero `3rem/2.3rem`, grille cartes `1fr`, boutons pleine largeur |
| `850px` | pricing 2 col, avantages 2 col, frise en verticale |
| `520px` | tout 1 col, paddings `1.5rem`, titres `2rem` |
| `480px` | hero `65vh`, titre `2rem` |

---

## 12. Checklist de conformite (a valider avant livraison)

- [ ] Couleurs : uniquement la palette section 2 (pas de bleu/violet hors accent).
- [ ] Police Inter (400/600/700/800) chargee dans le head.
- [ ] Sections a `7rem 8%`, grilles conforme, `--radius: 20px`.
- [ ] Boutons selon section 5.1 (outline/secondaire, `#071018` sur accent).
- [ ] Separateurs ligne + losange entre chaque grande section.
- [ ] Animations scroll reveal + page-enter coherentes.
- [ ] Theme clair gere via `:root[data-app-theme="light"]`.
- [ ] Navbar + Footer existants reutilises (ou reproduits a l'identique).
- [ ] Responsive teste aux breakpoints section 11.
- [ ] Meta/SEO/JSON-LD et alts d'images presents.
- [ ] Contenu francais, sans emojis.
