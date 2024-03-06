//tömb literál és egyszerű műveletek

let a = [1, 2, 3, 4, 5];

console.log("A tömb hossza:" + a.length);

// for .. in ciklus
for (let i in a) {
    console.log("Elem " + i + ": " + a[i]);
}

//az elemek használata
let s = a[1] + a[2];

//törlés
delete a[3];

console.log("Az a[3] most: " + a[3]);

//új index, a tömb lehet ritka:
a[10] = 11;
console.log("Az a[8] most: " + a[8] + " az a[10] most: " + a[10]);

//végigjárás for ciklussal, üres "rekeszek" kikerülése
let elemek = "";
for (let i = 0; i < a.length; i++) {
    if (a[i] != undefined) {
        elemek += i + "=>" + a[i] + "\n";
    }
}
console.log("A tömb elemei:\n" + elemek);