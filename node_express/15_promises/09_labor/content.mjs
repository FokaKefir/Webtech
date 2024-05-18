#!/usr/bin/env node
import { readdir, readFile, writeFile } from 'fs';

import { join, resolve } from "path";

const [dir, outfile] = process.argv.slice(2);

function contentOfDir(dirname) {
    readdir(dirname, (err, files) => {
        if (err) {
            console.error(err.message);
            return;
        } 
        console.log(`A ${dirname} konyvtar tartalma:`);
        files.forEach(filename => {
            readFile(resolve(dirname, filename), 'utf-8', (err, data) => {
                if (err) {
                    console.error(err.message);
                    return;
                }
                const lines = data.split('\n');
                console.log(`${filename}: ${lines[0]}`)
            });
        });
    });
}


function contentOfDirToFile(dirname, outfilename) {
    readdir(dirname, (err, files) => {
        if (err) {
            console.error(err.message);
            return;
        }

        let strout = `A ${dirname} konyvtar tartalma:\n`;
        let filesProcessed = 0;

        files.forEach((filename) => {
            readFile(resolve(dirname, filename), 'utf-8', (err, data) => {
                if (err) {
                    console.error(err.message);
                    return;
                }
                const lines = data.split('\n');
                strout += `${filename}: ${lines[0]}\n`;
                filesProcessed++;

                // Csak akkor írjuk ki a fájlt, ha az összes fájlt feldolgoztuk
                if (filesProcessed === files.length) {
                    writeFile(resolve(outfilename), strout, 'utf-8', (err) => {
                        if (err) {
                            console.error(err.message);
                            return;
                        }
                    });
                }
            });
        });
    });
}

if (!outfile) {
    contentOfDir(dir);
} else {
    contentOfDirToFile(dir, outfile);
}