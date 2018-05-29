const socketRFID = new WebSocket('ws://172.24.24.2:6094');

socketRFID.onmessage = function (event) {
    let d = JSON.parse(event.data);
    for (let i = 0; i < d.lst_RFIDPosition.length; i++) {
        switch (d.lst_RFIDPosition[i].ID) {
            case "00000000001B2A4601001839" :
                let animeTasse= anime({
                    targets: '.tasse',
                    easing: 'linear',
                    translateX: ((d.lst_RFIDPosition[i].Coord.X)*559)/1150,
                    translateY: 267-(((d.lst_RFIDPosition[i].Coord.Y)*267)/400),
                    opacity: 1
                });
                break;
            case "00000000001B2A4601001994" :
                console.log(d.lst_RFIDPosition[i].Coord);
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