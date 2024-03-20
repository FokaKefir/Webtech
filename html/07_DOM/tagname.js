let current = "black";

let last = null;

function doIt() {
    //összes paragrafus referenciája
    //HTMLCollection adattípusban

    let el = document.getElementsByTagName('p');
    
    last = el; //csak segéd változói, megtekinthető a konzolban

    console.log("Kiválasztott paragrafusok száma:", el.length);

    let nextColor='';

    switch (current) {
        case "black":
            nextColor = "red";
            break;
        case "red":
            nextColor = "black"
        default:
            nextColor = "black"
    }

    current = nextColor; //állapot mentés

    //ha nem találna elemet, az el hossza 0 lenne
    for (let i = 0; i < el.length; i++){
        el[i].style.color = nextColor; //megváltoztatja a színét
    }
    //  for..of-al is iterálható
    // for (let para of el){
    //   para.style.color = nextColor;
    // }
}
