
//utolsó esemény objektum
let lastEvent = null;

//buborékolást kezelő
function catchBubble(event) {
    lastEvent = event;
    let s = "Esemény: ";
    let d = new Date();
    s += Date.now() + " Bubble: cél: " + event.target.nodeName + " id: " + event.target.id ;
    s += ", kezelő:" + event.currentTarget.nodeName +
        " id: " + event.currentTarget.id;
    document.getElementById("show").innerHTML += "<br>" + s;
}

//elfogást (capturing) kezelő
function catchCapturing(event) {
    lastEvent = event;
    let s = "Esemény: ";
    s += Date.now() + " Capture: cél: " + event.target.nodeName + " id: " + event.target.id ;
    s += ", kezelő:" + event.currentTarget.nodeName +
        " id: " + event.currentTarget.id;
    document.getElementById("show").innerHTML += "<br>" + s;
}

//kezelők beállítása
window.onload = function () {

    let p = document.getElementById("para"); //paragrafus
    let d = document.getElementById("tarto"); //div

    d.addEventListener("click", catchCapturing, true);
    d.addEventListener("click", catchBubble, false);

    p.addEventListener("click", catchCapturing, true); 
    p.addEventListener("click", catchBubble, false); 
}



