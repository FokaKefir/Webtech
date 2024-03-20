
//példa két eseménykezelővel, 
//az egyik hagyományos módon van hozzáadva (elso)
//a második DOM3 szerint (masodik)

// !!! az eseménykezelők hozzáadás sorrendjében futnak le

//első eseménykezelő
function elso() {
    alert("Első eseménykezelő");
}

function masodik(e) {
    alert("Második eseménykezelő");

    //első kattintás után levesszük a kezelőt
    var p = document.getElementById("para");
    p.removeEventListener("click", masodik, false);
    //az első eseménykezelőt nem lehet így levenni
    //mert az a tulajdonsághoz van kötve
}

//a body load eseményének hatására fut le
function init() {
    var p = document.getElementById("para");

    //hozzárendeli a második eseménykezelőt
    p.addEventListener("click", masodik, false);
}