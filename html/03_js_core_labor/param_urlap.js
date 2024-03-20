//eseménykezelő az OK gombhoz
function calc(form) {
    let p1 = form.param1.value; //paraméterek sztring típusban
    let p2 = form.param2.value; // 

    let num1 = parseFloat(p1)
    let num2 = parseFloat(p2)

    let num = num1 + num2

    console.log("Paraméterek: " + p1 + " " + p2);

    let res = ""; //A res változóba kerüljön az eredmény

    //itt elvégezni a konverziókat és számításokat     
    // a
    res = (Math.round(num * 100) / 100).toFixed(2);

    // c
    res = parseInt(num)

    // d
    res = (num - parseInt(num)).toFixed(3)

    if (isNaN(num)) {
        alert("Not a number")
        return false
    }
    
    //eredmény beírása
    let p = document.getElementById("eredmeny");
    p.innerHTML = "eredmény: " + res;
    return false;
}
