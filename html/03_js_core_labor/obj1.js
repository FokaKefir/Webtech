
//példa objektumra
let konyv = {
    isbn: '9780596805524',
    szerzo: 'David Flanagan',
    cim: 'JavaScript: The Definitive Guide',
    kiado: "O'Reilly",
    ev: 2011
};

//tulajdonságok elérése
szerzo = konyv.szerzo;
szerzo = konyv['szerzo'];

//új tulajdonságok:
konyv.ar = 66.;
konyv.szerkeszto = 'Mike Loukides';

//tulajdonság törlés
delete konyv.szerkeszto;

//tulajdonságok bejárása:
console.log("Könyv tulajdonságai:");
for (let t in konyv) {
    console.log(t + " : " + konyv[t]);
}
