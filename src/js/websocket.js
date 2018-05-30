let path_socket = "ws://172.24.24.3:6091";

function setPath(path)
{
    path_socket = path;
}
// 'ws://172.24.24.3:6091'
if(path_socket == '')
{

}
try {
    const socket = new WebSocket(path_socket);
}
catch (e) {
    alertify.error("Votre adresse de websocket est invalide");
}

function closeSocket()
{
    socket.close();
    path_socket="";
}

const socket = new WebSocket(path_socket);
socket.onmessage = function (event)
{

    //alertify.success("Connexion établie");
    let d = JSON.parse(event.data);
    for (let key in d) {
        switch (d[key].ID) {
            // ================================================================================= LES PORTES =====================================================================================
            case "230d93b2-1e3d-409b-84e9-c34bfbbb4f4d" : // Porte conférence
                if (d[key].DigitalValue === true) {
                    porteSalleDeConfO.restart();
                }
                else {
                    porteSalleDeConfF.restart();
                }
                break;
            case "0d491077-bd42-40ee-aaad-bb83432a71ae" : // Porte d'entrée
                if (d[key].DigitalValue === true) {
                    porteSalleExterieurO.restart();
                }
                else {
                    porteSalleExterieurF.restart();
                }
                break;
            case "df4b18c1-867b-4955-894b-e5d5333ea568" : // Porte salle de bain
                if (d[key].DigitalValue === true) {
                    porteSalleDeBainO.restart();
                }
                else {
                    porteSalleDeBainF.restart();
                }
                break;
            case "4b00ae68-e1b1-4a57-9f77-ae03c2fe24ef" : // Porte frigo
                if (d[key].DigitalValue === true) {
                    frigoOverture.restart();
                }
                else {
                    frigoFermeture.restart();
                }
                break;
            case "6d011a3a-2862-4710-be29-a6a41481de39" : // Porte Haut 1
                if (d[key].DigitalValue === true) {
                    portePlacardEvierHGGFO.restart();
                }
                else {
                    portePlacardEvierHGGFF.restart();
                }
                break;
            case "5a57b2fd-9ee0-4cc9-aa08-d79f1922df86" : // Porte Haut 2
                if (d[key].DigitalValue === true) {
                    portePlacardEvierHGDFO.restart();
                }
                else {
                    portePlacardEvierHGDFF.restart();
                }
                break;
            case "5579bd76-fc6a-42c8-b786-c4182ba163a6" : // Porte Haut 3
                if (d[key].DigitalValue === true) {
                    portePlacardEvierHDGFO.restart();
                }
                else {
                    portePlacardEvierHDGFF.restart();
                }
                break;
            case "901b2d65-f012-49b3-bfd1-e063d7e490c6" : // Porte Haut 4
                if (d[key].DigitalValue === true) {
                    portePlacardEvierHDDFO.restart();
                }
                else {
                    portePlacardEvierHDDFF.restart();
                }
                break;
            case "93f23fde-ace1-4fbb-9d0c-18fa9d29881e" : // Porte Haut 5
                if (d[key].DigitalValue === true) {
                    portePlacardFrigoHautGFO.restart();
                }
                else {
                    portePlacardFrigoHautGFF.restart();
                }
                break;
            case "db0338ca-46fb-4372-9c04-1377d7626cd3" : // Porte Haut 6
                if (d[key].DigitalValue === true) {
                    portePlacardFrigoHautDFO.restart();
                }
                else {
                    portePlacardFrigoHautDFF.restart();
                }
                break;
            case "ba6c5f50-9188-457f-8db3-e032b0254a08" : // La porte du milieu
                if (d[key].DigitalValue === true) {
                    portePlacardFrigoBasFO.restart();
                }
                else {
                    portePlacardFrigoBasFF.restart();
                }
                break;
            case "ddfec4f4-a5a2-4360-b085-f23b329d9b4e" : // Porte evier 1
                if (d[key].DigitalValue === true) {
                    portePlacardEvierGFO.restart();
                }
                else {
                    portePlacardEvierGFF.restart();
                }
                break;
            case "b2bb7103-8b44-464c-8b66-f8ca5215ada8" : // Porte evier 2
                if (d[key].DigitalValue === true) {
                    portePlacardEvierDFO.restart();
                }
                else {
                    portePlacardEvierDFF.restart();
                }
                break;
            case "e23832e1-2d34-4894-a92a-137a47430cce" : // Tiroir 1
                if (d[key].DigitalValue === true) {
                    tiroirAnimeGaucheO.restart();
                }
                else {
                    tiroirAnimeGaucheF.restart();
                }
                break;
            case "7fa342b1-6b29-456b-b357-cefc377643fd" : // Tiroir 2
                if (d[key].DigitalValue === true) {
                    tiroirAnimeDroitO.restart();
                }
                else {
                    tiroirAnimeDroitF.restart();
                }
                break;


            case "" : // Robinet cuisine
                if (d[key].DigitalValue === true) {
                    tiroirAnimeDroitO.restart();
                }
                else {
                    tiroirAnimeDroitF.restart();
                }
                break;
            case "8b87f340-c92d-4ea9-bf1d-f41ba88dd2ac" : // Lit
                if (d[key].DigitalValue === true) {
                    tiroirAnimeDroitO.restart();
                }
                else {
                    tiroirAnimeDroitF.restart();
                }
                break;

                // ============================================================================= Température =================================================================
            case "82c86a3a-5e65-4fa3-bf12-d5abef156e32" : // Temperature cuisine
                let temp1 = d[key].AnalogValue.toFixed(1);
                let TabTemp1 = temp1.toString().split(".");
                document.querySelector("#temp_manger .entier").innerHTML = TabTemp1[0];
                document.querySelector("#temp_manger .decimal").innerHTML = TabTemp1[1];
                break;
            case "4c07e71a-0e4c-4629-968a-06d9c24b0b48" : // Temperature chambre
                let temp2 = d[key].AnalogValue.toFixed(1);
                let TabTemp2 = temp2.toString().split(".");
                document.querySelector("#temp_chambre .entier").innerHTML = TabTemp2[0];
                document.querySelector("#temp_chambre .decimal").innerHTML = TabTemp2[1];
                break;
            case "886a9863-eae4-4402-96f6-b15db25ef6ab" : // Temperature salle de bain
                let temp3 = d[key].AnalogValue.toFixed(1);
                let TabTemp3 = temp3.toString().split(".");
                document.querySelector("#temp_sdb .entier").innerHTML = TabTemp3[0];
                document.querySelector("#temp_sdb .decimal").innerHTML = TabTemp3[1];
                break;
        }
    }
};