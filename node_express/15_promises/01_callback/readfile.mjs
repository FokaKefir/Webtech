//az fs modul readFile() függvényeinek használata
//a beolvasandó fájlok a files könyvtárban vannak

import fs from 'fs';
import { join } from 'path'; 

const filesDir = 'files';
const fileName = 'lipsum.txt';

//szinkron olvasás, szöveget olvasunk így opcióként megadjuk az 
// {encoding: 'utf-8 } opciót rövidítve
//a végrehajtó Node szál áll amíg megjön az adat
console.log('sync indul');
try {
  const txt = fs.readFileSync (join(filesDir,fileName), 'utf-8');
  console.log(txt.slice(0,17)+'...');
}catch (err){
  console.log(err.message);
}  
console.log('sync vége');

//aszinkron olvasás, a végrehajtó szál fut tovább miután kiadja
//a readFile függvénynek a feladatot
// (err, data) = > {}  callback függvény
//ha megjön az adat, meghívódik a callback
console.log('aSync indul');
fs.readFile (join(filesDir,fileName), 'utf8', (err, txt)=>{
  if(err){
    console.error(err.message);
  }else{
    console.log(txt.slice(0,17)+'...');
  }
});
console.log('aSync vége');