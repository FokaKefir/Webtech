#!/usr/bin/env node

import { promises as fs } from "fs";
import { readFile, appendFile, readdir, } from "fs/promises";
import { join, resolve } from "path";


const [dir] = process.argv.slice(2);


function listDir(dirname) {
    fs.readdir(resolve(dirname))
        .then(files => {
            files.forEach(filename => {
                console.log(filename)
            });
        })
        .catch(err => {
            console.error(err.message);
        });
}

listDir(dir)