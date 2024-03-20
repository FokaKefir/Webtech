
//adatok tömb literál gyakorlathoz

let a = [-6, -9, 1, 3, -1, 6, -12, 9, 12, -3];

let b = a;
c = [];
//klasszikus for ciklussal való bejárás
for (let i = 0; i < a.length; i++) {
    c[i] = a[i];
}

//töröl néhány elemet random
for (let i = 0; i < b.length; i++) {
    if (Math.random() > 0.5) { //Math.random()  0-1 közötti random szám
        delete b[i];
    }
}

//kiírjuk az a tömb elemeit for ... of ciklussal
console.log("Az c elemei:")
for (let e of c){
    console.log(e);
} 

// c tomb elem osszege
let sumC = 0
for (let e of c) {
    sumC += e
}

console.log("C tomb elemeinek osszege: " + sumC)

// b tomb elemeinek osszege
let sumB = 0
for (let e of b) {
    if (typeof e == 'number') {
        sumB += e
    }
        
}
console.log(b)
console.log("B tomb elemeinek osszege: " + sumB)


// Egyenlosegek
console.log(a)
console.log(b)
console.log(c)
console.log(a == c) // false
console.log(a === c) // false
console.log(a == b) // true
console.log(a === b) // true, mert b memoria szerint volt atadva a-ba

// beszuras a seggere
c[111] = 1
console.log(c.length)
c[c.length] = "asd"
console.log(c)

// fuggveny amely visszaadja hany ures elem van 
function empty_elements(t) {
    let s = 0
    for (e of t) {
        if (e == undefined) 
            s += 1
    }
    return s
}

console.log(empty_elements(c))

// tomb lenght tulajdonsaganak megvaltoztatasa
console.log(a.length)
a.length = 100
console.log(a)
a.length = 5
console.log(a)
a.length = 0
console.log(a)
a.length = 10
console.log(a)

// toString
console.log(c)
console.log(c.toString())