//fordított lengyel jelölésű számológép

let expr1 = "2    3   + .";
let expr2 = "2 3 4 + * 6 - .";
let expr3 = "22 3.7 444 + * 66.5 - .";
//hibás kifejezések
let expr4 = "2 +"; 
let expr5 = "+"; 
let expr6 = "2 3 + /";
let expr7 = "2 3 + . .";

let stack =[];

//az expr egy olyan sztring kifejezés, mint a 
//fenti expr1 és expr2
function polishCalc(expr) {
 
    if (!expr || expr.length == 0) {
        return NaN;
    }

    let a = expr.split (/ +/);


    for (let e of a ){
    console.log(e);
    }
    
}

//tesztek

polishCalc(expr1);//5
