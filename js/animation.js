
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

