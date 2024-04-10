//a submit eseményre hívódik meg
function checkForm(e) {
    if (!this.tel.validity.valid) {
        errmsg.innerHTML = "Kérjük írjon be egy telefonszámot";
        e.preventDefault();
        return false;
    }
    return true;
}

//írás közben, ha hiba után helyes telefonszám
//lesz beírva, a helyes alak megjelenésekor
//töröljük a hibaüzenetet
function inputTel(e) {

    if (tel.validity.valid) {
        //előző hibakiírás törlése ha volt ilyen
        errmsg.innerHTML = "";
    }
}

//eseménykezelők beállítása
window.onload = function () {
    const form = $("#elso");  //a window objektumon jönnek létre, globálisak
    const tel = $("#tel");
    const errmsg = $("#errmsg");

    form.addEventListener('submit',checkForm,false);
    tel.addEventListener('input',inputTel,false);//helyette lehet még a 
             // keyup, change eseményeket is használni
}
