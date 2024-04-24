//ES6 modulokban nincs __dirname, __filename
//az elérés az alábbiak szerint lehetséges:

import { dirname, basename } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const __filename = basename(fileURLToPath(import.meta.url));

//az import.meta tulajdonságon keresztül egy modul különböző tulajdonságai érhetőek el
// az url tulajdonság a modult tartalmazó fájl teljes elérési útja, az út előtt
// a file:// elérési protokollal

console.log(__dirname);
console.log(__filename);

