const socketRFID = new WebSocket('ws://172.24.24.2:6094');

socketRFID.onmessage = function (event) {
    let d = JSON.parse(event.data);
    console.log(d);
    for (let i = 0; i < d.lst_RFIDPosition.length; i++) {
        switch (d.lst_RFIDPosition[i].ID) {
            case "00000000001B2A4601001838" :
                let animeTasse1= anime({
                    targets: '.tasse1',
                    easing: 'linear',
                    translateX: ((d.lst_RFIDPosition[i].Coord.X)*559)/1150,
                    translateY: 267-(((d.lst_RFIDPosition[i].Coord.Y)*267)/400),
                    opacity: 1
                });
                break;
            case "00000000001B2A4601001969" :
                let animeTasse2= anime({
                    targets: '.tasse2',
                    easing: 'linear',
                    translateX: ((d.lst_RFIDPosition[i].Coord.X)*559)/1150,
                    translateY: 267-(((d.lst_RFIDPosition[i].Coord.Y)*267)/400),
                    opacity: 1
                });
                break;
            case "00000000001B2A4601001842" :
                let animeTasse3= anime({
                    targets: '.tasse3',
                    easing: 'linear',
                    translateX: ((d.lst_RFIDPosition[i].Coord.X)*559)/1150,
                    translateY: 267-(((d.lst_RFIDPosition[i].Coord.Y)*267)/400),
                    opacity: 1
                });
                break;
            case "00000000001B2A4601001839" :
                let animeTasse4= anime({
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
            case "00000000001B2A4601001995" :
                let animeBouilloir= anime({
                    targets: '.bouilloir',
                    easing: 'linear',
                    translateX: ((d.lst_RFIDPosition[i].Coord.X)*559)/1150,
                    translateY: 267-(((d.lst_RFIDPosition[i].Coord.Y)*267)/400),
                    opacity: 1
                });
                break;
            case "00000000001B2A4601001987" :
                let animeChaudron= anime({
                    targets: '.chaudron',
                    easing: 'linear',
                    translateX: ((d.lst_RFIDPosition[i].Coord.X)*559)/1150,
                    translateY: 267-(((d.lst_RFIDPosition[i].Coord.Y)*267)/400),
                    opacity: 1
                });
                break;
            case "00000000001B2A4601001989" :
                let animeLait= anime({
                    targets: '.lait',
                    easing: 'linear',
                    translateX: ((d.lst_RFIDPosition[i].Coord.X)*559)/1150,
                    translateY: 267-(((d.lst_RFIDPosition[i].Coord.Y)*267)/400),
                    opacity: 1
                });
                break;
            case "00000000001B2A4601001991" :
                let animeSucre= anime({
                    targets: '.sucre',
                    easing: 'linear',
                    translateX: ((d.lst_RFIDPosition[i].Coord.X)*559)/1150,
                    translateY: 267-(((d.lst_RFIDPosition[i].Coord.Y)*267)/400),
                    opacity: 1
                });
                break;
            case "00000000001B2A4601001966" :
                let animeBol1= anime({
                    targets: '.bol1',
                    easing: 'linear',
                    translateX: ((d.lst_RFIDPosition[i].Coord.X)*559)/1150,
                    translateY: 267-(((d.lst_RFIDPosition[i].Coord.Y)*267)/400),
                    opacity: 1
                });
                break;
            case "00000000001B2A4601001844" :
                let animeBol2= anime({
                    targets: '.bol2',
                    easing: 'linear',
                    translateX: ((d.lst_RFIDPosition[i].Coord.X)*559)/1150,
                    translateY: 267-(((d.lst_RFIDPosition[i].Coord.Y)*267)/400),
                    opacity: 1
                });
                break;
            case "00000000001B2A4601001964" :
                let animeBol3= anime({
                    targets: '.bol3',
                    easing: 'linear',
                    translateX: ((d.lst_RFIDPosition[i].Coord.X)*559)/1150,
                    translateY: 267-(((d.lst_RFIDPosition[i].Coord.Y)*267)/400),
                    opacity: 1
                });
                break;
            case "00000000001B2A4601001963" :
                let animeBol4= anime({
                    targets: '.bol4',
                    easing: 'linear',
                    translateX: ((d.lst_RFIDPosition[i].Coord.X)*559)/1150,
                    translateY: 267-(((d.lst_RFIDPosition[i].Coord.Y)*267)/400),
                    opacity: 1
                });
                break;
            case "00000000001B2A4601001976" :
                let animeSassiete1= anime({
                    targets: '.sAssiete1',
                    easing: 'linear',
                    translateX: ((d.lst_RFIDPosition[i].Coord.X)*559)/1150,
                    translateY: 267-(((d.lst_RFIDPosition[i].Coord.Y)*267)/400),
                    opacity: 1
                });
                break;
            case "00000000001B2A4601001970" :
                let animeSassiete2= anime({
                    targets: '.sAssiete2',
                    easing: 'linear',
                    translateX: ((d.lst_RFIDPosition[i].Coord.X)*559)/1150,
                    translateY: 267-(((d.lst_RFIDPosition[i].Coord.Y)*267)/400),
                    opacity: 1
                });
                break;
            case "00000000001B2A4601001972" :
                let animeSassiete3= anime({
                    targets: '.sAssiete3',
                    easing: 'linear',
                    translateX: ((d.lst_RFIDPosition[i].Coord.X)*559)/1150,
                    translateY: 267-(((d.lst_RFIDPosition[i].Coord.Y)*267)/400),
                    opacity: 1
                });
                break;
            case "00000000001B2A4601001975" :
                let animeSassiete4= anime({
                    targets: '.sAssiete4',
                    easing: 'linear',
                    translateX: ((d.lst_RFIDPosition[i].Coord.X)*559)/1150,
                    translateY: 267-(((d.lst_RFIDPosition[i].Coord.Y)*267)/400),
                    opacity: 1
                });
                break;
            case "00000000001B2A4601001981" :
                let animeAssiete1= anime({
                    targets: '.assiete1',
                    easing: 'linear',
                    translateX: ((d.lst_RFIDPosition[i].Coord.X)*559)/1150,
                    translateY: 267-(((d.lst_RFIDPosition[i].Coord.Y)*267)/400),
                    opacity: 1
                });
                break;
            case "00000000001B2A4601001979" :
                let animeAssiete2= anime({
                    targets: '.assiete2',
                    easing: 'linear',
                    translateX: ((d.lst_RFIDPosition[i].Coord.X)*559)/1150,
                    translateY: 267-(((d.lst_RFIDPosition[i].Coord.Y)*267)/400),
                    opacity: 1
                });
                break;
            case "00000000001B2A4601001984" :
                let animeAssiete3= anime({
                    targets: '.assiete3',
                    easing: 'linear',
                    translateX: ((d.lst_RFIDPosition[i].Coord.X)*559)/1150,
                    translateY: 267-(((d.lst_RFIDPosition[i].Coord.Y)*267)/400),
                    opacity: 1
                });
                break;
            case "00000000001B2A4601001983" :
                let animeAssiete4= anime({
                    targets: '.assiete4',
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