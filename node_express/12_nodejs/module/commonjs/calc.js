//CommonJS modul beillesztése
const stat = require('./stat.js');

const a = [1,2,3,4,5,6];

try{
  const atlag = stat.mean(...a);
  const szoras = stat.std(...a);
  console.log(`Átlag: ${atlag}, szórás: ${szoras}`);
}catch (err){
  console.log(err.message);
}
