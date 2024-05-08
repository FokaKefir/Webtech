#!/usr/bin/env node

//több fájlt beolvasó és összefűző szkript Promise használatával
//párhuzamosan olvasunk be több fájlt
//feltételezzük, hogy a fájlok nem nagyon nagyok
//és elférnek a memóriában

//a program a fájlokat csak files könyvtár alatt keresi
//a könyvtárnevet nem kell megadni

//példa futtatás:
//  node jscatP.mjs elso.txt masodik.txt harmadik.txt

import fsP from 'fs/promises';
import { join } from 'path';
import { basename } from 'path';

const filesDir = 'files';

//a Promises objektum több statikus függvénnyel rendelkezik amelyek alkalmasak
//több Promise-t visszatérítő függvény párhuzamos futtatására
// Promise.all() - több függvényt futtat párhuzamosan és visszaadja mindegyiknek az eredményét
//                 de csak akkor, ha mindegyik sikeresen futott (egyébként catch ág)
// Promise.allSettled() - több függvényt futtat párhuzamosan és visszaadja mindegyiknek az eredményét
//                 akkor is, ha vannak hibába futók
// Promise.any() - több függvényt futtat párhuzamosan és visszaadja az első hiba nélkül lefutott eredményét
//                 csak akkor fut catch ágba, ha mindegyik hibába fut
// Promise.race()- több függvényt futtat párhuzamosan és visszaadja az elsőnek az eredményét
//                 akkor is ha hibába futott   
 
//részletek itt: 
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise

//a Promise.all() statikus függvény végrehajt több Promise-t
//visszaadó függvény hívást párhuzamosan
//ezek valóban párhuzamos szálakon fognak futni
//a then akkor fut le ha minden Promise megállapodott
//ha egyetlen Promise-ben is hiba van, a catch fut le

// hívás:  Promise.all(f1, f2, f3, ...)
//   ahol f1, f2, f3 Promise objektumot ad vissza

//az eredményeket egy tömbben kapjuk meg a függvény hívások
//sorrendjében:
//         [txt1, txt2, txt3, ...]

//ebben lesznek a fájlnevek ha megadjuk parancssoron őket
const fileNames = process.argv.slice(2);

//ha vannak fájlnevek
if (fileNames.length != 0) {

    //előáll egy tömb, aminek egyes elemei függvények:
    //bemenet egy fájlnév, kimenet egy Promise amit a fsP.readFile() ad vissza:
    //     filename => fsP.readFile(join(filesDir,fileName),'utf-8')
    const list = fileNames.map (fileName =>fsP.readFile(join(filesDir,fileName),'utf-8'));

    const promise = Promise.all (list); // a függvények párhozamosan futnak

    promise.then (
      (texts) => {
        let textResult = '';
        for (const txt of texts){
          textResult = textResult.concat(txt);
        }
        process.stdout.write(textResult);
      }
    )
    .catch(
      err => console.log (err.message)
    )
}else{
  console.log("Használat: node " + basename(process.argv[1]) + " elso.txt masodik.txt harmadik.txt");
} 
