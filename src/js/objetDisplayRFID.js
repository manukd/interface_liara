function printObjectRFID(cb, idElement) {
    if (cb.checked) {
        console.log(typeof idElement);
        tabObjetRFID.push(idElement);
        console.log(tabObjetRFID);
    } else {
        tabObjetRFID.unset(idElement);
        console.log(tabObjetRFID);
        document.getElementById(idElement).style.opacity = '0';
    }
}