//var current = 0; //hányadik paragrafus van megjelenítve

//itt megoldani
function movePara(e) {
  console.log("movePara");

  let name = this.name; // meg fogja adni, melyik gomb, ez "next" vagy "prev"
  const bal = $("#bal");
  const para = Array.from(bal.getElementsByTagName("P"));
  if (para.length <= 1) return;
  const N = para.length;

  current = 0;
  for (let i = 0; i < N; i++) {
    const element = para[i];
    if (element.style.display == 'block') {
      current = i;
      break;
    }
  }

  //itt folytatni
  para[current].style.display = "none";

  if (name == "next"){
    current = (current + 1) % N;
  } else if (name == "prev") {
    current = (current - 1 + N) % N;
  }
  para[current].style.display = 'block'
}

function editPara() {
  const para = $("p[contenteditable]");
  if (para) {
      para.removeAttribute("contenteditable");
      para.blur(); // Trigger blur to save changes
  } else {
      const visiblePara = $("p[style='display: block;']");
      if (visiblePara) {
          visiblePara.setAttribute("contenteditable", "true");
          visiblePara.focus();
      }
  }
}

function markPara() {
  const para = $("p[style='display: block;']");
  if (para) {
      para.classList.toggle("marked");
  }
}

window.onload = function () {
  var f = $("#gombok");
  f.next.addEventListener("click", movePara, false); //mindkét gombra tehetjük ugyanazt
  f.prev.addEventListener("click", movePara, false); //vagy ezt törölhetjük, és írhatunk két külön függvényt
  f.edit.addEventListener("click", editPara, false);
  f.mark.addEventListener("click", markPara, false);
  movePara();

};
