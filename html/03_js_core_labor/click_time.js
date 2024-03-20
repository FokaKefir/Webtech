//egyszerű megoldás

let d1 = new Date(); //oldal betöltődésekor

function displayTime(e)
{
    let d2 = new Date();
    let t = (d2-d1); //milliszekundum

    let s = (t/1000/60).toFixed(0) + " perc " + (t/1000).toFixed(1) + " másodperc";
    console.log(s);
}
