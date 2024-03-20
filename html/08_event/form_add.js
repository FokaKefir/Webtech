//összeadó
function add(n1, n2) {
    let s = n1 + n2;
    return "Összeg:" + s;
}


//HTML-be ír
function irPara(s) {
    let p = document.getElementById("eredmeny");
    p.innerHTML = s;
}

//eseménykezelő
function pluszGomb(e) {
    let n1 = Number(document.getElementById("mezo1").value);
    let n2 = Number(document.getElementById("mezo2").value);

    if (isNaN(n1) || isNaN(n2)) {
        alert("A mezők nem számok!");
        return;
    }
//    console.log(n1, n2);

    let o = add(n1, n2);
    irPara(o);
}

//kezelő beállítása 
window.onload = function () {
    document.getElementById("plusz").addEventListener("click", pluszGomb, false);
}