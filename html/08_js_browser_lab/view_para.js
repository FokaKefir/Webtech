var current = 0; //hányadik paragrafus van megjelenítve

//itt megoldani
function movePara(e) {
  console.log("movePara");

  let name = this.name; // meg fogja adni, melyik gomb, ez "next" vagy "prev"
  const bal = $("#bal");
  const para = Array.from(bal.getElementsByTagName("P"));
  if (para.length <= 1) return;
  const N = para.length;

  //itt folytatni
}

window.onload = function () {
  var f = $("#gombok");
  f.next.addEventListener("click", movePara, false); //mindkét gombra tehetjük ugyanazt
  f.prev.addEventListener("click", movePara, false); //vagy ezt törölhetjük, és írhatunk két külön függvényt
};
