// Initialisation à faire au début de programmme.

let tabObjetRFID = [];

Array.prototype.unset = function (element) {
    let index = this.indexOf(element);
    if(index > -1) {
        this.splice(index, 1);
    }
    
};

$.getJSON("config.json", function (data) {
    let tmp = "";
    let html= '';
    for(let i = 0; i<data['RFID'].length; i++) {
        if (tmp !== data['RFID'][i]['classAffiche'] ) {
            if (tmp !== "") {
                html += '</fieldset></div>';
            }
            html += '<div class="col-md-2"><fieldset><legend>'+ data['RFID'][i]['classAffiche'] + '</legend>';
            tmp = data['RFID'][i]['classAffiche'];
        }
        html += '<div class="checkbox checkbox-success checkbox-inline"><input id="'+data['RFID'][i]['btnSoftwareID']+'" type="checkbox" onclick="printObjectRFID(this,'+"'"+data['RFID'][i]['id_laboratory']+"'"+')"><label for="'+data['RFID'][i]['btnSoftwareID']+'">'+data['RFID'][i]['id_software']+'</label></div>';
    }
    html += '</fieldset></div>';
    $('#tableCheckbox').html(html);
});

$.getJSON("config.json", function (data) {
    let svg;
    for(let i = 0; i<data['RFID'].length; i++) {
        svg = document.createElementNS("http://www.w3.org/2000/svg", "text");
        svg.setAttribute('id', data['RFID'][i]['id_laboratory']);
        svg.setAttribute('x', '0');
        svg.setAttribute('y', '0');
        svg.setAttribute('fill', 'red');
        svg.setAttribute('opacity', '0');
        svg.setAttribute('font-family', 'Comic Sans MS');
        svg.setAttribute('font-size', '7');
        svg.textContent = data['RFID'][i]['id_software'];
        $('#plan').append(svg);
    }
});




