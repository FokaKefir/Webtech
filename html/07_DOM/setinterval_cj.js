//leállítás-indítás clojure megoldással

//egy ciklust csinál végig, a setInterval által
//beállított időzítő fogja hívogatni
let pislogo = function () {
  let e = document.getElementById("randp");
  if (!e) {
    return;
  }
  let a = Math.random();
  a = a.toFixed(4);
  e.innerHTML = a;
};

// a getPislogoRandom lefut a szkript betöltődése alatt, és visszaad egy függvényt
// ami bezárja a pislog változót
let pislogoRandom = (function getPislogoRandom() {
  let pislog = false;
  return function () {
    //ez a függvény rendelődik a pislogoRandom változóhoz
    if (pislog === false) {
      //nem pislog
      //a paraméterek: a függvény neve vagy kód
      //és az időzítés ms-ban
      pislog = setInterval(pislogo, 500);
    } else {
      //leállítani a clearInterval(id) -vel lehet
      clearInterval(pislog);
      pislog = false;
    }
  };
})();
