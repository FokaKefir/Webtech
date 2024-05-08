#!/usr/bin/env node

////////////////////////
//    !!! HIBÁS KÓD
////////////////////////
//használati eset:
// elso.txt-ben van az a fájlnév amit másodiknak kell beolvasni
//    ebben van az a fájlnév amit harmadiknak kell beolvasni
//    ebben van az a fájlnév amit negyediknek kell beolvasni
//    itt van a kincs

//az alábbi kód hibás, mert elindulnak az olvasások és nem tudjuk
//milyen sorrendben futnak le
//amikor a második elindul az elsőnek még nincs meg az eredménye

import fs from 'fs';
import { join } from 'path'; 

const filesDir = 'files';
let fileName = 'elso.txt';

fs.readFile (join(filesDir,fileName), 'utf8', (err, txt)=>{
  if(err){
    console.error(err.message);
  }else{
    console.log('Első: ' + fileName + ' ' + txt);
    fileName = txt; //eredmény át kellene adódjon a második olvasásnak
  }
});

fs.readFile (join(filesDir,fileName), 'utf8', (err, txt)=>{
  if(err){
    console.error(err.message);
  }else{
    console.log('Második: ' + fileName + ' ' + txt);
    fileName = txt; //eredmény át kellene adódjon a harmadik olvasásnak
  }
});

fs.readFile (join(filesDir,fileName), 'utf8', (err, txt)=>{
  if(err){
    console.error(err.message);
  }else{
    console.log('Harmadik: ' + fileName + ' ' + txt);
    fileName = txt;
  }
});

fs.readFile (join(filesDir,fileName), 'utf8', (err, txt)=>{
  if(err){
    console.error(err.message);
  }else{
    console.log('Végső: ' + txt);
  }
});
