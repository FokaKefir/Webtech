
//példa string függvények használatára
let s = "első második harmadik";

let ix = s.indexOf(" ");
let elso = s.substring(0, ix);  //az ix-nél levő érték nem kerül be a szubsztringbe
console.log("elso:" + elso); //első

let ix1 = s.lastIndexOf(" ");
let masodik = s.substring(ix + 1, ix1); //második

//vagy:
ix3 = s.search("második"); //a szó elején az index
if (ix3 != -1) {
    let masodik1 = s.substr(ix3, "masodik".length);
}

//szubtringet a slice() függvénnyel is kivehetünk
let sl = s.slice(5,8); //a 5. indextől a 7.-ig veszi ki
console.log("slice:", sl);// más

//a slice működik negatív indexekkel is
let sl = s.slice(-5); //a -5. indextől  sztring végéig ha nincs második paraméter
console.log("slice1:", sl);// madik

let szavak = s.split(" "); //tömb lesz
console.log("szavak:");
for (let i=0; i<szavak.length;i++){
    console.log("index:"+i+ " szó:" + szavak[i]);
}

let forditva = "";
for (let i = szavak.length - 1; i >= 0; i--) {
    forditva = forditva.concat(szavak[i]);
    if (i != 0) {
        forditva = forditva + " ";
    }
}
console.log("fordítva:",forditva);

//helyettesítés
let s1 = s.replace ("második", "negyedik");
console.log(s1);