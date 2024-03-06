//eseménykezelő az OK gombhoz
function calc(form) {
    let p1 = form.param1.value; //paraméterek sztring típusban
    let p2 = form.param2.value; // 

    console.log("Paraméterek: " + p1 + " " + p2);

    let res = ""; //A res változóba kerüljön az eredmény

    //itt elvégezni a konverziókat és számításokat     

    //eredmény beírása
    let p = document.getElementById("eredmeny");
    p.innerHTML = "eredmény:" + res;
    return false;
}
