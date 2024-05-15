#!/usr/bin/env node
import { readFile, appendFile } from 'fs';

import { join, resolve } from "path";

//const param = process.argv.slice(2);
const [destinationFile, sourceFile] = process.argv.slice(2);

function appendTextFromFile(source, destination) {
    readFile(resolve(source), 'utf-8', (err, data) => {
        if (err) {
            console.error(`Hiba tortent a ${source} file olvasasa kozben ${err.message}`);
            return;
        }

        appendFile(resolve(destination), data, 'utf-8', (err) => {
            if (err) {
                console.error(`Hiba tortnet a ${destination} file-hoz valo hozzafuzes kozben: ${err.message}`);
                return;
            }          
            console.log(`A szoveg sikeresen hozzafuzve a ${destination} file-hoz`);  
        });
    });
}

appendTextFromFile(sourceFile, destinationFile);
