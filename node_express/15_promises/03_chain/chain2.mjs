#!/usr/bin/env node

//lánc olvasás példa a fs/promises modul readFile()
//függvényével

import fsP from 'fs/promises';
import { join } from 'path';

const filesDir = 'files';
const fileName = 'elso.txt'; //indító fájl

//használati eset ugyanaz mint callback1.mjs-ben
// elso.txt-ben van az a fájlnév amit másodiknak kell beolvasni
//    ebben van az a fájlnév amit harmadiknak kell beolvasni
//    ebben van az a fájlnév amit negyediknek kell beolvasni
//    itt van a kincs


fsP.readFile(join(filesDir,fileName),'utf-8')
.then (
  txt => { 
    console.log("Második olvasás: " + txt);
    return fsP.readFile(join(filesDir,txt),'utf-8');  //ha a then ágból Promise-t térítünk vissza
                            //akkor az megoldódik a következő láncolt then ágban
  },
)
.then (
  txt => {                  //ide az előző then ág által visszatérített Promise
                            //resolve() ága kerül 
    console.log("Harmadik olvasás: " + txt);
    // txt = txt + "1"; //elrontjuk a nevet, hogy itt hibázzon
    return fsP.readFile(join(filesDir,txt),'utf-8');
  },
)
.then (
  txt => { 
    console.log("Negyedik olvasás: " + txt);
    return fsP.readFile(join(filesDir,txt),'utf-8');
  },
).then (
  txt => console.log("Eredmény: " + txt),
).catch (
  err => console.error('Catch: ' + err.message)
)

console.log("Utolsó then utáni kód");
