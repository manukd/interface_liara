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
    duration: 750
});

let eauRobinetO = anime({
    targets: '.robinetBaque',
    fill: {
        value: ['#005cbf', '#A4A4A4']

    },
    easing: 'easeInBack',
    duration: 1000,

});

let eauRobinetF = anime({
    targets: '.robinetBaque',
    fill: {
        value: ['#A4A4A4','#005cbf']
    },
    easing: 'easeInQuart',
    duration: 200
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
    duration: 750
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
    duration: 750
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
    duration: 750
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
    duration: 750
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
    duration: 750
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
    duration: 750
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
    duration: 750
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
    duration: 750
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
    duration: 750
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
    duration: 750
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
    duration: 750
});
