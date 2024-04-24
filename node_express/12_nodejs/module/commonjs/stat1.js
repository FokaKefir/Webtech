//CommonJS modul
//export a függvény előtt

/* alapértelmezetten a 
   module.exports ={};
   s modul indulásakor, és van egy
   exports
   nevű referencia, ami ugyanarra a 
   module.exports-ra mutat
*/

//ez a függvény nem kerül az exports tulajdonságba
//így nem lesz látható azokban a szkriptekben
//ahol használjuk a modult
function checkNum(num){
    if ( ! Number.isFinite(num) ){
      throw new Error(`${num} nem szám`);
    }
}

//átlagot számít a paraméterként kapott számokból
exports.mean = function (...para){
  let sum = para.reduce ((acc, num)=>{
    checkNum(num);
    return acc + num;
  },0)
  return sum / para.length;
} 

////korrigált tapasztalati szórás
//// sqrt ( (E (( X - E(X))**2)) / N)
exports.std = function (...para){
  let m = exports.mean (...para); //! ez már nem lesz a modul névterében
  let sumSq = para.reduce ((acc,num)=>{
    checkNum(num);
    return acc + Math.pow(num-m,2);
  },0);  
  return Math.sqrt(sumSq/(para.length-1));
}

