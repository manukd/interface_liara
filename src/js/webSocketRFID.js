let path_socket_objets = "";

function changerWebsocketObjets() {
    alertify
        .defaultValue("")
        .prompt("Entrer l'adresse du websocket qui envoie la position des objets",
            function (val, ev) {

                // The click event is in the event variable, so you can use it here.
                ev.preventDefault();
                document.querySelector('#adresse_objets').innerHTML = val;
                // The value entered is availble in the val variable.
                alertify.success("Adresse validée");

            }, function (ev) {

                // The click event is in the event variable, so you can use it here.
                ev.preventDefault();
                alertify.error("Adresse annulée");
            });
}

function setPathObjets(path) {
    path_socket_objets = path;
}

function closeSocket() {
    socket.close();
    path_socket_objets = "";
}

function websocketObjetsTurnOn() {
    try {
        let socketRFID = new WebSocket('ws://' + path_socket_objets);
        alertify.success("Websocket objet connecté");

        socketRFID.onmessage = function (event) {
            let d = JSON.parse(event.data);
            for (let i = 0; i < d.lst_RFIDPosition.length; i++) {
                if (tabObjetRFID.indexOf(d.lst_RFIDPosition[i].TagName) > -1) {
                    document.getElementById(d.lst_RFIDPosition[i].TagName).style.opacity = '1';
                    anime({
                        targets: '#' + d.lst_RFIDPosition[i].TagName,
                        easing: 'linear',
                        translateX: ((d.lst_RFIDPosition[i].Coord.X) * 559) / 1150,
                        translateY: 267 - (((d.lst_RFIDPosition[i].Coord.Y) * 267) / 400)
                    });
                }
            }
        };
    }
    catch (e) {
        alertify.error("Votre adresse websocket objets est invalide");
    }

}


