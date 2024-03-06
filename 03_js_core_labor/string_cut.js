//a feladatokban nem szabad reguláris kifejezéseket használni!
//csak String és egyszerű Array függvényeket


let txt1 = "egy kettő három";
let txt2 = "Csak a háza előtt lassított kicsit gondolatai meg léptei iramán is";
let txt3="Már megint savanyú a képem - gondolta, és ettől, ha lehet, még savanyúbb lett";

//minden függvényben kisbetűs szavakkal dolgozzunk, egy 
//sztring kisbetűs változatát így kapjuk meg, ha magyar a szöveg:
let txt2_kis = txt2.toLocaleLowerCase('hu-HU')


//a függvény cserélje fel az első és utolsó szót egy szövegben
// s : többszavas szöveg, szavak szóközzel elválasztva
function exchange(s){

    
}

//a függvény randomizálja a szavak sorrendjét egy szövegben
//a Math.random() egy 0 és 1 közötti random számot ad
//K-nál kisebb random számot így kapunk
//  let r = Math.floor(Math.random()*K);
//a szavakat vegyük ki egy tömbbe, randomizáljuk az elemeit,
//majd alakítsuk ismét mondattá
// s : többszavas szöveg, szavak szóközzel elválasztva
function shufWords(s){

}

//a függvény kiveszi egy mondatból a leghosszabb és legrövidebb szót
//egy objektumot ad vissza: { shortest: "szó", longest: "szó"}
// s : többszavas szöveg, szavak szóközzel elválasztva
function getShortLong(s){

}

//a függvény alakítsa át minden szó első betűjét nagybetűsre
// s : többszavas szöveg, szavak szóközzel elválasztva
function upperFirst(s){
   
}

//a függvény szúrjon be egy szó köré idézőjelet, 
//ha a szó megvan a szövegben
//vissza: módosított szöveg ha sikerül, false: ha nincs a szövegben ilyen szó
// s : többszavas szöveg, szavak szóközzel elválasztva
function insertQuote(s,szo){

}
