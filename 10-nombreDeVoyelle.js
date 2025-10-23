/*
  Énoncé :
  Écris une fonction `nombreDeVoyelles(phrase)` qui retourne le nombre de voyelles
  (a, e, i, o, u, y) dans une chaîne, insensible à la casse.

  Signature attendue :
    function nombreDeVoyelles(phrase) -> number

  Placeholder : levée d'erreur pour indiquer que l'exercice doit être implémenté.
*/
function nombreDeVoyelles (phrase) {
  const voyelles = "aeiouy" ;
  let compteur = 0 ;
  for ( let i = 0 ; i < phrase.length; i++) {
    let lettre = phrase[i].toLowerCase () ;

    if ( voyelles.includes(lettre)) {
      compteur ++ ;
    }
  }
   return compteur;
 }
 
  console.log (nombreDeVoyelles("Bonjour le Monde"))


// Ne pas modifier la ligne ci-dessous
module.exports = { nombreDeVoyelles }
