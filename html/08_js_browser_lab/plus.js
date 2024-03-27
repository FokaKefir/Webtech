//az oldal összead két számot gombnyomásra  

//számítás
function szamit(a, b) {
    return a + b;
}

//kiíró és formatáló függvény
function kiIr(s) {
    let p = $("#eredmeny");

    //ha szám, akkor két tizedessel
    if (typeof s === "number") {
        s = s.toFixed(2);
    }
    p.innerHTML = s;
}

//eseménykezelő
function gomb(e) { // e az eseményobjektum

    let form = this.form; //a this a button elemre mutat
                  //minden input elemen van egy form nevű referencia
                  //az őt tartalmazó űrlapra

    let sz1 = Number(form.szam1.value); // a két szám konvertálva
    let sz2 = Number(form.szam2.value);

    if (isNaN(sz1) || isNaN(sz2)) {
        kiIr("Az egyik bemenet nem szám!");
        return false;
    }

    let osszeg = szamit(sz1, sz2);
    kiIr(osszeg);
}

//inicializálás  
window.onload = function () {
    $("#gomb").addEventListener("click", gomb, false);
}
