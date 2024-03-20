//delegálás példa és classList használata
//ha a szövegrészek fölé visszük az egeret, eltűnik a szöveg
//és helyette egy magyarázat jelenik meg

//minden HTML elemen a DOM-ban van egy classList
//nevű objektum, amelyik a a CSS osztályokat tartalmazza
//a következő függvényekkel:
// entries() - iterátort ad vissza [ix,class] kis tömbökre
// add(class1, class2, ...)
// remove(class1, class2, ...)
// replace (class1, class2)
// toggle (class1, class2)
//lásd:
// https://developer.mozilla.org/en-US/docs/Web/API/Element/classList

//megjeleníti a magyarázat osztályt szöveg helyett
function magyarazat(e) {
  //cél elem
  let elem = e.target;
  //a következő HTML elem
  let next = elem.nextElementSibling;
  //ha nincs ilyen
  if (!next) {
    return;
  }
  //van rajta "magyarazat" osztály?
  if (!next.classList.contains("magyarazat")) {
    return;
  }
  //display tulajdonság átírása
  elem.style.display = "none";
  next.style.display = "inline";
}

//visszateszi a szöveget
function szoveg(e) {
  let elem = e.target;
  //az előtte levő elem
  let prev = elem.previousElementSibling;
  if (!prev) {
    return;
  }
  if (!prev.classList.contains("szoveg")) {
    return;
  }
  elem.style.display = "none";
  prev.style.display = "inline";
}

//az eseménykezelő a dokumentumon van, tehát bárhol
//lehet a "szoveg" és "magyarazat" osztályokat használni
window.onload = function () {
  document.addEventListener("mouseover", magyarazat, false);
  document.addEventListener("mouseout", szoveg, false);
};
