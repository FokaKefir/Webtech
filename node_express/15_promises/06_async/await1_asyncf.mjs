#!/usr/bin/env node
import fsP from "fs/promises";
import { join } from "path";

//példa async típusú függvényre, amelyben használható az await
//egyszerű fájl olvasás fs/promises.readFile()-al

//JavaScript szkriptekben - ha nem modulok - akkor az await kulcsszó 
//csak async függvényekben használhatóak

//itt vannak a fájlok
const filesDir = "files";

// az async függvények fontos jellemzői:

// 1. felfüggeszthetőek az await kulcsszóval amíg egy Promise megállapodik

// 2. mindig egy Promise objektumot adnak vissza, akkor is ha pl.
//    return 1 -et adunk meg (beburkolják Promise-ba)
//    - de visszatéríthetünk Promise-t is

// 3. ha hagyományos try/catch blokkot használunk benne az kifogja 
//    a Promise reject() paraméterébe kerülő hiba objektumot 

//beolvas egy fájlt a filesDir könyvtárból
async function getFile(fileName) {
  fileName = join(filesDir, fileName);
  try {
    //a függvény felfüggesztődik amíg txt megjön
    //és a Promise megállapodik
    let txt = await fsP.readFile(fileName, "utf-8");
    console.log(txt.slice(0, 17) + "...");
  } catch (err) {
    console.error(err.message);
  }

  console.log("catch utáni kód");
  return "ok"; //az ok-nak nincs jelentősége, nem fogjuk ki
               //ha nem írunk return-t akkor is visszatérít egy
               //undefined-ot burkoló Promise-t
               //az async függvény mindig Promise-t ad vissza
}

// getFile('lipsum.txt');          //1. getFile() await nélkül  
await getFile('lipsum.txt'); //2. getFile() await hívással (a kettő közül az egyik fusson)
                                //ha így hívjuk meg, akkor itt felfüggesztődik
                                //és a következő console.log() csak később fut le

console.log("hívás utáni kód");
                               
