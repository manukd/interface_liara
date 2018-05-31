/*
"00000000001B2A4601001991" -> sucre

"00000000001B2A4601001966" -> bol1

"00000000001B2A4601001964"-> bol3

"00000000001B2A4601001963"-> bol4

"00000000001B2A4601001844" -> bol2

"00000000001B2A4601001989" -> lait

"00000000001B2A4601001975" -> sAssiete4

"00000000001B2A4601001970" -> sAssiete2

"00000000001B2A4601001972" ->sAssiete3

"00000000001B2A4601001976" -> sAssiete1


"00000000001B2A4601001984" -> Assiete3

"00000000001B2A4601001983" -> Assiete4

"00000000001B2A4601001979" -> assiete2

"00000000001B2A4601001981" -> assiete1

"00000000001B2A4601001838" -> Tasse1

"00000000001B2A4601001842"-> Tasse 3

"00000000001B2A4601001969" -> tasse 2

"00000000001B2A4601001987" -> chaudron

"00000000001B2A4601001995" -> "Bouilloir"
 */




const socketRFID = new WebSocket('ws://172.24.24.2:6094');

socketRFID.onmessage = function (event) {
    let d = JSON.parse(event.data);
    console.log(d);
    for (let i = 0; i < d.lst_RFIDPosition.length; i++) {
        switch (d.lst_RFIDPosition[i].ID) {
            case "00000000001B2A4601001839" :
                let animeTasse= anime({
                    targets: '.tasse4',
                    easing: 'linear',
                    translateX: ((d.lst_RFIDPosition[i].Coord.X)*559)/1150,
                    translateY: 267-(((d.lst_RFIDPosition[i].Coord.Y)*267)/400),
                    opacity: 1
                });
                break;
            case "00000000001B2A4601001994" :
                let animeSel= anime({
                    targets: '.sel',
                    easing: 'linear',
                    translateX: ((d.lst_RFIDPosition[i].Coord.X)*559)/1150,
                    translateY: 267-(((d.lst_RFIDPosition[i].Coord.Y)*267)/400),
                    opacity: 1
                });
                break;
            default:
                break;
        }
    }
 
};