let mo = "Nyugodtan rohanunk a szakadékba is, ha sikerült valamivel eltakarnunk a szemünk elől";
let moa = "the rain in Spain stays mainly in the plain";
let s = "első második harmadik első";
let s1 = "alpha beta gamma";
let szo = "abrakadabra";

let szam = "1265";
let ip = "192.168.110.102";
let tel = "+40-435-234-112";
let url = "http://localhost"; // egyszerűsítve a gép nevet alkotó sztringek a következő
//karakterekből állhatnak: a-z  A-Z 0-9 - és egy név maximum 61 karakter
//az elválasztó a pont (.)
let url1 = "http://localhost/hu/kereses?q=alma"; //kereső webcím

//html szövegek
let p = "<p>";
let p1 = '<p class="szines">';
let par = "<p>Szöveg szöveg szöveg</p>";
let par1 = '<p class="szines">Szöveg szöveg szöveg</p>';
let pp = "<p>Szöveg szöveg szöveg</p><p>Szöveg szöveg szöveg</p><p>Szöveg szöveg szöveg</p>";
let idszov = '"alma" és "szilva" és "cseresznye"';

//egész szám
let reszam = /^\d+$/; // egy egész számot tesztel
let t1 = reszam.test(szam); //tesztel egy egész számot

//egy paragrafus címke: 
let rep = /<p[^>]*>/i;

//angol szavak keresése
mm = moa.match(/[a-z]+/g);

//megoldások
//teljes paragrafus:
let repara = /<p[^>]*>[^<]*<\/p>/i; 
let egypara = par.match(repara);
//a több paragrafusból csak az elsőt veszi ki:
egypara = pp.match(repara);
//ha a g - global módosítót is használjuk:
let repara1 = /<p[^>]*>[^<]*<\/p>/ig; 
//az összeset kiveszi:
let tobbpara = pp.match(repara1);

//teljes paragrafus al-kifejezésekkel - illesszük a matchAll() függvénnyel:
let repara2 = /(<p[^>]*>)([^<]*)(<\/p>)/ig;
let minden = pp.matchAll(repara2);
//egy p a teljes illesztést, és sorban az al-kifejezések illesztését is tartalmazza
//iteratív szerkezt, (for of) -al lehet kivenni az elemeket:
// for (let p of minden){
//     console.log(p);
// }
