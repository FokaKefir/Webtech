//ide jön a feladat megoldása
//a következő rész feladatokra bontsuk le:

//1. eseménykezelők - átveszik az adatokat
//2. feldolgozó függvény, kiszámolják a kért statisztikákat
//3. kiíró függvények: a kiszámolt értékeket a kimenetre írják

//kiírja a statisztikákat
function kiir(res, szoszam) {
  statout = ""

  for (let i = 0; i < Math.min(res.gyak.length, szoszam); i++) {
    const element = res.gyak[i];
    statout += `${element[0]} (${element[1]}),\n`
  }

  $("#gyak").innerHTML = statout
}

//kiszámolja a statisztikákat
function stat(text, stop) {
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
  res.szavakSzama = szavak.length;
  res.szavak = szavak
  console.log(res, szavak);

  let szavakDict = {};
  for (const szo of szavak) {
    if (szo in szavakDict) {
      szavakDict[szo]++;
    } else if (stop === false || (stop === true && !(szo in hu_stop))) {
      szavakDict[szo] = 1;
    }
  }

  res.gyak = Object.entries(szavakDict)
  res.gyak.sort((a, b) => b[1] - a[1]);

  return res;
}

//eseménykezelő
function calcStat(e) {
  let text = $("#message").value;
  let stop = false;
  if ($("#stopcheck").checked) {
    stop = true;
  }

  let res = stat(text, stop);
  let statlist = $("#statlist")
  statlist.innerHTML = `<li> szavak: ${res.szavakSzama} </li>` + 
    `<li> karakterek: ${res.kar} </li>` + 
    `<li> sorok: ${res.sorok} </li>`

  let szoszam = Number.parseInt($("#szoszam").value)

  kiir(res, szoszam)
}

//
window.onload = function () {
  //eseménykezelőt lehet tenni:
  // submit : submit gombra
  // keyup vagy change a textarea-ra, ekkor változik a szöveg
  // change: a stopszó jelölőnégyzetre
  $("#stat").addEventListener("click", calcStat, false);
  $("#message").addEventListener("keyup", calcStat, false);
};
