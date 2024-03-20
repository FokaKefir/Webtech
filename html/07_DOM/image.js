//a kép elem tulajdonságainak kiírása
function showProperties(im) {
  let s = "";
  for (let p in im) {
    if (im[p] instanceof Function) {
      continue; //a  függvényeket nem írjuk ki
    }
    if (im[p]) {
      s += p + "=" + im[p] + "\n";
    }
  }
  alert(s);
}
