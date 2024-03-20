
"use strict";
//autó rendszám tesztelése űrlapban
function rendszam(elem) {
    //román autó rendszámtábla
    let re = /^([A-Z]{2}\d{2}[A-Z]{3}|B\d{2,3}[A-Z]{3})$/;

    let s = elem.mezo.value; //a mező értéke

    let okstr;
    if (re.test(s)) {     //.test() igaz ha illeszkedik
        okstr = "Rendszám rendben.";
    } else {
        okstr = "Hibás rendszám.";
    }

    let para = document.getElementById("ok"); //paragrafus referenciája
    para.innerHTML = okstr;  //paragrafus tartalma

    return false;
}