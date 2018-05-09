
let motionPath = anime({
    targets: '.cls-20',
    rotate: {
        value:[-45,-135]
    },
    translateX:{
        value:[0,-215],
    },
    translateY:[0,-245],
    easing: 'linear',
    duration: 2000,
    autoplay: false
});

document.querySelector('.frigoAnime').onclick = motionPath.restart;