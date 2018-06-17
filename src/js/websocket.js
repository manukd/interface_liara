let path_socket_portes = "";

function changerWebsocketPortes() {
    alertify.prompt("Websocket porte et température", "Entrer l'adresse du websocket des portes et de la tampérature", "",
        function (ev, val) {
            document.querySelector('#adresse_portes').innerHTML = val;
            // The value entered is availble in the val variable.
            alertify.success("Vérifier la disposition réel des portes par rapport au plan");

        }, function (ev) {
            alertify.error("Vérifier la disposition réel des portes par rapport au plan");
        });
}

function setPathPortes(path) {
    path_socket_portes = path;
}

function websocketPortesTurnOff() {
    self.location.reload();
}

function websocketPortesTurnOn() {
    try {
        let socket = new WebSocket('ws://' + path_socket_portes);
        alertify.success("Websocket portes et température connecté");
        socket.onmessage = function (event) {
            let d = JSON.parse(event.data);
            for (let i = 0; i < d.length; i++) {

                let item_websocket = d[i];

                for (let j = 0; j < tabSensor.length; j++) {

                    let item_sensor = tabSensor[j];
                    if (item_websocket['SensorName'] === "Pression Lit") { // Pression du lit
                        if (item_websocket['AnalogValue'] > 8){
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
                        if(item_websocket['DigitalValue'] == true)
                        {
                            $(item_sensor["id"]).css("visibility", "visible");
                        }
                        else
                        {
                            $(item_sensor["id"]).css("visibility", "hidden");
                        }
                    }
                    //Plaque de pression
                    if (item_websocket['SensorName'].indexOf("Plaque de pression") !== -1 && item_sensor["id_laboratory"] === item_websocket['SensorName'])
                    {
                        if(item_websocket['DigitalValue'] == false)
                        {
                            $(item_sensor["id"]+" .cls-6").css("fill", "#990507");
                        }
                        else
                        {
                            $(item_sensor["id"]+" .cls-6").css("fill", "#ccc");
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
    }
    catch (e) {
        alertify.error("Votre adresse websocket portes et température est invalide");
    }

}