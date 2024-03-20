
"use strict";
//greedy (mohó) és lazy (lusta) illesztések

let s = 'fIrst6 "sEcond67" thIrd44 "fourth7"';

//vegyük ki csak az idézőjelben található szavakat
//a szavakban lehet bármi, nem csak kisbetű 

let re1 = /".+"/g;      // az utolsó "-nél fog megállni, nem azt végzi amit kellene
let re2 = /"[^"]+"/g;   //ez jó 
let re3 = /".*?"/g;     //ez jobb, az illesztés lusta, így megáll amikor
                        //megjelenik az első "

console.log("re1:",s.match(re1));                        
console.log("re2:",s.match(re2));                        
console.log("re3:",s.match(re3));                        
                        
//lusta kvantorok:
//  *?
//  +?
