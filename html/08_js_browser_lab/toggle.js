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

//osztályok: zold, kek , dolt

//kikeressük az oldalon található összes paragrafust
const paras = document.querySelectorAll('p');

//feladatok:
// 1. minden páratlan számú paragrafusra tegyünk zold osztályt
// 2. kapcsoljuk (toggle) ki/be az összes paragrafuson a zold osztályt 
// 3. Amelyik paragrafuson van zold osztály, cseréljük le kek-re 
// 4. Készítsünk egy piros osztály, tegyük rá minden paragrafusra
// 5. Amelyiken van kek osztály, vegyük azt le. 

//használjuk az alábbi ciklus alakokat:

//bejárjuk a paragrafusokat: 
for (let elem of paras ){
  console.log(elem);
}

//bejárjuk indexekkel együtt
for (let [ix, elem] of paras.entries() ){
  console.log(`Index: ${ix}, elem:`,elem);
}