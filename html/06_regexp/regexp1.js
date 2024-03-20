
"use strict";
//telefonszámok kikeresése egy szövegből    
let s = "Szöveg 0788-564-216 bármilyen szöveg 0654-312-477 szöveg 0733338722";

let re = /\d{3}-?\d{3}\-?\d{3}/g; //ha g opció van, mindegyiket keresi

let tel = s.match(re); //eredmény az összes találat egy tömbben
                       //null ha nem talál

if (tel) { //ha nem null
    console.log("Telefonszám(ok):");
    for (let e of tel) {
        //csak a számok maradjanak
        e = e.replace(/-/g,"");
        console.log(e);
    }
} else {
    console.log("Nincs találat");
}

