// Initialisation à faire au début de programmme.

let tabObjetRFID = [];

Array.prototype.unset = function (element) {
    let index = this.indexOf(element);
    if(index > -1) {
        this.splice(index, 1);
    }
    
};

