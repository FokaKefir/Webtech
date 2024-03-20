"use strict";
//a String objektum replace() metódusának lehetőségei
//  hívás alakok: replace (regexp | string , string | function)

//helyettesítünk minden számjegy sorozatot egy szóközzel
let s1 = "szöveg12345szöveg123";
let s2 = s1.replace(/\d+/g, " "); //g: global, mindegyiket
console.log(" nem számjegyek:",s2);

//felcseréljük a szöveg végén és elején levő szavakat
//csak angol szövegre működik
let s3 = "this is the time";
// a *? lazy illesztés
//a helyettesítő sztringben a $1, $2, ... -vel utalunk vissza a zárójelekre
let s4 = s3.replace(/^([a-z]+)(.*?)([a-z]+)$/, '$3$2$1');
console.log("csere:",s4);

//helyettesítjük a szöveg minden szavának első betűjét
//kisről nagybetűre
//!!! a helyettesítő sztring lehet függvény !!!
let s5 = "this is the time";
let s6 = s5.replace(/\w+/g, 
    function (s) {
      return s.charAt(0).toUpperCase() + s.slice(1); 
    });
console.log("első betű:",s6);

//!!! trükkös szöveg feldolgozás 
//adjunk hozzá 1-et minden egész számhoz ami a szövegben van
let szamok = "piros 1 kék 2 zöld 3";

function adder (sz){
    let szam = Number(sz) + 1;
    return String(szam);
}

//a replace() a helyettesítés helyén tartalmazhat
//függvényt is: bemenet=találat, kimenet: új szöveg
let szamok1 = szamok.replace(/\d+/g, adder);
console.log("Számok sztring:", szamok); 
console.log("Számok módosítva:", szamok1); 

