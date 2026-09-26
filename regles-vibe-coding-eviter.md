🎨 Design / UI
 Utilisation excessive de dégradés violet/bleu
 Dégradés appliqués directement sur les gros titres
 Glow lumineux autour des éléments
 Orbes lumineuses floues en arrière-plan
 Glassmorphism utilisé partout
 backdrop-blur sur de nombreuses cartes
 Cartes avec rounded-xl, rounded-2xl ou rounded-3xl partout
 Bordures très fines et semi-transparentes partout
 Ombres très importantes sur presque tous les composants
 Beaucoup trop d'éléments avec des effets hover
 Animations qui n'apportent aucune information
 Éléments qui se déplacent ou grossissent simplement au survol
 Apparition systématique avec fade-in
 Utilisation excessive de particules ou d'effets décoratifs
 Background animé sans raison fonctionnelle
 Effets néon sans rapport avec l'identité du produit
 Icônes utilisées uniquement pour rendre l'interface "plus jolie"
 Emojis utilisés à la place de véritables icônes
 Même style de carte répété dans toute l'application
 Même bouton réutilisé visuellement partout, même lorsque le contexte change
🧱 Structure de page
 Hero centré avec un énorme titre
 Petit badge au-dessus du titre
 Phrase marketing générique sous le titre
 Deux boutons Get Started / Learn More
 Trois ou quatre cartes juste sous le Hero
 Section "Features" avec exactement 3 ou 6 cartes
 Section "How it works" avec 3 étapes
 Section "Testimonials" avec des avatars génériques
 Section "Pricing" avec 3 plans
 FAQ générée automatiquement
 CTA final très générique
 Footer extrêmement standardisé
 Structure identique à de nombreux templates SaaS
 Beaucoup de sections alors que le produit ne nécessite qu'une page simple
 Présence d'éléments uniquement parce qu'ils "font professionnel"
✍️ Contenu
 Texte marketing très générique
 "Empower your business"
 "Unlock your potential"
 "Transform your workflow"
 "Build the future"
 "Take your business to the next level"
 Utilisation excessive de mots comme innovative, powerful, seamless, revolutionary
 Descriptions qui pourraient correspondre à n'importe quelle entreprise
 Faux témoignages
 Faux noms de clients
 Logos d'entreprises sans preuve qu'elles utilisent réellement le produit
 Statistiques impressionnantes mais non sourcées
 Texte beaucoup trop parfait ou artificiel
 Absence de détails spécifiques au métier
 Contenu qui ne reflète pas les vrais besoins des utilisateurs
 Lorem ipsum laissé dans certaines parties
 Données fictives conservées dans la version finale
📱 Responsive / UX
 Desktop très travaillé mais mobile négligé
 Simple réduction des tailles pour passer sur mobile
 Texte trop petit sur téléphone
 Boutons trop petits
 Navigation mobile ajoutée au dernier moment
 Menu hamburger sans vraie réflexion UX
 Cartes qui deviennent énormes sur mobile
 Espacements incohérents entre les breakpoints
 Horizontal scrolling involontaire
 Images qui débordent
 Tableaux inutilisables sur mobile
 Formulaires difficiles à utiliser sur téléphone
 Touch targets trop petits
 Animations trop lourdes sur mobile
 Site qui fonctionne uniquement dans une largeur d'écran précise
💻 Code
 Beaucoup trop de <div>
 Composants énormément imbriqués
 Fichiers de plusieurs centaines de lignes sans raison
 Composants qui font trop de choses
 Logique métier directement dans les composants UI
 Code dupliqué
 Fonctions presque identiques présentes plusieurs fois
 Variables mal nommées
 Noms de variables génériques comme data, thing, item, value
 Fonctions beaucoup trop longues
 useEffect utilisés pour des choses qui n'en nécessitent pas
 Dépendances inutiles dans package.json
 Bibliothèques installées mais jamais utilisées
 Plusieurs bibliothèques pour faire la même chose
 Code mort
 Commentaires expliquant des choses évidentes
 Commentaires extrêmement longs générés par l'IA
 TODO laissés partout
 console.log() oubliés
 any utilisé partout en TypeScript
 eslint-disable utilisé pour contourner les problèmes
 @ts-ignore utilisé régulièrement
 Gestion des erreurs minimale
 try/catch ajoutés uniquement pour empêcher l'application de planter
 Valeurs codées en dur partout
 URLs d'API directement dans les composants
 Secrets ou clés API présents dans le frontend
 Absence de séparation claire frontend/backend
 Architecture impossible à expliquer
🔐 Backend / sécurité
 Authentification uniquement côté frontend
 Autorisations vérifiées uniquement dans l'interface
 API accessible sans contrôle approprié
 Validation uniquement côté client
 Données utilisateur considérées comme fiables
 Absence de validation des entrées
 Gestion des erreurs serveur insuffisante
 Messages d'erreur révélant trop d'informations
 Secrets dans Git
 Variables d'environnement mal gérées
 CORS configuré de manière excessive
 Absence de rate limiting lorsqu'il est nécessaire
 Permissions trop larges
 Routes API créées sans véritable modèle de sécurité
 Données sensibles renvoyées inutilement au frontend
🧪 Tests / qualité
 Aucun test
 Tests générés mais jamais exécutés
 Tests qui vérifient uniquement le "happy path"
 Pas de tests d'erreur
 Pas de tests d'intégration lorsqu'ils sont nécessaires
 Pas de tests E2E pour les parcours critiques
 Couverture très faible
 Bugs corrigés uniquement lorsqu'ils apparaissent
 Pas de lint
 Pas de formatage automatique
 Pas de CI/CD
 Pas de revue de code
 Aucune vérification après génération de code
🧠 Architecture
 Architecture choisie par défaut sans justification
 Technologies ajoutées parce qu'elles sont populaires
 Plusieurs frameworks utilisés sans nécessité
 Abstractions inutiles
 Sur-ingénierie d'un petit projet
 Au contraire, aucune architecture sur un projet complexe
 État global utilisé alors qu'il n'est pas nécessaire
 État local utilisé alors qu'un état partagé est nécessaire
 Logique métier dispersée
 Couplage excessif entre composants
 API mal structurée
 Modèles de données incohérents
 Duplication frontend/backend
 Architecture difficile à maintenir
🗃️ Données / fonctionnalités
 Données fictives utilisées partout
 Boutons qui ne font rien
 Liens qui ne fonctionnent pas
 Formulaires qui semblent fonctionner mais n'enregistrent rien
 Recherche uniquement visuelle
 Pagination simulée
 Filtres qui ne filtrent pas réellement
 Dashboard avec statistiques statiques
 Notifications fictives
 "Online" alors qu'aucun système de présence n'existe
 Upload affiché mais non fonctionnel
 Suppression uniquement visuelle
 Authentification simulée
 Données perdues après un refresh
 Fonctionnalités présentes uniquement pour impressionner visuellement
🛠️ Processus de développement
 Prompt → code → copier-coller → terminé
 Très peu de compréhension du code généré
 Modification du code uniquement par prompts successifs
 Absence de spécifications avant de coder
 Absence de conception de l'architecture
 Absence de tests après chaque modification importante
 Corrections empilées plutôt que résolution de la cause
 Plusieurs hacks CSS pour corriger un problème
 Ajout d'une nouvelle librairie dès qu'un problème apparaît
 Pas de documentation technique
 Pas de README utile
 Git avec très peu de commits significatifs
 Gros commit contenant toute l'application
 Impossible pour le développeur d'expliquer certains choix techniques