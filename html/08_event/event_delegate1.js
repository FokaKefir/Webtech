
// delegálás példa
// a paragrafusokra kattintva a színük megváltozik, 
// a műveletet a div elem végzi el

function catchSingle (event) 
{
    let cel = event.target; // a cél elem referenciája
    cel.style.color = "forestgreen";
}

//dupla kattintásra minden paragrafus színe megváltozik
function catchDouble (event)
{
    //a currentTarget most a div, az alatta levő paragrafusokat keressük
    let ps = event.currentTarget.getElementsByTagName("P");
    let psa = Array.from(ps);
    psa.forEach( p => { p.style.color="red"; } ); 
}

window.onload = function () {

    let div = document.getElementById("tarto");
    div.addEventListener("click", catchSingle, false);
    div.addEventListener("dblclick", catchDouble, false);
}
