//a feladatot másként is meg lehet oldani mint a javasolt forma

const MIN = -6; //eddig fusson a számláló
const MAX = +6;

var interval = null; //setInterval id

//plus gomb
function plus(e) {
  const form = this.form;
  const input = form.szam;
  let val = Number(input.value);

  if (val >= MAX) {
    this.disabled = true;
    return;
  }

  input.value = 1 + val;
}

function minus(e) {
  //
}

let timer_plus = 0;
let timer_minus = 0;

function mouseDown() {
  const t = Date.now();
  console.log(this.name, t);
  if (this.name == "plus") {
    timer_plus = t;
  } else {
    timer_minus = t;
  }
}

function mouseUp() {
  let time;
  if (this.name == "plus") {
    time = Date.now() - timer_plus;
    timer_plus = 0;
  } else {
    time = Date.now() - timer_minus;
    timer_minus = 0;
  }
  console.log(time);
}

window.onload = function () {
  $("#plus").addEventListener("click", plus, false);
  $("#minus").addEventListener("click", minus, false);

  $("#plus").addEventListener("mousedown", mouseDown, false);
  $("#minus").addEventListener("mousedown", mouseDown, false);
  $("#plus").addEventListener("mouseup", mouseUp, false);
  $("#minus").addEventListener("mouseup", mouseUp, false);
};
