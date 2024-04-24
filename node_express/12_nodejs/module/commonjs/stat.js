//CommonJS modul
//export a fájl végén

//itt csak függvények lesznek az export-ban, de lehetnek
//let, const, var változók is

//ez a függvény nem kerül az exports tulajdonságba
//így nem lesz látható azokban a szkriptekben
//ahol használjuk a modult
function checkNum(num) {
  if (!Number.isFinite(num)) {
    throw new Error(`${num} nem szám`);
  }
}

//átlagot számít a paraméterként kapott számokból
function mean(...para) {
  let sum = para.reduce((acc, num) => {
    checkNum(num);
    return acc + num;
  }, 0);
  return sum / para.length;
}

////korrigált tapasztalati szórás
//// sqrt ( (E (( X - E(X))**2)) / N)
function std(...para) {
  let m = mean(...para);
  let sumSq = para.reduce((acc, num) => {
    checkNum(num);
    return acc + Math.pow(num - m, 2);
  }, 0);
  return Math.sqrt(sumSq / (para.length - 1));
}

//láthatóvá tesszük a két függvényt
module.exports.mean = mean;
module.exports.std = std;
