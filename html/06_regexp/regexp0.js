
"use strict";
//egyszerű RegExp példák

//egész szám alakú-e a sztring?
let n = "33";
let n1 = "33,";
let egesz = /^\d+$/;

egesz.test(n) ?  console.log(n + " egész szám alakú") : console.log(n + " nem egész szám alakú" );
egesz.test(n1) ?  console.log(n1 + " egész szám alakú") : console.log(n1 + " nem egész szám alakú" );

//angol vezetéknév, egy személynévvel, első betűk nagy betűk
//!!! alap szinten A-Z csak az ASCII karaktereket sorolja fel
let name0 = "John Little";
let name1 = "Little Fat John";
let name2 = "Kovács Tünde";
let re = /^[A-Z][a-z]+\s+[A-Z][a-z]+$/;

if (re.test(name0)) { console.log("kétszavas angol személynév:",name0); } 
if (re.test(name1)) { console.log("kétszavas angol személynév:",name1); } 
if (re.test(name2)) { console.log("kétszavas angol személynév:",name2); } 

//match: visszaadja a találatokat egy tömbben
let s = "123 abc 412 def 789 pqr"
let szamok = s.match( /\d+/g );
console.log("egész számok:"+ szamok);

//search: keres
s = "egy kettő három négy 112 öt hat hét";
let ix = s.search(/\d+/);
if (ix != -1){
    console.log("Egész szám van az " + ix + ". indexnél");
}



