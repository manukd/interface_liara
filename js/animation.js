
let frigoOverture = anime({
    targets: '.porteFrigoAnime',
    rotate: {
        value:[-45,-135]
    },
    easing: 'linear',
    duration: 750,
    autoplay: false
});


let frigoFermeture = anime({
    targets: '.porteFrigoAnime',
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

let eauRobinetO = anime({
    targets: '.robinetBaque',
    fill: {
        value: ['#fff','#005cbf']
    },
    easing: 'easeInBack',
    duration: 1000,
    autoplay: false

});

let eauRobinetF = anime({
    targets: '.robinetBaque',
    fill: {
        value: ['#005cbf', '#fff']
    },
    easing: 'easeInQuart',
    duration: 200,
    autoplay: false

});

let portePlacardFrigoBasFO = anime({
    targets: '.portePlacardFrigoBas',
    rotate: {
        value:[0,-45]
    },
    easing: 'linear',
    duration: 750,
    autoplay: false
});


let portePlacardFrigoBasFF = anime({
    targets: '.portePlacardFrigoBas',
    rotate: {
        value:[-45,0]
    },
    easing: 'linear',
    duration: 750,
    autoplay: false
});


let portePlacardFrigoHautGFO = anime({
    targets: '.portePlacardFrigoHautGauche',
    rotate: {
        value:[0,-45]
    },
    easing: 'linear',
    duration: 750,
    autoplay: false
});


let portePlacardFrigoHautGFF = anime({
    targets: '.portePlacardFrigoHautGauche',
    rotate: {
        value:[-45,0]
    },
    easing: 'linear',
    duration: 750,
    autoplay: false
});

let portePlacardFrigoHautDFO = anime({
    targets: '.portePlacardFrigoHautDroit',
    rotate: {
        value:[0,45]
    },
    easing: 'linear',
    duration: 750,
    autoplay: false
});


let portePlacardFrigoHautDFF = anime({
    targets: '.portePlacardFrigoHautDroit',
    rotate: {
        value:[45,0]
    },
    easing: 'linear',
    duration: 750,
    autoplay: false
});

let portePlacardEvierGFO = anime({
    targets: '.portePlacardEvierBasGauche',
    rotate: {
        value:[0,45]
    },
    easing: 'linear',
    duration: 750,
    autoplay: false
});


let portePlacardEvierGFF = anime({
    targets: '.portePlacardEvierBasGauche',
    rotate: {
        value:[45,0]
    },
    easing: 'linear',
    duration: 750,
    autoplay: false
});

let portePlacardEvierDFO = anime({
    targets: '.portePlacardEvierBasDroit',
    rotate: {
        value:[0,-45]
    },
    easing: 'linear',
    duration: 750,
    autoplay: false
});


let portePlacardEvierDFF = anime({
    targets: '.portePlacardEvierBasDroit',
    rotate: {
        value:[-45,0]
    },
    easing: 'linear',
    duration: 750,
    autoplay: false
});

let portePlacardEvierHGGFO = anime({
    targets: '.portePlacardEvierHautGaucheGauche',
    rotate: {
        value:[0,45]
    },
    easing: 'linear',
    duration: 750,
    autoplay: false
});


let portePlacardEvierHGGFF = anime({
    targets: '.portePlacardEvierHautGaucheGauche',
    rotate: {
        value:[45,0]
    },
    easing: 'linear',
    duration: 750,
    autoplay: false
});

let portePlacardEvierHGDFO = anime({
    targets: '.portePlacardEvierHautGaucheDroit',
    rotate: {
        value:[0,-45]
    },
    easing: 'linear',
    duration: 750,
    autoplay: false
});


let portePlacardEvierHGDFF = anime({
    targets: '.portePlacardEvierHautGaucheDroit',
    rotate: {
        value:[-45,0]
    },
    easing: 'linear',
    duration: 750,
    autoplay: false
});

let portePlacardEvierHDGFO = anime({
    targets: '.portePlacardEvierHautDroitGauche',
    rotate: {
        value:[0,45]
    },
    easing: 'linear',
    duration: 750,
    autoplay: false
});


let portePlacardEvierHDGFF = anime({
    targets: '.portePlacardEvierHautDroitGauche',
    rotate: {
        value:[45,0]
    },
    easing: 'linear',
    duration: 750,
    autoplay: false
});

let portePlacardEvierHDDFO = anime({
    targets: '.portePlacardEvierHautDroitDroit',
    rotate: {
        value:[0,-45]
    },
    easing: 'linear',
    duration: 750,
    autoplay: false
});


let portePlacardEvierHDDFF = anime({
    targets: '.portePlacardEvierHautDroitDroit',
    rotate: {
        value:[-45,0]
    },
    easing: 'linear',
    duration: 750,
    autoplay: false
});

let tiroirAnimeDroitO = anime({
    targets: '.tiroirAnimeDroit',
    translateX: -10,
    easing: 'linear',
    duration: 750,
    autoplay: false
});


let tiroirAnimeDroitF = anime({
    targets: '.tiroirAnimeDroit',
    translateX: 0,
    easing: 'linear',
    duration: 750,
    autoplay: false
});


let tiroirAnimeGaucheO = anime({
    targets: '.tiroirAnimeGauche',
    translateX: -10,
    easing: 'linear',
    duration: 750,
    autoplay: false
});


let tiroirAnimeGaucheF = anime({
    targets: '.tiroirAnimeGauche',
    translateX: 0,
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

document.querySelector('.eauRobinetOB').onclick = eauRobinetO.restart;

document.querySelector('.eauRobinetFB').onclick = eauRobinetF.restart;

document.querySelector('.portePlacardFrigoBasBO').onclick = portePlacardFrigoBasFO.restart;

document.querySelector('.portePlacardFrigoBasBF').onclick = portePlacardFrigoBasFF.restart;

document.querySelector('.portePlacardFrigoHGBO').onclick = portePlacardFrigoHautGFO.restart;

document.querySelector('.portePlacardFrigoHGBF').onclick = portePlacardFrigoHautGFF.restart;

document.querySelector('.portePlacardFrigoHDBO').onclick = portePlacardFrigoHautDFO.restart;

document.querySelector('.portePlacardFrigoHDBF').onclick = portePlacardFrigoHautDFF.restart;

document.querySelector('.portePlacardEvierBGBO').onclick = portePlacardEvierGFO.restart;

document.querySelector('.portePlacardEvierBGBF').onclick = portePlacardEvierGFF.restart;

document.querySelector('.portePlacardEvierBDBO').onclick = portePlacardEvierDFO.restart;

document.querySelector('.portePlacardEvierBDBF').onclick = portePlacardEvierDFF.restart;

document.querySelector('.portePlacardEvierHGGBO').onclick = portePlacardEvierHGGFO.restart;

document.querySelector('.portePlacardEvierHGGBF').onclick = portePlacardEvierHGGFF.restart;

document.querySelector('.portePlacardEvierHGDBO').onclick = portePlacardEvierHGDFO.restart;

document.querySelector('.portePlacardEvierHGDBF').onclick = portePlacardEvierHGDFF.restart;

document.querySelector('.portePlacardEvierHDGBO').onclick = portePlacardEvierHDGFO.restart;

document.querySelector('.portePlacardEvierHDGBF').onclick = portePlacardEvierHDGFF.restart;

document.querySelector('.portePlacardEvierHDDBO').onclick = portePlacardEvierHDDFO.restart;

document.querySelector('.portePlacardEvierHDDBF').onclick = portePlacardEvierHDDFF.restart;

document.querySelector('.tiroirO').onclick = tiroirAnimeGaucheO.restart;

document.querySelector('.tiroirF').onclick = tiroirAnimeGaucheF.restart;

document.querySelector('.tiroir2O').onclick = tiroirAnimeDroitO.restart;

document.querySelector('.tiroir2F').onclick = tiroirAnimeDroitF.restart;