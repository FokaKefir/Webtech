
//elmenti az utolsó eseményt a globális térben
let lastEvent;

function catchSingle(event) {
    //az event tulajdonságai leolvashatóak 
    //clientX és clientY a kattintás X és Y pontjai az ablakon
    lastEvent = event;

    console.log(event.type + ' esemény az ' + this.firstChild.nodeValue + ' paragrafuson, '
        + ' x=' + event.clientX + ' y=' + event.clientY +
        " cél elem azonosítója: " + event.target.id);
}

function catchDouble(event) {
    console.log(event.type + ' esemény a ' + event.target.id + ' azonosítójú elemen' +
        ' az eseménykezelő elem azonosítója: ' + this.id
    );
    lastEvent = event;
    //ha a második paragrafusra kattintunk megállítjuk a buborékolást
    if (this.id == "para2") {
        event.stopPropagation();
        console.log("a " + event.type + " esemény nem halad felfele");
    }
}

function init() {
    //minden paragrafus
    let paras = document.getElementsByTagName("p");

    for (let i = 1; i < paras.length; i++) { //az első paragrafusra (leíró szöveg) nem kerül kezelő
        //egy kattintás
        paras[i].addEventListener("click", catchSingle, false);
        //dupla kattintás kifogása
        paras[i].addEventListener("dblclick", catchDouble, false);
    }
    //a div elemre a kettős kattintást kifogó függvény
    document.getElementById("tarto").addEventListener("dblclick", catchDouble, false);
}