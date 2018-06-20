
document.querySelector('#bouton_web_portes').addEventListener('click', function () {
    changerWebsocketPortes();
});

document.querySelector('#bouton_web_objets').addEventListener('click', function () {
    changerWebsocketObjets();
});

document.querySelector('#run').addEventListener('click', function () {
    alertify.confirm("Confirmation","Confimez vous avoir rentré des adresses de websocket valides et que la disposition des portes dans LIARA est identique à la maquette ci-dessus, si ce n'est pas le cas veuillez cliquer sur cancel", function () {
        websocketPortesTurnOn();
        websocketObjetsTurnOn();
        $("#stop").css("visibility","visible");
    }, function() {
        // user clicked "cancel"
    });
});

document.querySelector('#stop').addEventListener('click', function () {
    websocketPortesTurnOff();
    websocketObjetsTurnOff();
    $("#stop").css("visibility","hidden");
});

$("#select_all").change(function(){  //"select all" change
    $(".checkbox_rfid").prop('checked', $(this).prop("checked")).change(); //change all ".checkbox" checked status
});