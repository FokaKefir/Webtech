#!/usr/bin/env node

import { promises as fs } from "fs";
import { readFile, appendFile, readdir, } from "fs/promises";
import { join, resolve } from "path";

//const param = process.argv.slice(2);
const [destinationFile, sourceFile] = process.argv.slice(2);

function appendTextFromFile(source, destination) {
    const sourcePath = resolve(source);
    const destinationPath = resolve(destination);

    fs.readFile(sourcePath, 'utf-8') 
        .then(data => {
            return fs.appendFile(destinationPath, data, 'utf-8');
        })
        .then(() => {
            console.log(`A szoveg sikeresen hozzafuzve a ${destination} file-hoz`);
        })
        .catch(err => {
            console.error(`Hiba tortent a file-kereses soran: ${err.message}`);
        })
}

appendTextFromFile(sourceFile, destinationFile);