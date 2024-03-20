/* a matchAll() függvény alkalmazása

Vegyük ki egy HTML oldalból a teljes paragrafus elemeket 
és az elemekben levő szöveget külön-külön

a szöveg a text változóban van, amit a regexp8_html.js tartalmaz

!!! konzolra ír betöltéskor

*/

function doer() {
  //első megközelítés, kivesszük a paragrafusokat
  // /g global: minden találat, a matchAll megköveteli
  // /s single line: többsoros szöveg, a . illeszkedik az újsor karakterre is
  // +? lusta (lazy) kvantor
  let eredmeny = text.matchAll(/<p.+?\/p>/gs);
  console.log("Első feladat -------------------");
  for (let talalat of eredmeny) {
    console.log(talalat[0]); //ez első elemben a teljes regex találata van
  }

  //második példa, kivesszük a paragrafusokat és a bennük levő szöveget mint al-kifejezést
  //a paragrafus kezdő és befejező címkéit kiírjuk teljesen és
  //a köztük levő részt megjelöljük al-kifejezésként
  eredmeny = text.matchAll(/<p.+?>(.+?)<\/p>/gs);
  console.log("Második feladat ----------------");
  for (let talalat of eredmeny) {
    console.log("Paragrafus:");
    console.log(talalat[0]); //ez első elemben a teljes regex találata van
    console.log("A paragrafus tartalma:");
    console.log(talalat[1]); //ez második elemben az első () al-kifejezés van
  }
}

if (typeof window === undefined) {
  //Node
  doer();
} else {
  //browser
  window.onload = function () {
    doer();
  }
}
