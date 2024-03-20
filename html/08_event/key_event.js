//az oldal figyeli az input elem billentyű eseményeit

//esemény adatait kiíró függvény
// e esemény objektum
// text az input mező értéke
function displayInfo(e, text) {
  let s = "adatok:";

  s += " billentyű: " + e.key;
  s += " which: " + e.which + " keyCode:" + e.keyCode; //a keyCode elavult tulajdonság
  s += " text:" + text;
  s += " shift/ctrl/alt: " + e.shiftKey + "/" + e.ctrlKey + "/" + e.altKey;

  console.log(s);
}

//billentyű lenyomás eseménykezelő
//mindhárom eseményre ide jön
function key(e) {
  const mezo = e.target;
  const text = mezo.value; //a mezo tulajdonság értékét figyelve
  //látjuk mikor jelenik meg benne e billentyűnek megfelelő
  //karakter kód

  console.log("esemény:" + e.type);

  switch (e.type) { 
    case "keydown":
      displayInfo(e, text);
      break;
    case "keypress":
      displayInfo(e, text);
      break;
    case "keyup":
      displayInfo(e, text);
      break;
    default:
      console.log("nem kezelt esemény" + e.type);
  }

  //az ENTER lenyomása elküldi az űrlapot
  //a keydown fázisban leállíthatjuk ezt
  if (e.keyCode == 13 && e.type == "keydown") {
    e.preventDefault();
  }
}

//ha submit esemény váltódik ki billentyű lenyomásra
function submit(e) {
  console.log("submit esemény típusa: " + e.type);
}

//inicializálás
window.onload = function () {
  const form = document.getElementById("teszt");
  form.mezo.addEventListener("keydown", key, false);
  form.mezo.addEventListener("keypress", key, false);
  form.mezo.addEventListener("keyup", key, false);

  form.mezo.addEventListener(
    "focus",
    (e) => (e.target.style.backgroundColor = "pink"),
    false
  );
  form.mezo.addEventListener(
    "blur",
    (e) => (e.target.style.backgroundColor = "white"),
    false
  );

  form.addEventListener("submit", submit, false);
};
