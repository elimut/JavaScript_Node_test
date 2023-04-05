'use strict';

var objet = {
    i: 10,
    b: () => console.log(this.i, this),
        // valeur de i et valeur de l'objet
    c: function (){
        console.log(this.i, this);
    }
};
// ne console log rien car rien appelé

objet.b();
// appel propriété b
// function flechee ne sort pas du ctxt -> undefined
objet.c();
//  voir img10
// 10 { i: 10, b: [Function: b], c: [Function: c] }
console.log(objet.i, objet);
// 10 { i: 10, b: [Function: b], c: [Function: c] }
()=>{console.log(objet.i, objet)};
// ne s' éxecute pas car  n'est pas appelée, anomnyme doit être entourée de parenthèse, auto-invoquée
(()=>{console.log(objet.i, objet)});
// 10 { i: 10, b: [Function: b], c: [Function: c] }

console.log(objet.i, objet);


var voiture = {
    chevaux: 4,
    annee: 2023,
    portes: 5,
    couleur: "rose",
    carburant: "diesel"
};
console.log(voiture.annee);
// annee de la voiture
// clef/valeur -> accès propriété objet nomobj suivi clef séparé par un point
// pour y accèder de l'intérieur -> this