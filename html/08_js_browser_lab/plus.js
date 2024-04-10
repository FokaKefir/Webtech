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


function beallitHaettreszint(e) {
    e.target.style.backgroundColor = "pink";
}

function visszaallitHatterszint(e) {
    e.target.style.backgroundColor = "";
}

function inputFocus(e) {
    e.target.style.backgroundColor = "lightgray"
}

function enterMegnyomasa(e) {
    if (e.key == "Enter") {

    }
}

function inputBlur(e) {
    e.target.style.backgroundColor = "black";
    sz = Number(e.target.value);
    if (isNaN(sz)) {
        e.target.style.backgroundColor = "red";
    }
}

//inicializálás  
window.onload = function () {
    $("#gomb").addEventListener("click", gomb, false);

    let inputs = $$('input[type="text"]');
    inputs.forEach(input => {
        input.addEventListener("mouseover", beallitHaettreszint);
        input.addEventListener("mouseout", visszaallitHatterszint);

        input.addEventListener("focus", inputFocus);
        input.addEventListener("blur", inputBlur);

        input.addEventListener("keydown", enterMegnyomasa);
    });
}
