
// undefined - nem kapott értéket a változó vagy referencia
// null    - olyan referencia ami nem mutat sehová, "null" értékű


var x; //automatikusan undefined ha nem rendelünk hozzá 
//értéket
var o = null;
console.log('Az x típusa:' + typeof x + ' ,az o típusa:' + typeof o);

console.log('null==null : ' + (o == null));

console.log('undefined==undefined : ' + (x == undefined));

//ez furcsa de logikus:
console.log('undefined==null : ' + (undefined == null));

//így lehet detektálni a különbséget
console.log('undefined===null : ' + (undefined === null));
