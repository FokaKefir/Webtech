//a szövegben megjelenő elemi adatokat (szám, sztring, logikai) 
//literáloknak nevezzük, pl.: 2.2
var x = 2.2;        //valós értékű változó, a 2.2 literál
var i = 2;         //ez is valós, nincs egész típus!
var s = "abc";      //sztring 
var b = true;       //logikai

//összetett típusok literáljai
var tomb = ["a", "b", "c"];       //tömb

var tomb1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var obj = { a: 2, b: "text" };   //objektum literál létrehozás 

const piros = "#ff0000";  //konstans

//dinamikus konverzió valósul meg sztringgé a + operátor hatására
//ha az egyik operandus sztring

alert('A következő literálokat definiáltuk:' + x + " " + s +
    " " + b + " " + i + " " + tomb[0] + " " + obj.b); 