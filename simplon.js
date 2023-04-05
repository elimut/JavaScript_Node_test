const eleves = [
    {
        nom: "kames",
        niveau: 4
    },
    {
        nom: "angelika",
        niveau: 5
    },
    {
        nom: "benoit",
        niveau: 3
    }
]

// console.log(eleves);
// PS C:\Users\utilisateur\Desktop\GIT\Node.js> node simplon, éxecution simplon
// [
//     { nom: 'kames', niveau: 4 },
//     { nom: 'angelika', niveau: 5 },
//     { nom: 'benoit', niveau: 3 }
// ]
// :voir main js pour éxecution de ce code 

// console.logg(eleves);
// on peut voir les erreurs même en éxecutant node main

let cours = [
    "html",
    "css",
    "js",
    "java"
]
// module.exports = eleves;
// permet d' exporter le moduleet dans fichier d' export voir main
module.exports = {eleves, cours};