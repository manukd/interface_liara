# Interface LIARA

##Description

Création d'une interface pour le laboratoire LIARA qui met en avant les diférents capteurs du laboratoire. 

##Installation

Les differents frameworks utilisé sont :
* Bootstrap
* AnimeJS
* font-awesome
* jquery
* alertifyjs
* popper.js

Il est nessesaire d'avoir comme logiciel installé :
* git
* npm (Node package Manager) 

Il est imérartif que l'application tourne sur un serveur WEB car il y a presence de requete ajax.
Une fois que le serveur de votre choix est installé il ne reste qu'à installer l'application.

Afin de faire fonctionner l'interface du LIARA il faut l'installer de la façon suivante :
```bash 
 > git clone ...
 > cd interface_liara
 > npm install
```

Une fois c'est commende effectuée vous n'avez plus qu'a lancer le fincher index.html present dans le dossier src depuis votre serveur WEB.

## Utilisation

### Démarrer l'application

**IMPORTANT : Veuillez disposer la pièce LIARA comme présenté sur la maquêtte de l'applicaton avant le démarrage de l'application**

L'application démarre dès lors qu'elle est sur votre navigateur et va chercher à se connecter au websockets déclarés dans **`config.json["websockets"]`**.
Si elle se connecte correctement à un websocket, vous en serez notifié par le log ci-dessous.

![alt text](https://github.com/manukd/interface_liara/blob/master/ressource/img_readme/succes.PNG "Connexion effectué")

Dans le cas contraire un message de log vous le signelera de la même manière.

![alt text](https://github.com/manukd/interface_liara/blob/master/ressource/img_readme/closed.PNG "Erreur lors de la connexion")

A noté que les websockets sont totalement indépendants, il est donc tout à fait possible qu'un websocket n'arrive pas à se connecter 
sans impacter le fonctionnement des autres websockets ni même de l'application.

> Dans le cas où les deux websockets n'arrivent pas à se connecter, vérifiez que vous êtes bien connecté au réseau Liara.

L'application va essayer de se connecter aux websockets continuellement avec un intervale de 30 secondes modifiable dans le fichier **WebsocketManager.js:76**.

### Animation de l'application

* Ouverture des portes

Chaque ouverture de porte vous sera indiquée par une animation.

![alt text](https://github.com/manukd/interface_liara/blob/master/ressource/img_readme/porte_ouverte.PNG "Porte ouverte")
![alt text](https://github.com/manukd/interface_liara/blob/master/ressource/img_readme/porte_fermé.PNG "Porte ouverte")


* Capteur de mouvement

Cinq capteurs de mouvement sont présent dans la pièce, ces derniers s'afficheront dès lors qu'un mouvement aura été repéré dans la piècee.

![alt text](https://github.com/manukd/interface_liara/blob/master/ressource/img_readme/capteur_visible.PNG "Capteurs activés")

* Portes mobilié

L'état de toutes les portes du mobilié de la cuisine vous seront affiché sur l'application à l'état ouvert ou fermé.

![alt text](https://github.com/manukd/interface_liara/blob/master/ressource/img_readme/porte_frigo_ouverte.PNG "Porte ouverte du réfrigérateur")

* Plaque de préssion

Deux plaques de pression sont présentent dans l'appartement, une devant le lit dans la chambre et l'autre dans la salle de bain 
devant le lavabo, ces dernières vous indiqueront si une pression est exercée sur ces dernières par une personne ou un objet,
de la manière suivante.

![alt text](https://github.com/manukd/interface_liara/blob/master/ressource/img_readme/plque_de_pression.PNG "Plaque de pression activée")

* Le lit

Un lit est présent dans la chambre, quand une personne se couche sur ce dernier, une animation se déclanche et vous êtes
donc notifié qu'une personne est couchée.

![alt text](https://github.com/manukd/interface_liara/blob/master/ressource/img_readme/lit.PNG "Une personne couché dans le lit")

* Les objets RFID

Il y a beaucoup d'objets RFID c'est pourquoi il est possible de les activer/désactiver individuellement grâce à l'interface
suivante présente en dessous de la maquête.

![alt text](https://github.com/manukd/interface_liara/blob/master/ressource/img_readme/interface_rfid "Interface RFID")

Ils sont tout simplement représenté par le nom sur l'interface et ils se déplaceront en temps réel sur cette dernière. Malheuresement
les antênnes RFID ne permettent pour le moment pas de sortir de la cuisine.

![alt text](https://github.com/manukd/interface_liara/blob/master/ressource/img_readme/rfid.PNG "Objet RFID poivre présent dans la pièce")

### Ajouter des devices

* Ajouter un websocket

Comme nous vous l'avons indiqué précédement, les websockets sont dans le fichier **config.json** à la clé `["websockets"]`
Si vous voulez en ajouter un il vous suffit des déclarer votre web socket dans ce fichier en respectant la forme suivante.

`{"url":"`**`[L'URL de votre websocket]`**`","name":"`**`[Le nom du votre websocket]`**`"},`

En suite il vous faudra déclarer le fonctionnement dans le fichier **WebsocketFunctions.js** en créant une fonction avec comme nom
le nom du votre websocket.

Ainsi le fichier **WebsocketManager.js** gérera automatiquement votre websocket de l'initialisation jusqu'à la déconnexion.

* Ajouter des éléments animés
  ##### Élément avec animation animeJS
  
  Pour ajouter une élements animés comme une porte par exemple, il vous faudra vous rendre dans le fichier **config.json** à la clé
  `["sensor"]` Vous devrez ensuite déclarer votre objet de la façon suivante.
  
```  {
      "id_laboratory": "[Le nom du capteur sur le websocket]", 
      "className": "[La classe de votre élement SVG]",
      "rotateOrigine": [La rotation avant l'animation],
      "rotateFinal": [La rotation après l'animation],
      "easing": "[Le type d'animation]",
      "duration" : [La durée de votre animation]
    },
 ```
 > Certaines lignes sont optionnelles
 
  Ici nous déclarons une porte mais comme vous pourrez le remarqué il est possible de changer la couleur avec **colorOrigine** et **colorFinal** ou encore déplacé des objets avec **translateOrigineX** et **translateFinalX**.
   ##### Élément sans animation animeJS
  
  Il est aussi possible d'ajouter des animations ou des changements d'état sans animeJS, cependant il est nécessaire de minimifier
  l'utilisation de cette solution. Il faudra déclarer le fonctionnement de votre animation dans la fonction **Objets(event)** 
  situé dans le fichier **WebsocketFunctions.js**.
  
* Ajouter des objets RFID

Afin d'ajouter de nouveau objet RFID il vous faudra une fois encore vous rendre dans **config.json** à la clé `["RFID"]`.
Ici rien de plus facile, vous devrez déclarer votre objets de la manière suivante.

```
    {
      "id_laboratory": "[Nom de l'objet sur le websocket]",
      "id_software": "[Nom affiché sur l'application]",
      "btnSoftwareID":"[Nom de votre bouton de test relié à l'objet]",
      "classAffiche":"[Classe de votre objet]"
    },
```

## Plus d'information

Interface réalisé lors d'un stage de DUT informatique (diplôme français) au laboraroire.

* Site du laboratoire : **[LIARA](http://liara.uqac.ca/)**
* Site de l'Université du Québec À Chicoutimi: **[UQAC](http://www.uqac.ca/)**

##Auteur

Kevin Chapron --_Superviseur_

Pierre Wenzel --_Développeur_

manukd --_Développeur_

## Licence

```
Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
```
