#!/usr/bin/env node

import { access, readFile, appendFile, readdir, stat, } from "fs/promises";
import { join, resolve } from "path";

const tartalom = "./tartalom.txt";

const param = process.argv.slice(2);

try {
  if (param.length == 1) {
    const dir = resolve(param[0]); //teljes elérési út

    let st = await stat(dir); 

    if (st.isDirectory()) {
          const list = await readdir(dir);
          for (const fileName of list) {
            // console.log(fileName);
            const text = await readFile(join(dir, fileName), "utf-8");
            const lines = text.split("\n");
            await appendFile( tartalom,
              fileName + ": " + lines[0] + "\n",
              "utf-8"
            );
            // console.log(lines[0]);
          }
    }
  } else {
    console.log("Rossz paraméter szám");
  }
} catch (err) {
  console.log(err.message);
}
