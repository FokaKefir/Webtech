
//a függvény mindkét rádió gombot kiszolgálja
function valtozas(e) {
  //a this a megkattintott gombra referencia
  if (
    (this.value == "F" && this.checked) ||
    (this.value == "N" && !this.checked)
  ) {
    //férfi: //ha Az F gomb kiválasztva vagy N nem kiválasztva
    this.form.leanykori_nev.disabled = true;
    this.form.leanykori_nev.value = ""; //ha előzőleg kitöltötte
  } else {
    //nő
    this.form.leanykori_nev.disabled = false;
  }
}

//ellenőrzi, hogy helyes a kitöltés
function ellenoriz(e) {
  let error = []; // hibatömb
  let ures = /^\s*$/; //üres vagy csak elválasztó karaktereket tartalmazó sztring
  //
  //a this az űrlapra mutat
  if (ures.test(this.nev.value)) {
    //név ellenőrzés, nem lehet csak elválasztókból
    error.push("Nincs kitöltve a név mező");
  }

  if (this.nem[0].checked && ures.test(this.leanykori_nev.value)) {
    error.push(" ha Ön nő, töltse ki a leánykori név mezőt is");
  }

  //a hiba szöveg az id="error" elem tartalmába kerül
  if (error.length != 0) {
    $("#error").innerHTML = error.join(",");
    e.preventDefault(); //nem küldhető az űrlap
  }
}

//eseménykezelők beállítása
window.onload = function () {
  //2 elemű HTMLElements tömb a kiválasztás eredménye
  //a két rádió gomb
  let r = document.getElementsByName("nem");

  //mindkettőre ugyanazt a kezelőt tesszük
  r[0].addEventListener("change", valtozas, true);
  r[1].addEventListener("change", valtozas, true);

  //elküldés előtti ellenőrzés
  $("#adatok").addEventListener("submit", ellenoriz, true);
};
