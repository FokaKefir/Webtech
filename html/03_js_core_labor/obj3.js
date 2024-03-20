
let konyv1 = {
    isbn: "9789737953612",
    szerzo: "Oláh-Gál Róbert",
    cim: "Az informatika alapjai közgazdász- és mérnökhallgatóknak",
    kiado: "Scientia Kiadó",
    datum: "2007-01-01",
    ar: 15.58
}

let konyv2 = {
    isbn: "9789737953797",
    szerzo: "Józon Mónika",
    cim: "Általános jogelméleti és polgári jogi ismeretek",
    kiado: "Scientia Kiadó",
    datum: "2008-02-30",
    ar: 36.72
}

let konyv3 = {
    isbn: "9789737953834",
    szerzo: "Kakucs András",
    cim: "Áramlástan",
    kiado: "Scientia Kiadó",
    datum: "2006-11-02",
    ar: 34.64
}

for (konyv of [konyv1, konyv2, konyv3]) {
    konyv.szerkeszto = "konyves Bagoly"
}

konyv1.oldal = 150
konyv2.oldal = 255
konyv3.oldal = 302

function paragrafus_konyv(konyv) {
    const paragraph = `<p>ISBN: ${konyv.isbn}<br>
                      Szerző: ${konyv.szerzo}<br>
                      Cím: ${konyv.cim}<br>
                      Kiadó: ${konyv.kiado}<br>
                      Kiadási dátum: ${konyv.datum}<br>
                      Ár: ${konyv.ar}<br>
                      Oldalszám: ${konyv.oldal || 'Nincs adat'}<br>
                      Szerkesztő: ${konyv.szerkeszto}</p>`;
    return paragraph
}

lista = [konyv1, konyv2, konyv3]

function add_konyvek() {
    const konyvDiv = document.getElementById('konyvek')

    for (konyv of lista) {
        konyvDiv.innerHTML += paragrafus_konyv(konyv)
    }
}

function ret_konyv(lista, isbn) {
    for (konyv of lista) {
        if (konyv.isbn === isbn) {
            return konyv.ar
        }
    }
    return undefined
}


function tulajdonsag_teszt(tulajd, konyv) {
    let lst = []
    for (let i in tulajd) {
        tul = tulajd[i]
        if (konyv[tul] == undefined) {
            lst.push(i)
        }
    }
    if (lst.length == 0)
        return true
    return lst
}

delete konyv2.ar
delete konyv2.szerzo

tulajd = [ "isbn", "szerzo", "cim", "kiado", "datum", "ar" ]
