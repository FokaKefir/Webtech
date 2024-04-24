//ECMAScript (ES6) modul beillesztése

//ahhoz, hogy a NodeJS modulként futtassa az .js fájlokat:
//a package.json fájlban meg kell jelenni a 
//  type: "module" deklarációnak

// ha .mjs fájl típusa, ECMAScript modulként fut

//ha ez megvan, mint ebben a könyvtárban, akkor egyeszerűen:
// node calc.mjs

import * as stat from './stat.mjs';

const a = [1,2,3,4,5,6];

try{
  const atlag = stat.mean(...a);
  const szoras = stat.std(...a);
  console.log(`Átlag: ${atlag}, szórás: ${szoras}`);
}catch (err){
  console.log(err.message);
}
