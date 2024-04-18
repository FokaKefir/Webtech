///kis táblázat összeadó

//HTML táblázat elemei dokumentációk
//ELTE tananyag http://tamop412.elte.hu/tananyagok/bevweb/lecke9_lap1.html#hiv16
//Mozilla https://developer.mozilla.org/hu/docs/Web/API/HTMLTableElement

//a tesztelés alatt ide kimenthetők a cellák
let lastCell = null;
let savedCell = null;

//--------------------
// HTML kezelők
//--------------------

//HTML táblázat előállító a labor gyakorlathoz
//alapból nincs felhasználva, a HTML-ben megadott táblázatot
//használjuk
function createTable(id, rows, cols, caption) {
  //táblázat HTML kezdő sztring
  let tablestr =
    '<table id="' +
    id +
    '">\n' +
    "<caption>" +
    caption +
    "</caption>\n" +
    "<tbody>\n";

  if (
    rows !== parseInt(rows) ||
    cols !== parseInt(cols) ||
    rows < 1 ||
    cols < 1
  ) {
    console.error("rows vagy cols nem egész szám vagy <1");
    return false;
  }

  //táblázat fejléc adatait generáló függvény
  //n oszlopszám
  function header(n) {
    return "Adat " + n;
  }

  //egy sort generál N darab th vagy td elemmel
  //element: <td> vagy <th>
  //content: mi a cellák tartalma: egy szám, sztring
  //         vagy függvény ami beír a cellába generáláskor
  function createRow(N, element, content, id) {
    let rowstr = "<tr>"; //kezdő tr
    if (id !== undefined) {
      rowstr = "<tr id=" + id + ">";
    }

    if (typeof content !== "function") {
      N++;
    }
    for (let k = 0; k < N; k++) {
      rowstr += element;
      if (typeof content === "function") {
        rowstr += content(k + 1); //ha egy függvény
      } else {
        rowstr += content; //ha egy szám vagy sztring
      }
      rowstr += element.replace(/</, "</"); // </td>
    }
    if (typeof content === "function") {
      rowstr += element + "Össz" + element.replace(/</, "</");
    }
    return rowstr + "</tr>\n";
  }
  //fejléc
  tablestr += createRow(cols, "<th>", header);
  for (let k = 0; k < rows; k++) {
    tablestr += createRow(cols, "<td>", 0);
  }
  tablestr += createRow(cols, "<td>", "&nbsp;", "ossz")
  //vége
  tablestr += "</tbody>\n</table>";
  console.log(tablestr);
  return tablestr;
}

function generateNewTable() {
  let rowsInput = parseInt(document.getElementById("rowsInput").value);
  let colsInput = parseInt(document.getElementById("colsInput").value);
  let newTable = createTable("tab", rowsInput, colsInput, "Adatok");
  document.getElementById("tarto").innerHTML = newTable;
}

//üzenet kiíró, ha error true akkor hiba üzenet
function message(str, error) {
  let msg = "",
    cls = "";
  error = error || false; //ha nincs akkor false
  //ha error == true akkor beszúrja a hibát jelző osztályt
  if (error) {
    cls = ' class="error"';
  }
  msg += "<span" + cls + ">" + str + "</span>";
  if (error) {
    $("#msg").innerHTML += "<br>" + msg;
  } else {
    $("#msg").innerHTML = msg;
  }
  console.log(msg);
}

//------------------
//Számítások
//------------------

//számoló függvény
//elvégzi a táblázat sorainak és oszlopainak összeadását
function szamol(e) {
  let T = $("#tab");
  let rows = Array.from(T.rows).slice(1); // A sorokat tömbbé alakítjuk

  // Sorok összegének számítása forEach és reduce függvényekkel
  rows.forEach(row => {
    let cells = Array.from(row.cells); // A cellákat tömbbé alakítjuk
    let sum = cells.reduce((acc, cell) => {
      return acc + parseFloat(cell.textContent || 0); // A cella tartalmát összeadjuk, figyelembe véve az esetleges üres cellákat is
    }, 0);
    row.cells[row.cells.length - 1].textContent = sum; // Az összeg beírása az utolsó cellába a sorban
  });

  // Oszlopok összegének számítása
  let cols = Array.from(T.rows[0].cells);
  cols.forEach((col, colIndex) => {
    let sum = rows.slice(0, -1).reduce((acc, row) => {
      let value = parseFloat(row.cells[colIndex].textContent);
      if (!isNaN(value)) {
        acc += value;
      }
      return acc;
    }, 0);
    T.rows[T.rows.length - 1].cells[colIndex].textContent = sum;
  });

  message("Újra számolva");
}

//----------------
//Eseménykezelők
//----------------

//click esemény bármelyik cellán
//delegáljuk ás a táblázaton fogjuk ki
function click(e) {
  let elem = e.target; //melyik cella
  lastCell = elem; //csak a konzolban való megtekintés számára

  let T = $("#tab"); //táblázat
  let rows = T.rows.length;
  let cols = T.rows[0].cells.length;

  console.log("táblázat mérete: " + rows + " " + cols);

  //ellenőrzés, hogy szerkeszthető cella-e

  if (
    elem.parentNode.rowIndex == 0 || //első sor
    elem.cellIndex == cols - 1 || //utolsó oszlop
    elem.parentNode.rowIndex == rows - 1
  ) {
    //utolsó sor
    message("Nem szerkeszthető cella!", true);
    return;
  }

  console.log("cell: " + elem.parentNode.rowIndex + " " + elem.cellIndex);

  //ha már meg van nyitva szerkesztésre és
  //egyet kattintottunk a szövegre
  if (elem.isContentEditable) {
    console.log("a cella már szerkeszthető");
    return;
  }

  //beállítás szerkesztésre
  console.log(
    elem.tagName + " elem, tartalom:" + elem.innerHTML + " szerkeszthető lett"
  );
  elem.contentEditable = "true";
  elem.focus(); //ez nem fontos, de a biztonság kedvéért
  elem.style.backgroundColor = "lightgray"; //háttér
  //blur eseménykezelő erre az elemre
  elem.addEventListener("blur", blur, false);
  //tartalom kimentése
  savedCell = elem.textContent;
  //ha csak egy 0-t tartalmaz, töröljük
  if (elem.textContent == "0") {
    elem.textContent = "";
  }
  message("Szerkesztés");
}

function blurCapturing(e) {
  console.log("blur capturing esemény a táblázaton");
}

//focus
function focus(e) {
  let elem = e.target;
  console.log(elem.tagName + " focus");
}

//blur eseménykezelő a cellákon
function blur(e) {
  let elem = e.target;
  ////console.log(elem.tagName + ":" + elem.innerHTML + " blured");
  if (elem.textContent == "") {
    elem.textContent = "0"; //vissza 0 ha üres maradt
  }
  elem.contentEditable = "false";

  //levesszük a blur kezelőt
  elem.removeEventListener("blur", blur, false);

  let N = Number(elem.textContent);

  if (isNaN(N)) {
    message(
      "A bevitt érték nem szám, cella nem módosult: " + elem.textContent,
      true
    );
    elem.textContent = savedCell;
  } else {
    $("#msg").innerHTML = "Cella szerkesztve";
  }

  //levesszük a szürke hátteret
  elem.style.backgroundColor = "inherit";
}

function key(e) {
  if (e.key === "Enter") {
    e.preventDefault();
    e.target.blur(); // Az újsor gombnyomásnak a blur eseménnyel való ekvivalenciája
    szamol();
  }
}

//eseménykezelők beállítása
window.onload = function () {
  let T = $("#tab"); //a táblázat elem

  T.addEventListener("click", click, false);

  //a Számol gomb
  $("#szamol").addEventListener("click", szamol, false);
  $("#newTableButton").addEventListener("click", generateNewTable, false)

  //az alábbi kettő nem része a feladatnak
  T.addEventListener("keydown", key, false);
  T.addEventListener("blur", blurCapturing, true);
};
