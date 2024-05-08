//egyszerű példa a Promise objektum használatára

//1. A Promise egy, a létrehozásánál később lefutó műveletet
//magába záró objektum. Aszinkron műveletek bezárására van tervezve. 

//2. A Promise biztosítja a művelet kimenetének (eredmény vagy hiba) 
//szinkron végrehajtáshoz hasonló átvételét a fő program szálban úgy,
//hogy nem blokkolja azt. 

//a Promise objektumnak létrehozáskor egy függvény a bemenete, 
//amelynek 2 paramétert kell megadni:
//resolve(): ezt kell meghívnia ha a végrehajtás sikeres és van eredmény
//reject(): ezt kell meghívnia ha nem sikeres és hiba objektum keletkezik
//a resolve és reject kulcsszavak léteznek, ezeket kell használni

//állapotok:
//             ↗ fullfilled ↘
//     pending                settled 
//             ↘ rejected   ↗

//
//             ↗ sikeres    ↘  
// folyamatban                megállapodott
//             ↘ elutasított ↗
 
let promise = new Promise ((resolve, reject)=>{
  //végrehajtó rész (executor)
  //ez azonnal szinkron lefut

  // elindíthat valamilyen aszinkron műveletet (nem kötelező)
  // itt példaként a setTimeout()-ot használjuk
  setTimeout(()=>{       
    //kiszámoljuk x-et
    let x = 4; //ezzel szabályozhatjuk, hogy az alábbi Promise
            //jól vagy hibával fut le 
    //ha x < 5 akkor a végrehajtás sikeres
    if (x<5) {
      resolve("eredmény ok");
    }else{
      //hibaként bármit vissza lehet adni, de ajánlott az Error vagy
      //valamelyik származtatott objektuma
      reject(new Error("hiba történt")); 
    }
  },1000); //1 szekundum múlva fut le az aszinkron művelet

});

//az eredmény a létrejött Promise objektum: then, catch és finally 
//függvényeivel kapjuk meg

//a Promise feladat aszinkron fut, de a then  
//függvénye bevárja a resolve vagy reject eredményt
//anélkül, hogy blokkolná a fő szálat, ami fut tovább

//a then használata
//a then függvénynek 2 függvény paramétere van
promise.then(
  adat => console.log(adat),           //ha a Promise-ban a resolve() hívódik meg 
                                       //akkor az első függvény fut az eredménnyel 
  hiba=>console.error(hiba.message)      //ha a reject() hívódott meg, akkor a második
                                       //függvény fut le a hiba objektummal
);
console.log('then utáni kód');