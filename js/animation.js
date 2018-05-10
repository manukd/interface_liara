
let frigoOverture = anime({
    targets: '.cls-20',
    rotate: {
        value:[-45,-135]
    },
    easing: 'linear',
    duration: 750,
    autoplay: false
});


let frigoFermeture = anime({
    targets: '.cls-20',
    rotate: {
        value:[-135,-45]
    },
    easing: 'linear',
    duration: 750,
    autoplay: false
});

let porteSalleDeConfO = anime({
    targets: '.porteSalleConf',
    rotate: {
        value:[0,-90]
    },
    easing: 'linear',
    duration: 750,
    autoplay: false

});

let porteSalleDeConfF = anime({
    targets: '.porteSalleConf',
    rotate: {
        value:[-90,0]
    },
    easing: 'linear',
    duration: 750,
    autoplay: false

});

let porteSalleExterieurO = anime({
    targets: '.porteExterieur',
    rotate: {
        value:[0,-90]
    },
    easing: 'linear',
    duration: 750,
    autoplay: false

});

let porteSalleExterieurF = anime({
    targets: '.porteExterieur',
    rotate: {
        value:[-90,0]
    },
    easing: 'linear',
    duration: 750,
    autoplay: false

});

let porteSalleDeBainO = anime({
    targets: '.porteSalleDeBain',
    rotate: {
        value:[0,-90]
    },
    easing: 'linear',
    duration: 750,
    autoplay: false

});

let porteSalleDeBainF = anime({
    targets: '.porteSalleDeBain',
    rotate: {
        value:[-90,0]
    },
    easing: 'linear',
    duration: 750,
    autoplay: false

});


document.querySelector('.frigoAnimeO').onclick = frigoOverture.restart;

document.querySelector('.frigoAnimeF').onclick = frigoFermeture.restart;

document.querySelector('.porteConfO').onclick = porteSalleDeConfO.restart;

document.querySelector('.porteConfF').onclick = porteSalleDeConfF.restart;

document.querySelector('.porteExterieurOB').onclick = porteSalleExterieurO.restart;

document.querySelector('.porteExterieurFB').onclick = porteSalleExterieurF.restart;

document.querySelector('.porteSalleDeBainOB').onclick = porteSalleDeBainO.restart;

document.querySelector('.porteSalleDeBainFB').onclick = porteSalleDeBainF.restart;

const socket = new WebSocket('ws://172.24.24.3:6091');

// socket.addEventListener('message', function (ev) {
//     var d = JSON.parse(ev.data);
//     console.log('X : ' + d.lst_RFIDPosition[1].Coord.X);
// })


let motionPath = anime({
    targets: '.cls-20',
    rotate: {
        value: [-45, -135]
    },
    easing: 'linear',
    duration: 750,
    autoplay: false
});


socket.addEventListener('message', function (ev) {
        var d = JSON.parse(ev.data);


        switch (d[0].ID) {
            // Porte du frigo
            case "4b00ae68-e1b1-4a57-9f77-ae03c2fe24ef" :
                if (d[0].DigitalValue) {
                    // Si la porte est ouverte on déclanche l'animation de l'ouverture
                    console.log('Ouvert ! ');
                    frigoOverture.start();
                }
                else
                {
                    // Sinon on déclanche l'animation de la fermeture
                    frigoFermeture.start();
                }
                break;
            // Porte salle de conf
            case "230d93b2-1e3d-409b-84e9-c34bfbbb4f4d" :
                if (d[0].DigitalValue) {
                    // Si la porte est ouverte on déclanche l'animation de l'ouverture
                    console.log('Ouvert ! ');
                    porteSalleDeConfO.restart();
                }
                else
                {
                    // Sinon on déclanche l'animation de la fermeture
                    porteSalleDeConfF.restart();
                }
                break;
            // Porte salle d'entrée
            case "0d491077-bd42-40ee-aaad-bb83432a71ae" :
                if (d[0].DigitalValue) {
                    // Si la porte est ouverte on déclanche l'animation de l'ouverture
                    console.log('Ouvert ! ');
                    porteSalleExterieurO.restart();
                }
                else
                {
                    // Sinon on déclanche l'animation de la fermeture
                    porteSalleExterieurF.restart();
                }
                break;
            // Porte salle de bain
            case "df4b18c1-867b-4955-894b-e5d5333ea568" :
                if (d[0].DigitalValue) {
                    // Si la porte est ouverte on déclanche l'animation de l'ouverture
                    console.log('Ouvert ! ');
                    porteSalleDeBainO.restart();
                }
                else
                {
                    // Sinon on déclanche l'animation de la fermeture
                    porteSalleDeBainF.restart();
                }
                break;










            //Température
            // Salle à manger
            case "82c86a3a-5e65-4fa3-bf12-d5abef156e32" :
                let VA_manger = d[0].AnalogValue;
                VA_manger = Number.parseFloat(VA_manger).toFixed(1);
                let entier_manger = Math.trunc(VA_manger);
                let decim_manger = (VA_manger - entier_manger)*10;
                decim_manger = Math.trunc(decim_manger);
                document.getElementById("temp").innerHTML = entier_manger + "<span>."+decim_manger+"</span><strong>&deg;</strong>";
                break;
            // Chambre
            case "886a9863-eae4-4402-96f6-b15db25ef6ab" :
                let VA_chambre = d[0].AnalogValue;
                VA = Number.parseFloat(VA_chambre).toFixed(1);
                let entier_chambre = Math.trunc(VA_chambre);
                let decim_chambre = (VA_chambre - entier_chambre)*10;
                decim_chambre = Math.trunc(decim_chambre);
                document.getElementById("temp1").innerHTML = entier_chambre + "<span>."+decim_chambre+"</span><strong>&deg;</strong>";
                break;
            // Salle de bain
            case "4c07e71a-0e4c-4629-968a-06d9c24b0b48" :
                let VA_sdb = d[0].AnalogValue;
                VA = Number.parseFloat(VA_sdb).toFixed(1);
                let entier_sdb = Math.trunc(VA_sdb);
                let decim_sdb = (VA_sdb - entier_sdb)*10;
                decim_sdb = Math.trunc(decim_sdb);
                document.getElementById("temp2").innerHTML = entier_sdb + "<span>."+decim_sdb+"</span><strong>&deg;</strong>";
                break;
        }
    }
);

//Température
//