#!/usr/bin/env node
import { readdir } from 'fs';

import { join, resolve } from "path";

const [dir] = process.argv.slice(2);


function listDir(dirname) {
    readdir(dirname, (err, files) => {
        if (err) {
            console.error(err.message);
            return;
        } 
        //console.log(files);
        files.forEach(filename => {
            console.log(filename)
        });
    });
}

listDir(dir)