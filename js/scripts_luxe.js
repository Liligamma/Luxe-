$(document).ready(function() {

  var nombreBagues;
  var nombreColliers;

  nombreBagues=0;
  nombreColliers=0;

console.log(nombreBagues);
console.log(nombreColliers);




  // On localise l'objet .btn-contact
  // On écoute l'événement click
  jQuery(".btn-contact").click(function(){
    // Quand le click a lieu on passe à l'action (nouvelles instructions):
          // On localise l'objet .conteneur-contact
          jQuery(".conteneur-contact").slideDown(3000);
          // On affiche cet objet
  });
  // fin de jQuery(".btn-contact").click

  jQuery(".btn-commande-bague").click(function(){
    nombreBagues = nombreBagues +1
    console.log(nombreBagues);
  });
  // fin de jQuery(".btn-commande-bague").click

  jQuery(".btn-commande-collier").click(function(){

  });
  // fin de jQuery(".btn-commande-collier").click

  jQuery(".btn-valider-commande").click(function(){
    jQuery(".confirmation-commande").html("Vous avez commandé :" + nombreBagues +"bague(s).");

  });
  // fin de jQuery(".btn-valider-commande").click
});



// alert("NOTRE TEL : 01 02 03 04 05");
