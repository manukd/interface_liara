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

document.querySelector('.porteConfO').onclick = porteSalleDeConfO.restart;

document.querySelector('.porteConfF').onclick = porteSalleDeConfF.restart;

document.querySelector('.porteExterieurOB').onclick = porteSalleExterieurO.restart;

document.querySelector('.porteExterieurFB').onclick = porteSalleExterieurF.restart;

document.querySelector('.porteSalleDeBainOB').onclick = porteSalleDeBainO.restart;

document.querySelector('.porteSalleDeBainFB').onclick = porteSalleDeBainF.restart;