# Interface LIARA

##Description
Création d'une interface pour le laboratoire LIARA qui met en avant 

##Installation

Afin de faire fonctionner l'interface du LIARA il faut l'installer de la façon suivante :
 * git clone ...
 

##Utilisation

/!\ IMPORTANT : Veuillez disposer la pièce LIARA comme présenté sur la maquêtte de l'applicaton avant le démarrage de l'application /!\

L'application va chercher à se connecter au websockets déclarés dans `config.json["websockets"]`.
Si elle se connecte correctement à un websocket, vous en serez notifié par le log ci-dessous.

[IMAGE DE LA NOTIFICATION SUCCES]
Dans le cas contraire un message de log vous le signelera de la même manière.

[IMAGE DE LA NOTIFICATION ERROR]

A noté que les websockets sont totalement indépendants, il est donc tout à fait possible qu'un websocket n'arrive pas à se connecter 
sans impacter le fonctionnement des autres websockets ni même de l'application.

> Dans le cas où les deux websockets n'arrivent pas à se connecter, vérifiez que vous êtes bien connéctés au réseau Liara.

Comme nous vous l'avons déjà dit, l'application va essayer de se connecter aux websockets continuellement avec un intervale de 
30 secondes modifiable dans le fichier WebsocketManager.js:76.

Une fois les websockets connectés l'applicaton sera à l'écoute de ces derniers en temps réel, de ce fait chaque vous verrez chaque
intéraction de la pièce avec la personne à l'intérieur.

* Ouverture des portes

Chaque ouverture de porte vous sera indiqué par une animation.

[Gif ? de la porte qui s'ouvre]
* Capteur de mouvement

Cinq capteurs de mouvement sont présent dans la pièce, ces derniers s'afficheront dès lors qu'un mouvement aura été repéré dans la piècee.

[Image des capteurs non visible puis visible]

* Portes mobilié
L'état de toutes les portes du mobilié de la cuisine vous seront affiché sur l'application à l'été ouvert ou fermé.
* Plaque de préssion
Deux plaques de pression sont présente dans l'appartement, une devant le lit dans la chambre et l'autre dans la salle de bain 
devant le lavabo, ces dernières vous indiquerement si une pression est exercé sur ces dernières par une personne ou un objet,
de la manière suivante.
* 
##Plus d'information

##Auteur

##Licence
