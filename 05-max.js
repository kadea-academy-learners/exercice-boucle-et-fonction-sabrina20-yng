/*
  Énoncé :
  Crée une fonction `max(a, b)` qui retourne :
    - le plus grand des deux nombres
    - la chaîne "Les deux nombres sont égaux" si les deux sont identiques
    - null si un argument n'est pas un nombre valide

  Signature attendue :
    function max(a, b) -> number | string | null

  Placeholder : levée d'erreur pour indiquer que l'exercice doit être implémenté.
*/
function max(a, b) {
 if (typeof a !== "number"  || typeof b !== "number") {
  return null;
}
if ( a === b) {
  return " Les deux nombres sont égaux" ;
}
return a >b ? a : b ;}

console.log(max ( 5,10))
// Ne pas modifier la ligne ci-dessous
module.exports = { max }
