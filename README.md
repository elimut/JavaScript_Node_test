# Node.js  

Node.js est une plateforme logicielle libre en JavaScript, c'est une plateforme de bas niveau qui donne accès à des millions de bibliothèques.
Elle permet de créer des choses niveau serveur, et éxecuter du langage JS côté serveur.
Elle utilise une machine virtuelle, entre le serveur et l' utilisateur.
L' on peut insi éxecuter JavaScript n'importe où.

>Node.js est un environnement d’exécution single-thread, open-source et multi-plateforme permettant de créer des applications rapides et évolutives côté serveur et en réseau. Il fonctionne avec le moteur d’exécution JavaScript V8 et utilise une architecture d’E / S non bloquante et pilotée par les événements, ce qui le rend efficace et adapté aux applications en temps réel.

Exemple:
Développer des API,...

Quand on installe Node.js, l' on installe également **npm** (node package manager) de façon automatique, cela permet la gestion des packages = bibliothèques tiers.

## Node.js depuis la console


node -v -> vérifier si bien installé, version.


(ctrl d revenir console)

permet ecrire js depuis terminal
pas d' enregistrement, machine virtuelle


## Node.js depuis IDE

(ctrl d revenir console)

ctrl % ide ouv console

node nomfichierjs
permet d'exécuter fichier js

## Accès à des bibliothèques mais plus encore

JavaScript nous donne accès au DOM et au BOM (Browser Object Model).
Avec Node.js on a accès à des **objets globaux**.

Exemples:
variables environnement, OS,... sont des objets globaux.

### Qu'est ce qu'un objet?

vehicule.js
objet
clef valeur

fonction fléchée sont inaproppriées dans un objt

### Objet global et objets globaux

global.js
// renvoie fonctions qui peuvent être utilisées sans faire appel à un module particulier, sans rien importer dans le fichier
console.log(global);
pas de navigateur mais pourtant objt global apparaît

Certains objet qui n' existent que dans le cadre des modules, ressemblent à un objet global mais ne sont pas les mêmes.

objt global pas besoin d' être défini


Exemples:
__dirname
https://www.digitalocean.com/community/tutorials/nodejs-how-to-use__dirname

chemin courant

__filename
_require

Module?
= bloc cohérent de code, qui contient ses propres fonctions, qui fonctionnenet ensemble et sont séparés du reste du code.
Ils sont uniques mais fonctionnent

meilleure séparation du code, meilleur maintenabilité et lisibilité du code.

rend application plus légère, ne charge pas tout PLUS RAPIDE;
 objet global pas besoin de donner le chemin

fetch:

url= adresse
http -> nom de domaine, représente position, 
url -> Uniform Resource Locator. Manière uniforme d' accès à des ressources.

protocol domaine port ressource
http:// 178.128.195.113 :3000 /formation

domaine = adresse logique, représente le nom de domaine simplo.co
port = donne une id de processus de machine sur le serveur
ressource= quel fichier est souhaité 

client , nav envoie requete au serveur, requete http et renvoie au format souhaité
=>
** communication

node js permet à une machine de se comporter comme un serveur avec response request 


node est asynch, pour utiliser les méthodes de facon synch après fonction mettre sync






