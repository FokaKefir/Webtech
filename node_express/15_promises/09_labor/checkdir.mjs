#!/usr/bin/env node

import { readdir, stat } from "fs/promises";
import { join, resolve } from "path";

const param = process.argv.slice(2);

if (param.length == 1) {
  const dir = resolve(param[0]); //teljes elérési út
  try {
    let st = await stat(dir);

    if (st.isDirectory()) {
      console.log("A név könyvtár név");
    } else {
      console.log("Rossz paraméter szám");
    }
  } catch (err) {
    console.log(err.message);
  }
} else {
  console.log("Nincs paraméter");
}
