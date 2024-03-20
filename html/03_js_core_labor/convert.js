

var s1 = "123.5"; //szám sztringként
var s2 = "a12.5"; //nem szám sztring az első karakter
var s3 = " 12.5"; //szóköz az első karakter, egyébként szám
var n1 = 12;
var n2 = 12.5;
var x = 123.34654378;

//a wr függvény beír a dokumentumba egy paragrafust
//elsőnek egy sztringet a meghívott kifejezéssel
//utána a kifejezés eredményét majd a típusát
//ha a value hiányzik, csak a title sztringet írja
function wr(title, value) {
    let s;
    if (value == undefined)
        s = "<p style='margin:2px;color:red;'>" + title + "</p>";
    else
        s = "<p style='margin:2px;'>" + title + "=" + value +
            " " + (typeof value) + " típus" + "</p>";
    return s;
}

//különböző konverziók kiírása
function docwr() {
    let s =
        wr("stringek kiírása") +
        wr("s1", s1) +
        wr("s2", s2) +
        wr("s3", s3) +
        wr("Számok kiírása") +
        wr("n1", n1) +
        wr("n2", n2) +
        wr("konverzió + -al") +
        wr("+s1", +s1) +
        wr("+s2", +s2) +
        wr("+s3", +s3) +
        wr("konverzió Number -függvénnyel") +
        wr("Number(s1)", Number(s1)) +
        wr("Number(s2)", Number(s2)) +
        wr("Number(s3)", Number(s3)) +
        wr("konverzió parseFloat és parseInt függvényekkel") +
        wr("parseFloat(s1)", parseFloat(s1)) +
        wr("parseFloat(s2)", parseFloat(s2)) +
        wr("parseFloat(s3)", parseFloat(s3)) +
        wr("parseInt(s1)", parseInt(s1)) +
        wr("parseInt(s2)", parseInt(s2)) +
        wr("parseInt(s3)", parseInt(s3)) +
        wr("logikaivá: konverzió Boolean függvénnyel vagy !!-val") +
        wr("Boolean(s1)", Boolean(s1)) +
        wr("!!s1", !!s1) +
        wr("számot sztringgé") +
        wr('n2 + ""', n1 + "") +
        wr('String(n2)', String(n1)) +
        wr("Számok konverziója sztringgé tizedes jegyekkel különböző formátumokban") +
        wr("x a bementi szám", x) +
        wr("x.toFixed(0)", x.toFixed(0)) +
        wr("x.toFixed(3)", x.toFixed(3)) +
        wr("x.toPrecision(6)", x.toPrecision(6)) +
        wr("x.toPrecision(8)", x.toPrecision(8)) +
        wr("x.toExponential(2)", x.toExponential(2)) +
        wr("x.toExponential(4)", x.toExponential(4));
    return s;
}