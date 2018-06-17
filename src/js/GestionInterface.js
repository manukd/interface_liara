
document.querySelector('#bouton_web_portes').addEventListener('click', function () {
    changerWebsocketPortes();
});

document.querySelector('#bouton_web_objets').addEventListener('click', function () {
    changerWebsocketObjets();
});

document.querySelector('#run').addEventListener('click', function () {
    alertify.confirm("Confimez vous avoir rentré des adresses de websocket valides et que la disposition des portes dans LIARA est identique à la maquette ci-dessus, si ce n'est pas le cas veuillez cliquer sur cancel", function () {
        // user clicked "ok"
        setPathPortes(document.querySelector('#adresse_portes').textContent);
        setPathObjets(document.querySelector('#adresse_objets').textContent);
        websocketPortesTurnOn();
        websocketObjetsTurnOn();
    }, function() {
        // user clicked "cancel"
    });
});

document.querySelector('#stop').addEventListener('click', function () {
    websocketPortesTurnOff();
});