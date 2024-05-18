#!/usr/bin/env node
import { promises as fs } from "fs";
import { readFile, appendFile, readdir, } from "fs/promises";
import { join, resolve } from "path";

const [dir, outfile] = process.argv.slice(2);

function contentOfDir(dirname) {
    fs.readdir(resolve(dirname))
        .then(files => {
            console.log(`A ${dirname} konyvtar tartalma:`);
            files.forEach(async filename => {
                const data = await fs.readFile(resolve(dirname, filename), 'utf-8');
                const lines = data.split('\n');
                console.log(`${filename}: ${lines[0]}`)
            });
        })
        .catch(err => {
            console.error(err.message);
        });
}


async function contentOfDirToFile(dirname, outfilename) {
    try {
        const files = await fs.readdir(dirname);
        let strout = `A ${dirname} konyvtar tartalma:\n`;
        for (const filename of files) {
            try {
                const data = await fs.readFile(resolve(dirname, filename), 'utf-8');
                const lines = data.split('\n');
                strout += `${filename}: ${lines[0]}\n`;
            } catch (err) {
                console.error(err.message);
            }
        }
        await fs.writeFile(resolve(outfilename), strout, 'utf-8');
    } catch (err) {
        console.error(err.message);
    }
}

if (!outfile) {
    contentOfDir(dir);
} else {
    contentOfDirToFile(dir, outfile);
}