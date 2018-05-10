
let motionPath = anime({
    targets: '.cls-20',
    rotate: {
        value:[-45,-135]
    },
    easing: 'linear',
    duration: 750,
    autoplay: false
});

document.querySelector('.frigoAnime').onclick = motionPath.restart;