#!/usr/bin/env node

//középértéket számol a parancssori paraméterekből

//a process.argv:
// argv[0] - a node útvonala
// argv[1] - a szkript útvonala
// argv[2] ... paraméterek

if (process.argv.length===2){
  console.log('Nincs tennivaló');
  process.exit(1);
}

const szamok = process.argv.slice(2);

try {

let kozep = szamok.reduce((acc,x) => {
  let y = Number(x);
  if ( isNaN(y) ){
    throw new Error(`Az "${x}" paraméter nem szám`);
  }
  return acc + y;
},0) / szamok.length;
  
console.log(kozep);

} catch (err){
  console.log(err.message);
}