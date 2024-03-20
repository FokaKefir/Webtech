
//aktív elemek implicit eseménykezelőinek végrehajtása

//HTML tulajdonságként regisztrált esemény 
//kezelővel meghívott függvény
function linkHtmlEvent() {
    let valasz = confirm("Ugrás?");
    console.log(valasz);
    return valasz;      //ha  return true, a link aktiválódik
    //ha false akkor nem
}

//standard módon regisztrált függvény
function linkRegistredEvent(e) {
    let valasz = confirm("Ugrás?");
    if (!valasz) {
        e.preventDefault(); //ha  a válasz hamis, a
        // preventDefault() letiltja az implicit eseményt
    }
}

//függvény regisztrálása
window.onload = function () {
    let a = document.getElementsByTagName('A');
    //az a tömb 2 elemet fog tartalmazni, 
    //a második elem a második link
    console.log(a[1]);
    a[1].addEventListener("click", linkRegistredEvent, false);
}
