//időzítő függvények a böngészőben
// a használt setInterval() és clearInterval() függvények
// a window objektum függvényei

let run = null; //globális változó, ebben lesz a
//setInterval által visszaadott azonosító, ami egy égész szám

//ezt a függvényt fogjuk periódikusan  meghívni
function pislog() {
  let d = new Date(); //dátum objektum,  a pillanatnyi időt tartalmazza
  let s = d.getSeconds(); //a pillanatnyi szekundum

  let fullDate = d.getFullYear().toString() + "-" 
    + (d.getMonth() + 1).toString() + "-" 
    + d.getDate().toString() + " " 
    + d.getHours().toString() + ":"
    + d.getMinutes().toString() + ":"
    + d.getSeconds().toString();

  s = s.toString().padStart(2, " "); // a padStart feltölti a sztring elejét
  //egy adott hosszra egy karakterrel

  let e = document.getElementById("para"); // referencia a paragrafusra
  e.innerHTML = fullDate; //beírjuk a paragrafus szöveg tartalmába
}

//átállítja az időzítőt
function switchTimer() {
  if (run) {
    //ha fut
    clearInterval(run); //leállítás
    let e = $("#para");
    e.innerHTML = "Start!";
    run = null;
  } //ha nem fut
  else {
    run = setInterval(pislog, 1000); //indítás, 1 szekundum időzítés
    // a setInterval() függvény beállítja a ''-ben levő kód
    // 1000 milliszekundumonkénti meghívását
    // visszatérített értek egy 0-tól különböző azonosító
    // amit eltárolunk
    // ezt kell odaadni a clearInterval() függvénynek amikor
    // le akarjuk állítani az ismétlést

    //ha a pislog függvény további paraméterekkel rendelkezik, az
    //intervallum után fel lehet őket sorolni
  }
  return false;
}

window.onload = function () {
  $("#para").addEventListener("click", switchTimer, false);
};
