
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