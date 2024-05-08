//a then, catch, finally 
//és a Promise eredmény cache jellegének használata

//ugyanaz a promise1.mjs-beli példa promise objektuma

let promise = new Promise ((resolve, reject)=>{
  setTimeout(()=>{       
    //kiszámoljuk x-et
    let x = 4; 
    //ha x < 5 akkor a végrehajtás sikeres
    if (x<5) {
      resolve("eredmény ok");
    }else{
      reject(new Error("hiba történt")); 
    }
  },1000); //1 szekundum múlva fut le az aszinkron művelet

});

//a hibát kifoghatjuk a catch ágban is, ekkor nem szükséges két függvény paraméter
//a then ágban 
promise.then(
  adat => console.log(adat)              //ha a Promise-ban a resolve() hívódik meg 
).catch(
  hiba=>console.error(hiba.message)      //ha a reject() hívódott meg, akkor a catch ág fut
                                         //!figyelem: nem ugyanaz a catch mint a try/catch
                                         //ez then/catch
);
console.log('catch utáni kód');

//a promise objektumban eltárolódik az eredmény és 
//többször is ki lehet venni, az alábbi példában 
//másodszor vesszük ki és alkalmazzuk a finally esetet is
promise.then(
  adat => console.log(adat),           //másodszor is kivehetjük az eredményt
).catch(
  hiba=>console.error(hiba.message)      //hiba
).finally(
  //ha van olyan feladat, amit a then vagy catch-től függetlenül
  //el kell végezni, pl. lezárni egy fájlt
  //azonnal lefut ha a Promise megállapodott (settled)
  console.log("finally fut")
);
console.log('finally utáni kód');