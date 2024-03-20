//leállítás-indítás külső globális változóval

let pislog = false; //a setInterval által visszaadott id

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

//ez a függvény állítja be a pislogást
//a bemeneti paraméter referencia a HTML elemre
//amelyről hívjuk a függvényt
let pislogoRandom = function (elem) {
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
