let lastEvent = null; // így megnézhető konzolban

//eseménykezelő függvény
//az "e" paraméter az esemény objektum
function kezelo(e) {
  lastEvent = e;
  alert("Eseménykezelő");
}

//leveszi az eseménykezelőt az első paragrafusról
function levesz(e) {
  let p = document.getElementById("para"); //paragrafus
  p.removeEventListener("click", kezelo, false);
  //átállítjuk a színét is
  p.style.color = "gray";
}

//beállítja az eseménykezelést
function init() {
  let p = document.getElementById("para"); //paragrafus referencia
  let p1 = document.getElementById("para1");

  //hozzárendeli az eseménykezelőt
  p.addEventListener("click", kezelo, false);
  p1.addEventListener("click", levesz, false);
}

//betöltés után a body load eseménye hívja meg a hozzárendelő függvényt
window.onload = init;
