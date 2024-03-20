
"use strict";
//! csak böngészőben fut
//futtassuk a regexp4.html-ből böngészőben

//keresés többsoros szövegben
//böngészőben fut, szükséges a berci.js fáj is 

//az m módosító esetében a ^ és ! több sor esetében
//minden sor elejére és végére illeszkedik

//vegyük ki minden sorból az első szót a Berci szövegből (berci.js)
// g -global minden illesztést megkeres
// m multiline

//magyar szavakra be kell tenni a halmazba a magyar ékezetes karaktereket
//a sorok elején lehet két karakter: '- ' 
let re = /^(- )?[a-zA-ZáÁéÉíÍóÓúÚöÖüÜőŐűŰ]+/gm;
//vagy:
//let re = /^[a-zA-Z\u00C0-\u00FF]+/igm ;

let elsok = berci.match(re);
console.log(`Összesen ${elsok.length} sor van ami nem üres.`);

//átalakítja kisbetűssé az elemeket és levágja a szó eleji '- ' sorozatot
elsok.forEach((szo, ix, a) => a[ix] = szo.toLocaleLowerCase('hu-HU').replace(/^- /,""));

//vegyük ki az egyedieket
let egyediek = elsok.filter( (szo, ix, tomb) => tomb.indexOf(szo) === ix); //csak az első előfordulás kell                                 
console.log(`Egyedi szó ${egyediek.length} van`);

console.log(egyediek.sort((s1,s2) => s1.localeCompare(s2,'hu-HU')));