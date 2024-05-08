#!/usr/bin/env node
import fs from "fs";
import { join } from "path";

//használati eset:
// elso.txt-ben van az a fájlnév amit másodiknak kell beolvasni
//    ebben van az a fájlnév amit harmadiknak kell beolvasni
//    ebben van az a fájlnév amit negyediknek kell beolvasni
//    itt van a kincs

const filesDir = "files";
let fileName = "elso.txt"; //első fájl

//az alábbi kód helyes, mert az egyes olvasási lépések megvárják az előzőt

fs.readFile(join(filesDir, "elso.txt"), "utf8", (err, txt) => {
  if (err) {
    console.error(err.message);
  } else {
    //felhasználja az előző olvasás eredményét ...
    // txt-ben a második fájl neve
    console.log("Első olvasás: " + txt);
    fs.readFile(join(filesDir, txt), "utf8", (err, txt) => {
      if (err) {
        console.error(err.message);
      } else {
        // ... és így tovább minden esetben
        console.log("Második olvasás: " + txt);
        fs.readFile(join(filesDir, txt), "utf8", (err, txt) => {
          if (err) {
            console.error(err.message);
          } else {
            // ... és így tovább minden esetben
            console.log("Harmadik olvasás: " + txt);
            fs.readFile(join(filesDir, txt), "utf-8", (err, txt) => {
              if (err) {
                console.error(err.message);
              } else {
                // ... és így tovább minden esetben
                console.log("Eredmény: " + txt);
              }
            });
          }
        });
      }
    });
  }
});
