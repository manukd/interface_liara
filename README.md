# Interface LIARA

##Description
Création d'une interface pour le laboratoire LIARA qui met en avant 

##Installation

Afin de faire fonctionner l'interface du LIARA il faut l'installer de la façon suivante :
 * git clone ...
 

##Utilisation

###Démarrer l'application

/!\ IMPORTANT : Veuillez disposer la pièce LIARA comme présenté sur la maquêtte de l'applicaton avant le démarrage de l'application /!\

L'application démarre dès lors qu'elle est sur votre navigateur et va chercher à se connecter au websockets déclarés dans `config.json["websockets"]`.
Si elle se connecte correctement à un websocket, vous en serez notifié par le log ci-dessous.

`[IMAGE DE LA NOTIFICATION SUCCES]`

Dans le cas contraire un message de log vous le signelera de la même manière.

`[IMAGE DE LA NOTIFICATION ERROR]`

A noté que les websockets sont totalement indépendants, il est donc tout à fait possible qu'un websocket n'arrive pas à se connecter 
sans impacter le fonctionnement des autres websockets ni même de l'application.

> Dans le cas où les deux websockets n'arrivent pas à se connecter, vérifiez que vous êtes bien connéctés au réseau Liara.

Comme nous vous l'avons déjà dit, l'application va essayer de se connecter aux websockets continuellement avec un intervale de 
30 secondes modifiable dans le fichier **WebsocketManager.js:76**.

###Animation de l'application

* Ouverture des portes

Chaque ouverture de porte vous sera indiqué par une animation.

`[Gif ? de la porte qui s'ouvre]`

* Capteur de mouvement

Cinq capteurs de mouvement sont présent dans la pièce, ces derniers s'afficheront dès lors qu'un mouvement aura été repéré dans la piècee.

`[Image des capteurs non visible puis visible]`

* Portes mobilié

L'état de toutes les portes du mobilié de la cuisine vous seront affiché sur l'application à l'été ouvert ou fermé.

* Plaque de préssion

Deux plaques de pression sont présente dans l'appartement, une devant le lit dans la chambre et l'autre dans la salle de bain 
devant le lavabo, ces dernières vous indiquerement si une pression est exercé sur ces dernières par une personne ou un objet,
de la manière suivante.

* Le lit

Un lit est présent dans la chambre, quand une personne se couche sur ce dernier, une animation se déclanche et vous êtes
donc notifié qu'une personne est couchée.

* Les objets RFID

Il y a beaucoup d'objets RFID c'est pourquoi il est possible de les activer/désactiver individuellement grâce à l'interface
suivante présente en dessous de la maquête.

`[IMAGE DE L'INTERFACE DES OBJETS RFID]`

Ils sont tout simplement représenté par le nom sur l'interface et ils se déplaceront en temps réel sur cette dernière. Malheuresement
les antênnes RFID ne permettent pour le moment pas de sortir de la cuisine.

`[Peut être une délimitation de la cuisine]`

###Ajouter des devices

* Ajouter un websocket

Comme nous vous l'avons indiqué précédement, les websockets sont dans le fichier **config.json** à la clé `["websockets"]`
Si vous voulez en ajouter un il vous suffit des déclarer votre web socket dans ce fichier en respectant la forme suivante.

`{"url":"[L'URL de votre websocket]","name":"[Le nom du votre websocket]"},`

En suite il vous faudra déclarer le fonctionnement dans le fichier **WebsocketFunctions.js** en créant une fonction avec comme nom
le nom du votre websocket.

Ainsi le fichier **WebsocketManager.js** gérera automatiquement votre websocket de l'initialisation jusqu'à la déconnexion.

* Ajouter des éléments animés
  * Élément avec animation animeJS
  
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
  Ici nous déclarons une porte mais comme vous pourrez le remarqué il est possible de changer la couleur avec **colorOrigine** et **colorFinal** ou encore déplacé des objets avec **translateOrigineX** et **translateFinalX**.
  
  * Élément sans animation animeJS
  
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

##Plus d'information

##Auteur

##Licence
