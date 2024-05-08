#!/usr/bin/env node
import fs from 'fs';
import { join } from 'path';


const filesDir = 'files';
const fileName = 'lipsum.txt';

//életszerűbb példa, a readFile() aszinkron függvényt
//burkoljuk Promise objektumba

//az eset általános, bármilyen aszinkron függvényt ami callback
//jellegű függvényt ad vissza beburkolhatunk egy Promise-ba
//ha megkapjuk az eredményt vagy hibát

//betölt egy fájlt aszinkron hívással
//és Promise-ben futtatja
function loadFile (fileName){
  const name = join(filesDir, fileName);

  return new Promise ((resolve, reject)=>{
    fs.readFile(name,'utf-8', (err, data)=>{
      if(err) {
        reject(err);
      }else{
        resolve(data);
      }
    });
  });
}

//ha nem szükséges többször használni a létrehozott Promise
//objektumot rögtön hívhatjuk rajta a then, catch , finally függvényeket

loadFile('lipsum.txt')
.then(
  txt => console.log(txt.slice(0,17)+'...') //sikeres 
).catch(
  err => console.error(err.message) //hiba
)  
console.log('catch utáni kód');
