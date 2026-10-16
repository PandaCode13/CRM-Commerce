# Commandes de test - MDSU CRM Public

Toutes les commandes ci-dessous sont concues pour **PowerShell** (Windows).
Se placer dans le dossier `Public` a chaque etape :

```powershell
cd "C:\Users\hp\Desktop\code pratice + logiciel\CRM-Commerce\Frontend\src\features\CRM\Public"
```

Liste des CRM :

```powershell
$crms = @(
  'MDSU-CRM-Resto','MDSU-CRM-Immo','MDSU-CRM-Beauty','MDSU-CRM-Artisan',
  'MDSU-CRM-Auto','MDSU-CRM-Commerce','MDSU-CRM-B2B','MDSU-CRM-SantePro',
  'MDSU-CRM-Education','MDSU-CRM-Transport'
)
```

---

## 1. Prerequis

```powershell
node --version
npm --version
docker --version
docker compose version
```

Attendu : Node >= 20, npm >= 10, Docker >= 24, Compose >= 2.

---

## 2. Verifier que Docker Desktop est demarre

```powershell
docker info --format '{{.ServerVersion}}'
```

Si la commande echoue (`open //./pipe/dockerDesktopLinuxEngine`), Docker Desktop
n'est pas lance. Either le demarrer :

```powershell
Start-Process -FilePath "C:\Users\hp\Desktop\code pratice + logiciel\Docker Desktop.lnk"
```

ou attendre qu'il soit pret :

```powershell
for($i=0;$i -lt 40;$i++){
  Start-Sleep -Seconds 5
  docker info --format '{{.ServerVersion}}' 2>$null
  if($LASTEXITCODE -eq 0){ break }
}
```

---

## 3. Valider la syntaxe des 30 package.json

```powershell
$bad = 0
Get-ChildItem -Recurse -File -Filter package.json | ForEach-Object {
  try { [System.IO.File]::ReadAllText($_.FullName) | ConvertFrom-Json | Out-Null }
  catch { Write-Output "INVALIDE : $($_.FullName)"; $bad++ }
}
Write-Output "Invalides : $bad"
```

Attendu : `Invalides : 0`

---

## 4. Verifier qu'aucun token de generation n'est restant

```powershell
$h = Get-ChildItem -Recurse -File -Force |
     Where-Object { $_.FullName -notmatch 'node_modules' } |
     Select-String -Pattern '@@[A-Z_]+@@' -ErrorAction SilentlyContinue
if($h){ $h | Select-Object Path, LineNumber, Line } else { Write-Output "OK - aucun token residuel" }
```

Attendu : `OK - aucun token residuel`

> Ne pas oublier le filtre `node_modules` : sans lui le parcours des
> ~753 Mo de dependances rend la commande tres lente.

---

## 5. Valider les 10 stacks Docker Compose

```powershell
$ok = 0; $ko = 0
foreach($c in $crms){
  $f = Join-Path $c 'docker-compose.yml'
  docker compose -f $f config --quiet 2>&1 | Out-Null
  if($LASTEXITCODE -eq 0){ Write-Output "OK   $c"; $ok++ }
  else { Write-Output "FAIL $c"; $ko++ }
}
Write-Output "Valides : $ok / Echecs : $ko"
```

Attendu : `Valides : 10 / Echecs : 0`

Afficher la config resolue d'un CRM (variables remplacees) :

```powershell
docker compose -f .\MDSU-CRM-Commerce\docker-compose.yml config
docker compose -f .\MDSU-CRM-Beauty\docker-compose.yml config
```

---

## 6. Verifier les fichiers .env presents

```powershell
foreach($c in $crms){
  $files = @('.env','.env.example','docker-compose.yml','package.json','README.md','VERSION',
             'backend\.env','backend\.env.example','backend\Dockerfile','backend\package.json',
             'frontend\.env','frontend\.env.example','frontend\Dockerfile','frontend\package.json',
             'frontend\nginx.conf','frontend\index.html')
  $missing = $files | Where-Object { -not (Test-Path (Join-Path $c $_)) }
  if($missing){ Write-Output "$c -> MANQUE : $($missing -join ', ')" }
  else { Write-Output "$c -> complet" }
}
```

Attendu : 10 lignes `complet`

---

## 7. Verifier les installations npm

```powershell
foreach($c in $crms){
  foreach($w in @('backend','frontend')){
    $d = Join-Path $c $w
    $ok = (Test-Path (Join-Path $d 'node_modules')) -and
          (Test-Path (Join-Path $d 'package-lock.json'))
    Write-Output ("{0}/{1} : {2}" -f $c, $w, $(if($ok){'installe'}else{'MANQUANT'}))
  }
}
```

Nombre de paquets installes :

```powershell
foreach($c in $crms){
  foreach($w in @('backend','frontend')){
    $n = (Get-ChildItem (Join-Path $c "$w\node_modules") -Directory -ErrorAction SilentlyContinue).Count
    Write-Output ("{0}/{1} : {2} paquets" -f $c, $w, $n)
  }
}
```

Reinstaller si necessaire :

```powershell
foreach($c in $crms){
  npm --prefix "$c\backend"  install
  npm --prefix "$c\frontend" install
}
```

---

## 8. Verifier les images Docker de base

```powershell
docker images --format '{{.Repository}}:{{.Tag}}' |
  Where-Object { $_ -in @('node:22-alpine','nginx:alpine','postgres:17-alpine','mongo:8','redis:8-alpine') } |
  Sort-Object
```

Attendu : 5 lignes

Telescharger manuellement :

```powershell
foreach($img in @('node:22-alpine','nginx:alpine','postgres:17-alpine','mongo:8','redis:8-alpine')){
  docker pull $img
}
```

---

## 9. Verifier que les sources sont bien vides

```powershell
Get-ChildItem -Recurse -File -Include *.js,*.jsx,*.ts,*.tsx |
  Where-Object { $_.FullName -notmatch 'node_modules' }
```

Attendu : aucune sortie. Le socle ne contient volontairement aucun code applicatif.

---

## 10. Demarrer les bases de donnees uniquement

Les images ne se construisent pas encore (pas de sources), mais les
bases de donnees demarrent sans probleme.

```powershell
docker compose -f .\MDSU-CRM-Resto\docker-compose.yml up -d db
docker compose -f .\MDSU-CRM-Beauty\docker-compose.yml up -d db
docker compose -f .\MDSU-CRM-Commerce\docker-compose.yml up -d db cache
docker compose -f .\MDSU-CRM-B2B\docker-compose.yml up -d db cache
```

Etat des conteneurs :

```powershell
docker ps --format 'table {{.Names}}\t{{.Status}}\t{{.Ports}}'
```

Tester la connectivite PostgreSQL :

```powershell
docker exec mdsu-crm-resto-db psql -U mdsu -d mdsu_resto -c "SELECT version();"
docker exec mdsu-crm-b2b-db psql -U mdsu -d mdsu_b2b -c "SELECT 1;"
```

Tester MongoDB :

```powershell
docker exec mdsu-crm-beauty-db mongosh -u mdsu -p fake_password_change_me --authenticationDatabase admin --quiet --eval "db.adminCommand('ping')"
```

Tester Redis :

```powershell
docker exec mdsu-crm-commerce-cache redis-cli ping
docker exec mdsu-crm-commerce-cache redis-cli info memory
```

Arreter :

```powershell
docker compose -f .\MDSU-CRM-Resto\docker-compose.yml stop
```

---

## 11. Construction complete (apres ecriture des sources)

Une fois `backend/src/server.js` et `frontend/src/main.jsx` ecrits :

```powershell
docker compose -f .\MDSU-CRM-Resto\docker-compose.yml up -d --build
```

Suivre les logs :

```powershell
docker compose -f .\MDSU-CRM-Resto\docker-compose.yml logs -f
```

Tester l'API :

```powershell
Invoke-WebRequest http://localhost:8001/api -UseBasicParsing
Invoke-RestMethod http://localhost:8001/api/health
```

Tester le frontend :

```powershell
Start-Process http://localhost:8000
```

---

## 12. Developpement local sans Docker

```powershell
# Backend
npm --prefix .\MDSU-CRM-Resto\backend run dev
# -> http://localhost:8001

# Frontend (autre terminal)
npm --prefix .\MDSU-CRM-Resto\frontend run dev
# -> http://localhost:8000
```

Lint frontend :

```powershell
npm --prefix .\MDSU-CRM-Resto\frontend run lint
```

---

## 13. Nettoyage

Arreter et supprimer les conteneurs + volumes d'un CRM :

```powershell
docker compose -f .\MDSU-CRM-Resto\docker-compose.yml down -v
```

Nettoyer tous les CRM :

```powershell
foreach($c in $crms){
  docker compose -f (Join-Path $c 'docker-compose.yml') down -v --remove-orphans
}
```

Supprimer tous les conteneurs MDSU :

```powershell
docker ps -a --filter "name=mdsu-crm" --format '{{.ID}}' | ForEach-Object { docker rm -f $_ }
```

Supprimer tous les volumes MDSU :

```powershell
docker volume ls --filter "name=mdsu" --format '{{.Name}}' | ForEach-Object { docker volume rm -f $_ }
```

Supprimer les networks MDSU :

```powershell
docker network ls --filter "name=mdsu" --format '{{.Name}}' | ForEach-Object { docker network rm $_ }
```

Reinitialiser les installations npm :

```powershell
foreach($c in $crms){
  foreach($w in @('backend','frontend')){
    Remove-Item (Join-Path $c "$w\node_modules") -Recurse -Force -ErrorAction SilentlyContinue
    Remove-Item (Join-Path $c "$w\package-lock.json") -Force -ErrorAction SilentlyContinue
  }
}
```

---

## 14. Verifications Git

```powershell
git status --short
```

`.env` est ignore, `.env.example` est suivi. Verification :

```powershell
# doit afficher la regle ".env"  -> .env est ignore
git check-ignore -v .\MDSU-CRM-Resto\.env

# doit afficher la regle "!.env.example" -> .env.example n'est PAS ignore
git check-ignore -v .\MDSU-CRM-Resto\.env.example

# test booleen : 0 = ignore, 1 = suivi
git ls-files --error-unmatch .\MDSU-CRM-Resto\.env.example
```

`git check-ignore` affiche aussi les regles de negation (`!.env.example`),
ce qui est normal : cela confirme que le fichier reste suivi.

Comme le dossier est recent, rien n'est encore indexe (`?? MDSU-CRM-Resto/`).
Pour que la verification soit exploitable, il faut d'abord indexer :

```powershell
git add .\MDSU-CRM-Resto
```

puis

```powershell
# doit reussir : .env.example est bien suivi
git ls-files --error-unmatch .\MDSU-CRM-Resto\.env.example

# doit echouer : .env n'est pas suivi
git ls-files --error-unmatch .\MDSU-CRM-Resto\.env

# aucun .env reel ne doit etre suivi
git ls-files | Where-Object { $_ -match '\.env$' -and $_ -notmatch '\.env\.example$' }
```

Attendu : premiere commande sans erreur, deuxieme en erreur,
troisieme sans sortie.

---

## 15. Resume

| Verification | Commande | Attendu |
| ------------ | -------- | ------- |
| Prerequis | section 1 | Node >= 20 |
| Docker actif | section 2 | version affichee |
| JSON valides | section 3 | `Invalides : 0` |
| Tokens residuels | section 4 | aucun |
| Compose valides | section 5 | `10 / 0` |
| Fichiers presents | section 6 | 10 x `complet` |
| npm installe | section 7 | 20 x `installe` |
| Images Docker | section 8 | 5 images |
| Pas de code | section 9 | aucune sortie |
| Bases de donnees | section 10 | conteneurs `healthy` |
