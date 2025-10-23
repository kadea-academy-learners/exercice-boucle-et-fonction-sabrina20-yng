/*
  Énoncé :
  Écris une fonction nommée `multiplication(a, b)` qui retourne le résultat de a * b.

  Signature attendue :
    function multiplication(a, b) -> number

  Placeholder : levée d'erreur pour indiquer que l'exercice doit être implémenté.
*/
function multiplication(a, b) {
  console.log (typeof a ,typeof b) ;
  if (typeof a !== "number" || typeof b !== "number"){
    return null ;
  }
  return a * b ;
}
console.log (multiplication ( 5 ,3)) ;

// Ne pas modifier la ligne ci-dessous
module.exports = { multiplication }
