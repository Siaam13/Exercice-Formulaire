
  function validateForm(e) {
    // Réinitialiser les messages d'erreur
    document.getElementById('nomError').innerHTML = '';
    document.getElementById('passwordError').innerHTML = '';
    document.getElementById('emailError').innerHTML = '';
  
    // Récupérer les valeurs du formulaire
    var name = document.getElementById('name').value;
    var password = document.getElementById('password').value;
    var email = document.getElementById('email').value;
    // var isValid = true;
  
    // Valider le champ "nom"
    if (!name.match(/^[A-Z]/)) {
      document.getElementById('nomError').innerHTML = 'La première lettre du nom doit être en majuscule';
      return;
      // isValid = false;
    }
  
    // Valider le champ "mot de passe"
    if (!password.match(/^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/)) {
      document.getElementById('passwordError').innerHTML = 'Le mot de passe doit contenir au moins 8 caractères, une majuscule et un chiffre';
      return;
      // isValid = false;
    }
  
    // Valider le champ "adresse e-mail"
    if (!email.match(/^[\w.%+-]+@[\w.-]+\.[A-Za-z]{2,}$/)) {
      document.getElementById('emailError').innerHTML = 'L\'adresse e-mail doit contenir un "@" et un "."';
      return;
      // isValid = false;
    }
  
    // Si aucun message d'erreur n'est affiché, afficher le message de bienvenue
    if (document.getElementById('nomError').innerHTML === '' &&
        document.getElementById('passwordError').innerHTML === '' &&
        document.getElementById('emailError').innerHTML === '') {
      
      alert("Bienvenue l'artiste");
    }
    
  }

  























// // ------------------------------------------------------------------------------------------------------------------------------------------------


//   //1 ere solution essayer mais laisse afficher les messages d'erreurs.

//   function validateForm() {
//     // Récupération des valeurs des champs
//     var name = document.getElementById("name").value;
//     var password = document.getElementById("password").value;
//     var email = document.getElementById("email").value;
  
//     // Vérification du nom
//     if (name[0] !== name[0].toUpperCase()) {
//         document.getElementById("nomError").innerHTML = "Le nom doit commencer par une majuscule !";
//     //   alert("Le nom doit commencer par une lettre majuscule!");
//       return false;
      
//     }
  
//     // Vérification du mot de passe
//     var hasUppercase = false;
//     var hasNumber = false;
//     if (password.length < 8) {
//         document.getElementById('passwordError').innerHTML="Le mot de passe doit contenir au moins 8 caractères!";
//     //   alert("Le mot de passe doit contenir au moins 8 caractères!");
//       return false;
//     }
//     for (var i = 0; i < password.length; i++) {
//       if (password[i] >= 'A' && password[i] <= 'Z') {
//         hasUppercase = true;
//       }
//       if (password[i] >= '0' && password[i] <= '9') {
//         hasNumber = true;
//       }
//     }
//     if (!hasUppercase) {
//         document.getElementById('passworError').innerHTML="Le mot de passe doit contenir au moins une lettre majuscule!";
//     //   alert("Le mot de passe doit contenir au moins une lettre majuscule!");
//       return false;
//     }
//     if (!hasNumber) {
//         document.getElementById('passwordError').innerHTML="Le mot de passe doit contenir au moins un chiffre!";
//     //   alert("Le mot de passe doit contenir au moins un chiffre!");
//       return false;
//     }
  
//     // Vérification de l'adresse e-mail
//     if (!email.includes("@") || !email.includes(".")) {
//         document.getElementById('emailError').innerHTML="L'adresse e-mail doit contenir un '@' et un '.'"
//     //   alert("L'adresse e-mail doit contenir un '@' et un '.'");
//       return false;
//     }
    
 
    
  
//     // Si tous les champs sont valides, affichage du message de bienvenue
//     alert("Bienvenue l'artiste!");
//     return true;
//   }

