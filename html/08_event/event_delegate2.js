//átváltja az örököltről pirosra
//egy elem színét és vissza
function changeColor(elem) {
  let c = elem.style.color;
  if (c != "red") {
    elem.style.color = "red";
  } else {
    elem.style.color = ""; //örökli a színt
  }
}
//a felső szintű elem eseménykezelője
function clickHandler(e) {
  let elem = e.target; //a target tulajdonság tartalmazza a cél elemet

  if (elem.tagName === "LI") {
    //ha LI elemre kattintottunk

    changeColor(elem); //váltás a cél elemen

    //meg kell állapítani hányadik LI elemen volt a kattintás
    //megnézzük, hogy a szelektálható-e mint i. gyerek az
    // UL elemben
    let i;
    for (i = 1; i <= 3; i++) {
      //az nth-child 1-től számoz
      //keresem az n. gyerek li elemet, pl.:  li:nth-child(1)
      if (elem.matches(`li:nth-child(${i})`)) {
        break;
      }
    }
    //a kiválasztott elem az i indexű
    console.log(`kiválasztott li:${i}`);

    //alsó lista elem
    let lista = document.getElementById("also_lista");
    //a LI elemek az alsó listából
    let li = lista.getElementsByTagName("li");
    //szín váltás az i. elemen
    changeColor(li[i - 1]);
  }
}
//csak a tartó elemen van click esemény kezelő
window.onload = function () {
  let d = document.getElementById("felso");
  d.addEventListener("click", clickHandler, false);
};
