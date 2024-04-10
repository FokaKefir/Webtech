//ellenőrzés függvény
function checkForm(e) {
    let msg = "";      //hibaüzenet inicializálása

    //a data objektum tartalmazza a reguláris kifejezéseket
    //és a hibaüzenetet minden form elemre

    //a "login" nevű tulajdonság értéke egy tömb, 
    //ennek 2 eleme az ellenőrző regex es a hibaüzenet

    let data =
        {
            "login": [/^[a-z0-9]{6,30}$/, " a login név mező"],
            "telszam": [/^0\d{3}(-\d{3}){2}$/, " a telefonszám mező"]
        };

    for (let i = 0; i < this.elements.length; i++) { //minden form elemre

        let elem = this.elements[i];
        let nev = elem.name;

        let RegMsg = data[nev];

        if (RegMsg != undefined) {  //csak azokat ellenőrizzük, amelyeknek van
            //regex - üzenet párja a data objektumban
            if (!RegMsg[0].test(elem.value)) {
                //hibaüzenet felépítése    
                if (!msg) { //ha az első
                    msg += ("Nincs jól kitöltve " + RegMsg[1]);
                } else {     //ha nem az első, csak hozzáfűzzük
                    msg += ", " + RegMsg[1];
                }
            }
        }
    }
    if (!msg) { //ha üres sztring
        return true;
    } else {
        $("#hiba").innerHTML = msg + "!";
        e.preventDefault(); //nem küldjük el az űrlapot
        return false;
    }
}

window.onload = function () {
    $("#elso").addEventListener("submit", checkForm, false);
}
