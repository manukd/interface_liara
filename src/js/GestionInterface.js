
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

$("#selectAll").bind("click",function() {
    let items = document.getElementsByClassName("checkbox_rfid");
    for (let i = 0; i < items.length; i++) {
        if (items[i].type == "checkbox")
            items[i].checked = true;
    }
    pushAllRFID();
});

$("#deselectAll").bind("click",function() {
    let items = document.getElementsByClassName("checkbox_rfid");
    for (let i = 0; i < items.length; i++) {
        if (items[i].type == "checkbox")
            items[i].checked = false;
    }
    unsetAllRFID()
});