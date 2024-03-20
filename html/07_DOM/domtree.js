//kis teszt függvény, kiírja a paragrafus tartalmát
function alertSzoveg() {
  
  const s = this.textContent;
  
  if (!s) {
    alert("Üres paragrafus");
  } else {
    alert("Paragrafus tartalma:" + s);
  }
}

window.onload = function () {
  const cim = document.getElementById("cim");
  cim.addEventListener("click", alertSzoveg, false);
}
