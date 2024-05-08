#!/usr/bin/env node

//a Promise objektummal való kísérletezéshez az objektumnak van két
//osztály függvénye, amivel azonnal  ki lehet váltani a "settled" állapotot


//egy azonnal megoldott Promise jön vissza
const pres = Promise.resolve(1);
//egy visszautasított Promise tér vissza
const prej = Promise.reject(2);

pres.then(
  x => console.log(x) // 1 - ez fut le
).catch(
  e => console.log(e) 
)

prej.then(
  x => console.log(x) 
).catch(
  e => console.log(e) //2 - ez fut le 
)

console.log("Promise-ok utáni kód");