#!/usr/bin/env node
import fsP from "fs/promises";
import { join } from "path";

//ES6 modulokban futtatható az await a modul legfelső szintjében
//a modul aszinkronná válik (a fő szál felfüggesztődik)

const filesDir = "files";
const fileName = "lipsum.txt";

const name = join(filesDir, fileName);

//egy késleltető függvény, hogy jobban érzékeljük 
//a modul futásának felfüggesztését
//ms milliszekundum után állapodik meg a Promise
//így ha await-el várunk, ennyi időre függesszük fel a modult
function delay(ms){
  return new Promise ((resolve, reject)=>{
    //ha a ms nem előjel nélküli egész szám
    //hiba:
    if (!Number.isInteger(ms) || ms < 0 ){  
      reject (new Error("ms nem egész szám"));
    }else{
      setTimeout(()=>resolve("ok"), ms);
    }  
  })
}

//több await esetében is elég egy try/catch blokk
try {
  //várunk a fájl beolvasására
  const txt = await fsP.readFile(name, "utf-8");
  //várunk 2 szekundumot
  await delay(2000);
  //kiírjuk a fájlt
  console.log(txt.slice(0, 17) + "...");
} catch (err) {
  console.error(err.message);
}

//a legvégén fog lefutni a 2 fő szálban használt await miatt
console.log("catch utáni kód");
