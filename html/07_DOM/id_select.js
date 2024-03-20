
//segédfüggvény az id alapú kiválasztáshoz
let $ = function (id) {
    return document.getElementById(id);
}


function doIt() {
    $("para").style.color = "red";

}
