//minden HTML elemen a DOM-ban van egy classList
//nevű objektum, amelyik a a CSS osztályokat tartalmazza
//a következő függvényekkel:
// entries() - iterátort ad vissza [ix,class]
// add(class1, class2, ...)
// remove(class1, class2, ...)
// replace (class1, class2)
// toggle (class1, class2)
// contains (class1)
//lásd:
// https://developer.mozilla.org/en-US/docs/Web/API/Element/classList

//szelektor szerinti keresés
function $(selector, startElement = document) {
  return startElement.querySelector(selector);
}

//az oldal betöltésekor számított  szín

//visszaadja az elem kiszámolt color tulajdonságát
function getComputedProperty(elem, property) {
  //visszaadja az elemen levő összes kiszámolt CSS tulajdonságot
  const allStyles = window.getComputedStyle(elem);

  if (allStyles[property] !== undefined) {
    return allStyles[property];
  } else {
    console.log("Nincs ilyen tulajdonság:" + property);
    return null;
  }
}

window.onload = function () {
  //az elem kiszámított színe
  console.log(
    `Számított szín betöltéskor: ${getComputedProperty($("#para"), "color")}`
  );
  console.log(`Osztály sztring betöltéskor: ${$("#para").className}`);
  console.log(`A classList objektum elemei betöltéskor:`);
  for (const cls of $("#para").classList.entries()) {
    console.log(cls);
  }

  //műveletek
  //elmentjük az eredeti színt
  const orig = getComputedProperty($("#para"), "color");

  //leveszi a zold osztályt
  // $("#para").classList.remove("zold")

  //ráteszi a kék osztályt
  //$("#para").classList.add("kek")

  //direkt az elemre a narancs színt
  // $('#para').style.color="orange"

  //levesszük a style tulajdonságról a színt
  // $('#para').style.color=""
};
