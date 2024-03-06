/* válogassuk ki egy szöveg szavait úgy, hogy az azonos betűvel kezdődő  
    szavak külön tömbökbe kerüljenek a tömbök reduce függvényét használva
*/

//először a kis szöveggel teszteljük

//szöveg (forrás: Pascal - Gondolatok) 
let szoveg = "A helyes észjárásnak sokféle fajtája van; egyesek helyesen\ngondolkoznak egy bizonyos gondolatkörben, de másikban badarságokat\nkövetnek el.\n  Vannak, akik helyes következtetéseket vonnak le csekély számú\nalaptételből, ez az egyik fajtája a helyes gondolkodásnak.\n  Mások olyan esetekben következtetnek helyesen, amikor nagyszámúak az\nalaptételek.\n  Egyesek például helyesen értik a víz tulajdonságait, itt ugyanis\ncsekély számú alaptörvénnyel van dolguk; a belőlük levonható\nkövetkeztetések azonban oly árnyaltak, hogy csupán rendkívül logikus\ngondolkodás képes levonni őket.\n  Ám lehet, hogy ettől még nem lennének jó mértantudósok, mert ebben a\ntudományban nagy az alaptételek száma, és elképzelhető olyan elme,\namelyik igen jól lehatol néhány törvénynek egészen az alapjaiig,\nellenben teljességgel képtelen felfogni azokat a jelenségeket,\namelyekben sok törvénnyel találkozik.\n  Kétfajta gondolkodás létezik tehát: az egyik gyorsan és teljes\nmélységükben felfogja az alaptételekből származó következményeket, ezt\nnevezhetjük hibátlan gondolkodásnak; a másik egyszerre sok törvényt\nképes felfogni, anélkül hogy összezavarná őket, és ez az igazi\ngeometriai gondolkodás. Az egyik az értelem ereje és tévedhetetlensége,\na másik az értelem átfogóképessége. Mármost e kettő nagyon jól meglehet\negymás nélkül, az emberi szellem ugyanis egyaránt lehet erős és\nugyanakkor korlátolt, vagy átfogó, de ugyanakkor gyenge.\n";
let kis = "A helyes észjárásnak sokféle fajtája van; egyesek helyesen\ngondolkoznak egy bizonyos gondolatkörben, de másikban badarságokat\nkövetnek el.";
//punktuáció, újsor-szóköz kiszűrve, minden szó kisbetűssé alakítva
szoveg = szoveg.replace(/[.,;!?:]+/g," ").replace(/\s+/g," ").toLocaleLowerCase('hu-HU');
kis = kis.replace(/[.,;!?:]+/g," ").replace(/\s+/g," ").toLocaleLowerCase('hu-HU');

console.log(kis);

//tömbbe 
let szavakTomb = szoveg.split(/[ \t]+/);
let kisTomb = kis.split(/[ \t]+/);

//console.log(kisTomb);

//ezt a függvényt kell megírni
function kezdobetuk (szo_tomb)
{
   return szo_tomb.reduce ( 
    // itt megoldani
   );

}

//a kis szöveggel teszteljük, utána a szavak-kal
console.log(kezdobetuk(kisTomb));
/* ezt kell kiírnia:
{ ​a: [ "a" ],
  ​b: [ "bizonyos", "badarságokat" ],
  ​d: [ "de" ],
  ​e: [ "egyesek", "egy", "el" ]​,
  f: [ "fajtája" ]​,
  g: [ "gondolkoznak", "gondolatkörben" ],
  ​h: [ "helyes", "helyesen" ],
  ​k: [ "követnek" ],
  ​m: [ "másikban" ]​,
  s: [ "sokféle" ],
  ​​v: [ "van" ]​,
  "é": [ "észjárásnak" ]​
}
*/