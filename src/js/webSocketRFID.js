const socketRFID = new WebSocket('ws://172.24.24.2:6094');

socketRFID.onmessage = function (event) {
    let d = JSON.parse(event.data);
    for (let i = 0; i<d.lst_RFIDPosition.length; i++) {
        if(tabObjetRFID.indexOf(d.lst_RFIDPosition[i].TagName) > -1) {
            document.getElementById(d.lst_RFIDPosition[i].TagName).style.opacity = '1';
            anime({
                targets: '#'+d.lst_RFIDPosition[i].TagName,
                easing: 'linear',
                translateX: ((d.lst_RFIDPosition[i].Coord.X)*559)/1150,
                translateY: 267-(((d.lst_RFIDPosition[i].Coord.Y)*267)/400)
            });
        }
    }
};