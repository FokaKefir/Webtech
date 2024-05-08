//EJS dokumentáció: https://ejs.co/#docs

//sablonkezelő működése  
import ejs from 'ejs';

//sztring sablon
const ejsString = 
`<h1><%= cim %></h1>
<p><%= tartalom %>`;

let template = ejs.compile(ejsString);
let valtozok = {cim: "Az oldal címe", tartalom: "A paragrafus szövege"};

//1. módszer
let outString = template (valtozok);
console.log("1. kimenet:\n" + outString);

//2. módszer
const opciok = {};
let outString1 = ejs.render(ejsString, valtozok, opciok);
console.log("2. kimenet:\n" + outString1);

//3.sablonkezelő működése fájlt használva 
let outString2 = ejs.renderFile('./elso.ejs', valtozok, opciok, function(err, outString2){
 if(err){
  console.log(err.message);
 }else{
  console.log("3. kimenet:\n" + outString2);
 } 
}) ;