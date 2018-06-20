let socket = new WebSocket('ws://0.0.0.0:0000');

function changerWebsocketPortes() {
    alertify.prompt("Websocket porte et température", "Entrer l'adresse du websocket des portes et de la tampérature", "",
        function (ev, val) {
        if(val>20 || val<12 || val === '')
        {
            alertify.error("Adresse non valide");
        }
        else
        {
            websocketPortesTurnOff();
            socket = new WebSocket("ws://"+val);
            document.querySelector('#adresse_portes').innerHTML = val;
            // The value entered is availble in the val variable.
            alertify.success("Vérifier la disposition réel des portes par rapport au plan");
        }

        }, function (ev) {
            alertify.error("Vérifier la disposition réel des portes par rapport au plan");
        });
}

function websocketPortesTurnOff() {
    socket.close();
    socket.onclose = function (event) {
        alertify.success("Websocket correctement arrêté")
    }
}


function websocketPortesTurnOn() {
    websocketPortesTurnOff();
    socket = new WebSocket('ws://' + document.querySelector('#adresse_portes').textContent);
    socket.onopen = function (event) {
            alertify.success("Websocket portes et température connecté");
            socket.onmessage = function (event) {
                let d = JSON.parse(event.data);
                console.log(d);
                for (let i = 0; i < d.length; i++) {

                    let item_websocket = d[i];

                    for (let j = 0; j < tabSensor.length; j++) {

                        let item_sensor = tabSensor[j];
                        if (item_websocket['SensorName'] === "Pression Lit") { // Pression du lit
                            if (item_websocket['AnalogValue'] > 4){
                                edredonO.restart();
                            } else {
                                edredonF.restart();
                            }
                            continue;
                        }
                        //Température des pièces
                        if (item_websocket['SensorName'].indexOf("Temperature") !== -1 && item_sensor["id_laboratory"] === item_websocket['SensorName']){
                            let temp = item_websocket['AnalogValue'].toFixed(1);
                            let TabTemp = temp.toString().split(".");
                            $(item_sensor["id"] + " .entier").html(TabTemp[0]);
                            $(item_sensor["id"] + " .decimal").html(TabTemp[1]);
                            continue;
                        }
                        //Capteur de mouvement
                        if ((item_websocket['SensorName'].indexOf("Capteur de mouvement") !== -1 || item_websocket['SensorName'].indexOf("172.24.25.14 - Adam5051 - 0 - 0") !== -1) && item_sensor["id_laboratory"] === item_websocket['SensorName'])
                        {
                            console.log($(item_websocket['DigitalValue']));
                            if(item_websocket['DigitalValue'] === true)
                            {
                                $(item_sensor["id"]).css("visibility", "visible");
                            }
                            else
                            {
                                $(item_sensor["id"]).css("visibility", "hidden");
                            }
                        }
                        //Animation des objets
                        if (item_websocket['SensorName'] === item_sensor["id_laboratory"]) {
                            let obj = {
                                targets: '.' + item_sensor['className'],
                                easing: item_sensor['easing'],
                                duration: item_sensor['duration']
                            };
                            if (item_websocket['DigitalValue'] === true) {
                                if (item_sensor["rotateOrigine"] !== undefined) {
                                    obj["rotate"] = {
                                        value: [item_sensor['rotateOrigine'], item_sensor['rotateFinal']]
                                    }
                                }
                                if (item_sensor["colorOrigine"] !== undefined) {
                                    obj["fill"] = {
                                        value: [item_sensor['colorOrigine'], item_sensor['colorFinal']]
                                    }
                                }
                                if (item_sensor["translateOrigineX"] !== undefined) {
                                    obj["translateX"] = {
                                        value: [item_sensor['translateOrigineX'], item_sensor['translateFinalX']]
                                    }
                                }
                                anime(obj);
                            } else {
                                if (item_sensor["rotateOrigine"] !== undefined) {
                                    obj["rotate"] = {
                                        value: [item_sensor['rotateFinal'], item_sensor['rotateOrigine']]
                                    }
                                }
                                if (item_sensor["colorOrigine"] !== undefined) {
                                    obj["fill"] = {
                                        value: [item_sensor['colorFinal'], item_sensor['colorOrigine']]
                                    }
                                }
                                if (item_sensor["translateOrigineX"] !== undefined) {
                                    obj["translateX"] = {
                                        value: [item_sensor['translateFinalX'],item_sensor['translateOrigineX']]
                                    }
                                }
                                anime(obj);
                            }
                        }
                    }
                }
            };
        };
        socket.onerror = function (event) { alertify.error("Erreur lors de la connexion au websocket portes et température.") }
}