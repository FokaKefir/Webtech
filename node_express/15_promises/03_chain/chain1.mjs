#!/usr/bin/env node

import fs from 'fs';
import { join } from 'path';

const filesDir = 'files';
const fileName = 'lipsum.txt';

//ugyanaz a függvény mint promises3.mjs-ben
//betölt egy fájlt aszinkron hívással
function loadFile (fileName){
  const name = join(filesDir, fileName);

  return new Promise ((resolve, reject)=>{
    fs.readFile(name,'utf-8', (err, txt)=>{
      if(err) {
        reject(err);
      }else{
        resolve(txt);
      }
    });
  });
}

//használati eset ugyanaz mint callback1.mjs-ben
// elso.txt-ben van az a fájlnév amit másodiknak kell beolvasni
//    ebben van az a fájlnév amit harmadiknak kell beolvasni
//    ebben van az a fájlnév amit negyediknek kell beolvasni
//    itt van a kincs

//hibakezelés e then ágak után:
//ha egy then ágban hiba keletkezik  catch-re fut

loadFile('elso.txt')
.then (
  txt => { 
    console.log("Második olvasás: " + txt);
    return loadFile (txt);  //ha a then ágból Promise-t térítünk vissza
                            //akkor az megoldódik a következő láncolt then ágban
  },
)
.then (
  txt => {                  //ide az előző then ág által visszatérített Promise
                            //resolve() ága kerül 
    console.log("Második olvasás: " + txt);
    return loadFile (txt);
  },
)
.then (
  txt => { 
    console.log("Harmadik olvasás: " + txt);
    return loadFile (txt);
  },
).then (
  txt => console.log("Eredmény: " + txt),
).catch (
  err => console.error(err.message)
)

console.log("Utolsó then utáni kód");
