var megyek = {
  Alba: "Alba",
  Arad: "Arad",
  Arges: "Argeș",
  Bacau: "Bacău",
  Bihor: "Bihor",
  "Bistrita Nasaud": "Bistrița Năsaud",
  Botosani: "Botoșani",
  Brasov: "Brașov",
  Braila: "Brăila",
  Bucuresti: "București",
  Buzau: "Buzău",
  "Caras Severin": "Caraș Severin",
  Calarasi: "Calarași",
  Cluj: "Cluj",
  Constanta: "Constanța",
  Covasna: "Covasna",
  Dambovita: "Dambovița",
  Dolj: "Dolj",
  Galati: "Galați",
  Giurgiu: "Giurgiu",
  Gorj: "Gorj",
  Harghita: "Harghita",
  Hunedoara: "Hunedoara",
  Ialomita: "Ialomița",
  Iasi: "Iași",
  Ilfov: "Ilfov",
  Maramures: "Maramureș",
  Mehedinti: "Mehedinți",
  Mures: "Mureș",
  Neamt: "Neamț",
  Olt: "Olt",
  Prahova: "Prahova",
  "Satu Mare": "Satu Mare",
  Salaj: "Sălaj",
  Sibiu: "Sibiu",
  Suceava: "Suceava",
  Teleorman: "Teleorman",
  Timis: "Timiș",
  Tulcea: "Tulcea",
  Vaslui: "Vaslui",
  Valcea: "Valcea",
  Vrancea: "Vrancea",
};

//opciók beállítása innerHTML tulajdonsággal
function setOptions() {
  let options = '<option value="None" selected>Válasszon megyét</option>';
  for (let ix in megyek) {
    let o = `<option value="${ix}">${megyek[ix]}"</option>`;
    options += o;
  }
  document.getElementById("megye").innerHTML = options;
}

//opciók beállítása DOM függvényekkel
//
function setOptions1() {
  let select = document.getElementById("megye");

  let o = document.createElement("OPTION");
  o.setAttribute("value", "none");
  o.textContent = "Válasszon";
  select.appendChild(o);

  for (let ix in megyek) {
    let o = document.createElement("OPTION");
    o.setAttribute("value", ix);
    o.textContent = megyek[ix];
    select.appendChild(o);
  }
}

function checkSubmit(e) {
  if (this.megye.selectedIndex == 0) {
    e.preventDefault();
    $("#error").innerHTML = "Nincs kiválasztva a megye!";
  }
}

window.onload = function () {
  // setOptions();
  setOptions1();
  document
    .getElementById("tesztform")
    .addEventListener("submit", checkSubmit, false);
};
