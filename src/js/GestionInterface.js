function twPleinEcran(_element) {
    let monElement = _element||document.documentElement;
    if (document.webkitFullscreenEnabled) {
        if (!document.webkitFullscreenElement) {
            monElement.webkitRequestFullscreen();
        } else {
            document.webkitExitFullscreen();
        }
    }
}

$("#bouton_web_portes").bind("click", function () {
    changerWebsocketPortes();
});

$("#bouton_web_objets").bind("click", function () {
    changerWebsocketObjets();
});

$("#run").bind("click", function () {
    alertify.confirm("Confirmation","Confimez vous avoir rentré des adresses de websocket valides et que la disposition des portes dans LIARA est identique à la maquette ci-dessus, si ce n'est pas le cas veuillez cliquer sur cancel", function () {
        websocketPortesTurnOn();
        websocketObjetsTurnOn();
        $("#stop").css("visibility","visible");
        $("#run").css("visibility","hidden");
        $("#boutons_websockets").css("visibility","hidden");
    }, function() {
        // user clicked "cancel"
    });
});

$("#stop").bind("click", function () {
    websocketPortesTurnOff();
    websocketObjetsTurnOff();
    $("#stop").css("visibility","hidden");
    $("#run").css("visibility","visible");
    $("#boutons_websockets").css("visibility","visible");
});

$("#select_all").change(function(){  //"select all" change
    $(".checkbox_rfid").prop('checked', $(this).prop("checked")).change(); //change all ".checkbox" checked status
});