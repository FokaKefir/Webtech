//példák a path modul használatára

import * as path from "node:path"
import * as os from "node:os"

const wDir = process.cwd(); //munkakönyvtár
const home = os.homedir; //saját könyvtár

const hely = '../module/commonjs/calc.js';
const f = path.basename(hely); // calc.js
const d = path.dirname(hely); // ../module/commonjs
const t = path.extname(hely); // .js 

const hely1 = path.join('..','module','common','calc.js'); //'../module/common/calc.js'

const ok = path.normalize('module/commonjs/../ecma-js'); //'module/ecma-js'
const ok1 = path.normalize('module/./commonjs/'); //'module/commonjs'

const absPath = path.resolve('fontos.js'); //teljes elérési út a fájlrendszerben 
