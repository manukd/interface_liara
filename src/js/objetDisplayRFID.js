function printObjectRFID(cb, idElement) {
    if (cb.checked && tabObjetRFID.indexOf(idElement) === -1) {
        tabObjetRFID.push(idElement);
        if ($('.checkbox_rfid:checked').length === $('.checkbox_rfid').length){
            $("#select_all").prop('checked', true);
        }
    } else if(!cb.checked && tabObjetRFID.indexOf(idElement) !== -1) {
        tabObjetRFID.unset(idElement);
        console.log(tabObjetRFID);
        document.getElementById(idElement).style.opacity = '0';
        $("#select_all").prop('checked', false);
    }
}

function pushAllRFID()
{
    $.getJSON("config.json", function (data) {
        let objets = data['RFID'];
        for(let i = 0 ; i < objets.length ; i++)
        {
            tabObjetRFID.push(objets[i].id_laboratory);
        }
        console.log(tabObjetRFID);
    });
}

function unsetAllRFID()
{
    $.getJSON("config.json", function (data) {
        let objets = data['RFID'];
        for(let i = 0 ; i < objets.length ; i++)
        {
            tabObjetRFID.unset(objets[i].id_laboratory);
            document.getElementById(objets[i].id_laboratory).style.opacity = '0';
        }
        console.log(tabObjetRFID);
    });
}