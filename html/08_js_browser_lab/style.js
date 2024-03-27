//egy HTML elem style tulajdonsága a CSS tulajdonságokat
//tartalmazza, mint objektum kulcsok
//ha a tulajdonság összetett angol szó, mint a fontsize, 
//akkor teve jelöléssel: fontSize

let show = true

function setOriginal(){
    $("#para").style.color = ""; 
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


function setStyle(e) { 
    $("#para").style.color = "green"; // az elem.style tulajdonság tartalmazza a CSS tulajdonságokat

    setTimeout(
        () => {
            $("#para").style.color = "black"; // az elem.style tulajdonság tartalmazza a CSS tulajdonságokat
        }, 2000
    )
    // $("#para").style.fontSize = "30pt";
}

function myhide(e) {
    if (show == true){
        $('#para').style.display = 'none'
        show = false
    } else {
        $('#para').style.display = 'block'
        show = true
    }
}

//aktuális kiszámított stílusok lekérés
function getStyles (elem){

    var cStyle = window.getComputedStyle(elem);
    console.log("color:", cStyle.color);
    console.log("fontSize:", cStyle.fontSize);

    //az alábbi ciklus kiírja az összes tulajdonságot
    /*
    for ( let t in cStyle ){
        if (cStyle.hasOwnProperty(t)) {
            console.log(t,"=",cStyle[t]);
        }
    }*/
}


window.onload = function () {
    $("#para").addEventListener("click", setStyle, false);
    $("#para2").addEventListener('click', myhide, false)
    //a paragrafus tulajdonságainak kiírása
    getStyles($("#para"));
}


