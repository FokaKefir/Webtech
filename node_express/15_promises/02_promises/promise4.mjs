#!/usr/bin/env node
import fsP from 'fs/promises';
import { join } from 'path';

//példa a fs/promises Node modul readFile() függvényének használatára
//az fs modul függvényeinek egy része ebben Promises objektumba van burkolva
//tehát a fájlból kiolvasott adatokat Promise-ben adják vissza 

//a függvénynevek ugyanazok mint az fs modulban
//az importban adjunk más nevet mint fs, hogy világos legyen mit használunk

const filesDir = 'files';
const fileName = 'lipsum.txt';

const name = join (filesDir,fileName);

fsP.readFile(name,'utf-8')
.then(
  txt => console.log(txt.slice(0,17)+'...') //sikeres 
).catch(
  err => console.error(err.message) //hiba
)  
console.log('catch utáni kód');
