//CommonJS modul
//felülírjuk a module.exports tulajdonságot
//ilyenkor az exports-ra tett referenciák nem lesznek használhatóak

/* alapértelmezetten a 
   module.exports ={};
   a modul indulásakor, és van egy
   exports
   nevű referencia, ami ugyanarra a 
   module.exports-ra mutat

   csak a module.exports tér vissza  a require() függvényből
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
function mean (...para){
  let sum = para.reduce ((acc, num)=>{
    checkNum(num);
    return acc + num;
  },0)
  return sum / para.length;
} 

////korrigált tapasztalati szórás
//// sqrt ( (E (( X - E(X))**2)) / N)
function std(...para){
  let m = mean (...para); //! ez már nem lesz a modul névterében
  let sumSq = para.reduce ((acc,num)=>{
    checkNum(num);
    return acc + Math.pow(num-m,2);
  },0);  
  return Math.sqrt(sumSq/(para.length-1));
}

module.exports = function () {
  return {mean: mean, std: std};
}
