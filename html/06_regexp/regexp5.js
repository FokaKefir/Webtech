
"use strict";
//az exec() használata

//jobb helyette a matchAll() függvényt használni, ami viszonylag új!!!

//pontosvesszővel elválasztott mondatrészek kezelése
//példa az RegExp exec() függvényének ciklusban való használatára

//Megjegyzés: jelenleg ehhez a feladathoz egyszerűbben használható
//a sztringek matchAll() függvénye

let s = "első Második Harmadik ; negyedik Ötödik haTodik ;   hetedik nyolCadik kilencedik";
//                           ^21 ^25

console.log("Szöveg:"+s);

//vegyük ki a második csoport szót, rendezzük el benne a
//szavakat és írjuk ki őket kisbetűvel
//a csoportok közti elválasztó egy ; , de előtte, utána akárhány szóköz lehet

let re = /\s*;\s*/g;   //ha g opcióval keresünk a re objektumban beállítja a 
//következő keresési pontot a lastIndex tulajdonságban

//m.index a találat indexe
//re.lastIndex beáll a következő keresési helyre
let m; let ix; let last = []; let hit=[];
let cyc = 0;
while (1) {

    let m = re.exec(s);   //ha nem null, akkor m a találat tömb
                          //m[0] ban van a teljes illesztés
    if (m === null) {
        break;
    }
    console.log((cyc+1)+". találat: " + "\""+ m[0] + "\"");                      

    hit.unshift(m.index); //eltárolom a találatok kezdőindexét
    last.unshift(re.lastIndex); //a következő keresések kezdőindexe
    ++cyc;
}

let res = s.slice(last[1], hit[0]); //a második keresés kezdetétől a harmadik találatig
console.log("Második szövegrész: "+res);