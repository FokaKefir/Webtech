#!/usr/bin/env node

//hibakezelés láncolt Promise hívások esetében
//elég egy helyen kifogni a hibákat a catch ággal

import fsP from 'fs/promises';
import { join } from 'path';

const filesDir = 'files';
const fileName = 'elso.txt'; //indító fájl

//használati eset ugyanaz mint callback1.mjs-ben
// elso.txt-ben van az a fájlnév amit másodiknak kell beolvasni
//    ebben van az a fájlnév amit harmadiknak kell beolvasni
//    ebben van az a fájlnév amit negyediknek kell beolvasni
//    itt van a kincs

//elég ha egyetlen helyen kifogjuk a Promise hibát
//bármelyik láncolt then-ben megjelenő hiba 
//megszakítja a láncot és a catch ágra ugrik

fsP.readFile(join(filesDir,fileName),'utf-8')
.then (
  txt => { 
    console.log("Második olvasás: " + txt);
    return fsP.readFile(join(filesDir,txt),'utf-8');  
  }
)
.then (
  txt => {                  
    console.log("Második olvasás: " + txt);
    //ebben az ágban elrontjuk a fájl nevét
    txt = 'alma.txt';
    return fsP.readFile(join(filesDir,txt),'utf-8');
  }
)
.then (
  txt => { 
    console.log("Harmadik olvasás: " + txt);
    return fsP.readFile(join(filesDir,txt),'utf-8');
  }
).then (
  txt => console.log("Eredmény: " + txt)
).catch(
  err => {console.log(err.message)}
)

console.log("catch utáni kód");
