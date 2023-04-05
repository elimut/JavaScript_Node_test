// var prenom = "anneso";
// console.log(prenom);

// const salutations = (nom) =>{
//     console.log(`Bonjour, je m' appelle ${nom}`)
// }

// salutations("Eléanore");
// salutations("Bahamut");

// éxecution simplon:
require("./simplon.js");
// PS C:\Users\utilisateur\Desktop\GIT\Node.js> node main
// [
//   { nom: 'kames', niveau: 4 },
//   { nom: 'angelika', niveau: 5 },
//   { nom: 'benoit', niveau: 3 }
// ]
// Simplon est devenu un module , en allant le chercher depuis l' ext on va chercher un module

// console.log(eleves);
// si sorti de simplon, ne peut être utilisé ,inutilisable, code seulement accessible
// pour le rendre accessible et utilisable: on va exposer/exporter le module 

const toto = require('./simplon.js');
console.log(toto);
// récupération de l'export de simplon.js= destructuring
// POURRA ËTRE MODIFI2 MAIS NE CHANGERA PAS LES DONN2ES DE BASE
// On peut exporter plusisuers modules, en js tout est objet

// const {eleves, cours} = require('./simplon.js');
// console.log(eleves);
// console.log(cours);

// const system = require("os");
// console.log(system);
// objet global OS, donne accès à plusieurs propriéts, user info ...
// pour utiliser les propriétés ->
// console.log(system.userInfo());
const system = require("fs");
console.log(system.accessSync);
// Node fs, module nodejs pour “File System”, permet aux développeurs de créer et gérer des fichiers pour y stocker ou lire des fichiers dans un programme Node
// https://welovedevs.com/fr/articles/how-to-use-node-fs/

// throw new Error("Il y a une nouvelle erreur");

// exception dans code throw  comme new nouvelle instance
// L'instruction throw permet de lever une exception définie par l'utilisateur. L'exécution de la fonction courante sera stoppée (les instructions situées après l'instruction throw ne seront pas exécutées) et le contrôle sera passé au premier bloc catch de la pile d'appels. Si aucun bloc catch ne se trouve dans les fonctions de la pile d'appels, le programme sera terminé.
//  toutes exceptions du catch renverra quelque chose 

// try{
//     uneFonctionNonExistante();
// }catch (error) {
//     console.error("La fonction n' existe pas", error);
// }

doSomething()
.then(doSomething2)
.then(doSomething3)
.catch(err => 
    console.error(err)
);
