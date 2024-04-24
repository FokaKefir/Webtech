#!/usr/bin/env node

//cat-hez hasonló program, használat
//  node jscat.js [ f1 f2 ... ]

// const fs = require("fs");
import * as fs from "fs";

const fileNames = process.argv.slice(2);

//ha vannak fájlnevek
if (fileNames.length != 0) {
  for (const file of fileNames) {
    //blokkoló hívás
    const data = fs.readFileSync(file, "utf8");
    process.stdout.write(data);

  } //for
} else {
  //ha nincs fájlnév, akkor a stdin-en hallgatózik
  process.stdin.on("data", (data) => {
    const txt = data.toString().trim();
    process.stdout.write(txt + "\n");
  });

  process.stdin.on("error", (error) => {
    console.error(error);
  });

  process.stdin.on("end", () => {
    console.log("bye");
  });
}

// console.log("Kód vége.");
