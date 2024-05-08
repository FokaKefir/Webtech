#!/usr/bin/env node

//láncban olvasás példa a fs/promises modul readFile() függvényével
//async/await szerkezetekkel

import { readFile } from "fs/promises";
import { join } from "path";

//a fájlok helye munkakönyvtár alatt
const filesDir = "files";

//használati eset ugyanaz mint callback1.mjs-ben
// elso.txt-ben van az a fájlnév amit másodiknak kell beolvasni
//    ebben van az a fájlnév amit harmadiknak kell beolvasni
//    ebben van az a fájlnév amit negyediknek kell beolvasni
//    itt van a kincs

async function doer(fileName) {
  try {
    let txt = await readFile(join(filesDir, fileName), "utf-8");
    console.log("Második olvasás: " + txt);

    txt = await readFile(join(filesDir, txt), "utf-8");
    console.log("Harmadik olvasás: " + txt);

    txt = await readFile(join(filesDir, txt), "utf-8");
    console.log("Negyedik olvasás: " + txt);

    txt = await readFile(join(filesDir, txt), "utf-8");
    console.log("Eredmény: " + txt);
  } catch (err) {
    console.error(err.message);
  }
}

doer("elso.txt");

console.log("hívás utáni kód");
