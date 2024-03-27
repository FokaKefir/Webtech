//doboz mozgató függvény
let setIntId = null; //setInterval Id tárolása
let clickNo = 0; //hányadik kattintásnál vagyunk

function runwin(e) {
  //ez lesz az eseménykezelő függvény
  console.log("click event");

  if (setIntId === null) {
    //ha nem fut a pass, elindítja

    clickNo = ++clickNo % 4; //hányadik click, 1,2,3,0,1,2,3,0,...
    console.log("clickNo", clickNo, "setIntId", setIntId);

    function pass() {
      //ezt a függvényt hívja a setInterval, ez mozgatja a belső dobozt
      const jump = 10; //mennyit ugorjon pixelben egy lépésben

      let div = e.target; //div elem referencia
      let cStyle = window.getComputedStyle(div);
      let left;
      switch (clickNo) {
        case 1:
          //ha balra mozog, a left tulajdonságot csökkentjük
          left = parseInt(cStyle.left) - jump;
          if (left <= 0) {
            left = 0; //elértük a külső doboz bal szélét
            clearInterval(setIntId); //leállíthatjuk
            setIntId = null;
          }
          div.style.left = left + "px"; //megváltozik a position left értéke, elmozdul
          //leállítás ha elértük a doboz oldalát
          break;
        case 2:
          clearInterval(setIntId);
          setIntId = null; //törölni és itt megoldani
          break;
        case 3:
          clearInterval(setIntId);
          setIntId = null; //törölni
          break;
        case 0:
          clearInterval(setIntId);
          setIntId = null; //törölni

          break;
        default:
          console.error("rossz click szám");
      }
    } //pass függvény vége

    console.log("setInterval");
    setIntId = setInterval(pass, 100); //indítás ha null a setIntId, ha növeljük az
    //időzítést, lassabban mozog, ha csökkentjük gyorsabban
  }
} //eseménykezelő vége

window.onload = function () {
  $("#masodik").addEventListener("click", moveBox, false);
};
