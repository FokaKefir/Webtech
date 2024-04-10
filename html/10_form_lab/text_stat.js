//ide jön a feladat megoldása
//a következő rész feladatokra bontsuk le:

//1. eseménykezelők - átveszik az adatokat
//2. feldolgozó függvény, kiszámolják a kért statisztikákat
//3. kiíró függvények: a kiszámolt értékeket a kimenetre írják

//kiírja a statisztikákat
function kiir(res) {

}

//kiszámolja a statisztikákat
function stat(text) {
  let res = {
    kar: 0,
    sorok: 0,
    szavak: 0,
    gyak: [],
  };

  text = text.toLocaleLowerCase('hu-HU');

  res.kar = text.length;
  let sorok = text.match(/\n/g);
  if (!sorok) {
    res.sorok = 1;
  } else {
    res.sorok = sorok.length + 1;
  }

  let textc = text.replace(/[-.,:;'"„”!()\[{}\]]/g, " ");
  let szavak = textc.split(/\s+/);
  res.szavak = szavak.length;
  console.log(res, szavak);

  return gyak;
}

//eseménykezelő
function calcStat(e) {
  let text = $("#message").value;
  let res = stat(text);
}

//
window.onload = function () {
  //eseménykezelőt lehet tenni:
  // submit : submit gombra
  // keyup vagy change a textarea-ra, ekkor változik a szöveg
  // change: a stopszó jelölőnégyzetre
  $("#stat").addEventListener("click", calcStat, false);
};
