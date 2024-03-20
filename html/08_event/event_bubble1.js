
//elmenti az utolsó eseményt a globális térben
//csak azért szükséges, hogy a konzolon megnézhessük
let lastEvent;

//eseménykezelő, ez mindkét elemen rajta lesz, div és benne a p
function catchSingle(event) {
    let s = "Esemény: ";
    lastEvent = event;  //meg lehet nézni a konzolban ha lefutott
    s += " a cél elem neve " + event.target.nodeName + " id: " + event.target.id + "\n";
    s += ", az eseménykezelő elem neve " + event.currentTarget.nodeName +
        " id: " + event.currentTarget.id;
    document.getElementById("show").innerHTML += "<br>" + s;
}

window.onload = function () {

    let p = document.getElementById("para"); //paragrafus
    let d = document.getElementById("tarto"); //div

    p.addEventListener("click", catchSingle, false);
    d.addEventListener("click", catchSingle, false);
}
