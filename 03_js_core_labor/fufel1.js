
//névtelen függvény 1 
//hozzárendelhető egy változóhoz
//amely tárolni fogja a függvényre való referenciát
let plus = function (a, b) {
    let s = a + b;
    return s
}

//névtelen függvény 2 
let minus = function (a, b) {
    let s = a - b;
    return s
}

let muvelet = plus;

function setMinus()
{
    muvelet=minus;
}