//ezt meg tudjuk nézni a konzolban utólag
let evt = null;

//az eseményobjektum tulajdonságainak kiírása
function kattintas(e) {
    let s = "Esemény objektum tulajdonságai\n";

    evt = e; //kimenti, hogy megnézhessük a konzolon

    s += "esemény típus: " + e.type + "\n";
    s += "esemény cél elem neve: " + e.target.nodeName + "\n";
    s += "kliens X koordináta: " + e.clientX + "\n";
    s += "kliens Y koordináta: " + e.clientY + "\n";
    s += "egér gomb (0 bal): " + e.button + "\n";
    s += "Shift gomb lenyomva: " + e.shiftKey + "\n";
    s += "Ctrl gomb lenyomva: " + e.ctrlKey + "\n";
    s += "Alt gomb lenyomva: " + e.altKey + "\n";
    s += "Cél (target): " + e.target + "\n";

    alert(s);
}

//regisztrálás a paragrafusra
window.onload = function () {
    let p = document.getElementById("para");
    p.addEventListener("click", kattintas, false);
}
