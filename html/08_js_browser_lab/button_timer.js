
var handler = null;//setInterval handler
var interval = 0;  //periódus

//a setInterval által futtatott függvény
function count (e)
{
}

//start gomb
function start(e)
{
    console.log("start");
    let form = this.form; //az űrlap referencia
}

//stop gomb
function stop(e)
{
    console.log("stop");
}

//csak megjelenítő szerepe van
function change(e)
{
    console.log('Csúszka vált: ' + this.value);   
}

window.onload = function () {
    var f = $("#elso");
    
    f.start.addEventListener("click",start,false)
    f.stop.addEventListener("click",stop,false)
    f.interval.addEventListener("change",change,false)
}