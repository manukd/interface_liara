let socketRFID;

function changerWebsocketObjets() {
    alertify.prompt("Websocket objets RFID", "Entrer l'adresse du websocket des objets", "",
        function (ev, val) {
            if(val>20 || val<12 || val == '')
            {
                alertify.error("Adresse non valide");
            }
            else
            {
                websocketPortesTurnOff();
                socketRFID = new WebSocket("ws://"+val);
                document.querySelector('#adresse_objets').innerHTML = val;
                // The value entered is availble in the val variable.
                alertify.success("Vérifier la disposition réel des portes par rapport au plan");
            }

        }, function (ev) {
            alertify.error("Vérifier la disposition réel des portes par rapport au plan");
        });
}

function websocketObjetsTurnOff() {
    if (socketRFID !== undefined)  {
        socketRFID.close();
        socketRFID.onclose = function (event) {
            alertify.success("Websocket correctement arrêté")
        }
    }
}

function websocketObjetsTurnOn() {
    websocketObjetsTurnOff();
    socketRFID = new WebSocket('ws://' + document.querySelector('#adresse_objets').textContent);
    socketRFID.onopen = function (event) {
        alertify.success("Websocket objet connecté");
        socketRFID.onmessage = function (event) {
            let d = JSON.parse(event.data);
            for (let i = 0; i < d['lst_RFIDPosition'].length; i++) {
                if (tabObjetRFID.indexOf(d['lst_RFIDPosition'][i]['TagName']) > -1) {
                    document.getElementById(d['lst_RFIDPosition'][i]['TagName']).style.opacity = '1';
                    anime({
                        targets: '#' + d['lst_RFIDPosition'][i]['TagName'],
                        easing: 'linear',
                        translateX: ((d['lst_RFIDPosition'][i]['Coord']['X']) * 559) / 1150,
                        translateY: 267 - (((d['lst_RFIDPosition'][i]['Coord']['Y']) * 267) / 400)
                    });
                }
            }
        };
    };
    socketRFID.onerror = function (event) { alertify.error("Erreur lors de la connexion au websocket objets RFID.") }



}


