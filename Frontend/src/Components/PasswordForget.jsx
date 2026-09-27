/*

    Ce code a pour but utile de changer le mot de passe oublié.
    Comment le faire ? 

    reprendre le design de formulaire de connexion 
    Demander le mail de l'utilisateur 
    Envoyer un code OTP via l'email 
    vérification du code OTP saisi 
    loading pour aller vers la page Changer le mot de password
    formulaire (saisir le mot de passe et confirmer le mot de password )
    enfin Connexion vers les pages en fonction si user est admin ou user 

🔐 Critères du mot de passe
✅ Minimum 8 caractères
✅ Au moins 1 lettre majuscule (A-Z)
✅ Au moins 1 lettre minuscule (a-z)
✅ Au moins 1 chiffre (0-9)
✅ Au moins 1 caractère spécial (! @ # $ % & * ?)
❌ Pas d'espace
❌ Éviter les mots de passe trop courants (Password123!, Azerty123!, etc.)


    fonction pour définir si le mot de passe est fort ou pas 

    function getPasswordStrength(password: string) {
  let score = 0;

  // Longueur
  if (password.length >= 8) score++;
  if (password.length >= 12) score++;
  if (password.length >= 16) score++;

  // Majuscule
  if (/[A-Z]/.test(password)) score++;

  // Minuscule
  if (/[a-z]/.test(password)) score++;

  // Chiffre
  if (/[0-9]/.test(password)) score++;

  // Caractère spécial
  if (/[^A-Za-z0-9]/.test(password)) score++;

  // Résultat
  if (score <= 2) {
    return "facile";
  }

  if (score <= 4) {
    return "moyen";
  }

  if (score <= 6) {
    return "assez dur";
  }

  return "dur";
}
**/ 