//kis táblázat összeadó

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
  // Ellenőrizzük, hogy rows és cols egész számok és legalább 1-es értékűek
  if (
    !Number.isInteger(rows) ||
    !Number.isInteger(cols) ||
    rows < 1 ||
    cols < 1
  ) {
    console.error("rows vagy cols nem egész szám vagy <1");
    return false;
  }

  // Táblázat HTML generálása
  let tablestr =
    '<table id="' +
    id +
    '">\n' +
    "<caption>" +
    caption +
    "</caption>\n" +
    "<tbody>\n";

  // Egy sor celláinak generálása
  function createRow(N, element, content) {
    let rowstr = "<tr>"; // Kezdő tr
    for (let k = 0; k < N; k++) {
      rowstr += element;
      if (typeof content === "function") {
        rowstr += content(k + 1); // Ha egy függvény
      } else {
        rowstr += content; // Ha egy szám vagy sztring
      }
      rowstr += element.replace(/</, "</"); // </td>
    }
    return rowstr + "</tr>\n";
  }

  // Fejléc
  tablestr += createRow(cols, "<th>", (n) => "Adat " + n);
  // Sorok generálása
  for (let k = 0; k < rows; k++) {
    tablestr += createRow(cols, "<td>", 0);
  }
  // Vége
  tablestr += "</tbody>\n</table>";
  console.log(tablestr);
  return tablestr;
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
    $("msg").innerHTML += "<br>" + msg;
  } else {
    $("msg").innerHTML = msg;
  }
  console.log(msg);
}

//------------------
//Számítások
//------------------

//számoló függvény
//elvégzi a táblázat sorainak és oszlopainak összeadását
function szamol(e) {
  let T = $("tab");
  let rows = Array.from(T.rows);

  // Sorok összegének számítása
  rows.forEach(row => {
    let cells = Array.from(row.cells);
    let sum = cells.slice(0, -1).reduce((acc, cell) => acc + parseFloat(cell.textContent), 0);
    cells[cells.length - 1].textContent = sum;
  });

  // Oszlopok összegének számítása
  let cols = Array.from(T.rows[0].cells);
  cols.forEach((col, colIndex) => {
    let sum = rows.slice(0, -1).reduce((acc, row) => acc + parseFloat(row.cells[colIndex].textContent), 0);
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

  let T = $("tab"); //táblázat
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
    $("msg").innerHTML = "Cella szerkesztve";
  }

  //levesszük a szürke hátteret
  elem.style.backgroundColor = "inherit";
}

function generateNewTable() {
  let rowsInput = parseInt(document.getElementById("rowsInput").value);
  let colsInput = parseInt(document.getElementById("colsInput").value);
  let newTable = createTable("tab", rowsInput, colsInput, "Adatok");
  document.getElementById("tarto").innerHTML = newTable;
}

// Ne engedélyezzünk újsor karaktereket a cellákba
function key(e) {
  if (e.key === "Enter") {
    e.preventDefault();
    e.target.blur(); // Az újsor gombnyomásnak a blur eseménnyel való ekvivalenciája
  }
}

//eseménykezelők beállítása
window.onload = function () {
  let T = $("tab");

  T.addEventListener("click", click, false);
  $("szamol").addEventListener("click", szamol, false);
  T.addEventListener("keydown", key, false); // Keydown esemény hozzáadása
  $("newTableButton").addEventListener("click", generateNewTable); // Új táblázat gomb eseménykezelője
  document.addEventListener("blur", blurCapturing, true);

};
