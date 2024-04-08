// let xSlider, ySlider, radiusSlider, orizzontali;
// let xSlider = document.getElementById("slider-columns");
// let ySlider = document.getElementById("slider-rows");
// let radiusSlider = document.getElementById("slider-modules");
// let orizzontali = document.getElementById("slider-speed");
// let orizontal;

let colorButtons = [];
let formatiButtons = [];
let selectedColor;
let myCanvas;

/////////////////

offset = 0;

r1 = 1;

canvaw = 700;
canvah = 700;

/////////////////

function setup() {
  black = color(0, 0, 0);
  white = color(255, 255, 255);

  red = color(248, 43, 0);
  yellow = color(255, 166, 0);
  purple = color(126, 0, 166);

  blue = color(1, 40, 255);
  cyan = color(0, 206, 250);
  green = color(1, 224, 187);

  //////

  myCanvas = createCanvas(canvaw, canvah);
  myCanvas.parent("visual");

  angleMode(DEGREES);

  curva = 0;
  sposta = 0;

  ///////////////////////

  interaction();

  col = 1;
  form = 1;

  ///////////////////////
}

function draw() {
  if (col === 1) {
    palette1();
  }
  if (col === 2) {
    palette2();
  }
  if (col === 3) {
    palette3();
  }
  if (col === 4) {
    palette4();
  }
  if (col === 5) {
    palette5();
  }
  if (col === 6) {
    palette6();
  }
  if (col === 7) {
    palette7();
  }
  if (col === 8) {
    palette8();
  }
  if (col === 9) {
    palette9();
  }

  if (form === "1:1") {
    formato1();
    createCanvas(canvaw, canvah);
  }
  if (form === "16:9") {
    formato2();
    createCanvas(canvaw, canvah);
  }
  if (form === "4:3") {
    formato3();
    createCanvas(canvaw, canvah);
  }
  if (form === "9:16") {
    formato4();
    createCanvas(canvaw, canvah);
  }
  if (form === "3:4") {
    formato5();
    createCanvas(canvaw, canvah);
  }

  /////////////////////////

  background(0, 0, 0);

  let columns = xSlider.value();
  let righe = ySlider.value();
  let vel = radiusSlider.value();
  orizontal = orizzontaliSlider.value();

  number = columns;
  rows = righe;
  modulow = canvaw / number;
  moduloh = canvah;

  curv = 4;

  velocità = vel / (number * rows * orizontal);

  ///////////////////

  composizione();
}

///////////////////////

function interaction() {
  // Creazione degli slider

  xSlider = createSlider(3, 40, 10, 1);
  xSlider.parent("slider-1");
  xSlider.addClass("slider");
  createSliderValueDisplay(xSlider, 0);

  ySlider = createSlider(2, 20, 4, 2);
  ySlider.parent("slider-2");
  ySlider.addClass("slider");
  createSliderValueDisplay(ySlider, 1);

  orizzontaliSlider = createSlider(1, 20, 1);
  orizzontaliSlider.parent("slider-3");
  orizzontaliSlider.addClass("slider");
  createSliderValueDisplay(orizzontaliSlider, 2);

  radiusSlider = createSlider(0, 10, 2);
  radiusSlider.parent("slider-4");
  radiusSlider.addClass("slider");
  createSliderValueDisplay(radiusSlider, 3);

  // Creazione dei pulsanti dei colori
  let colors = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  for (let i = 0; i < colors.length; i++) {
    let button = createButton("");
    button.parent("colors-1");
    button.addClass("button-gradient");
    button.style("background", getGradientColor(colors[i]));
    button.mousePressed(() => {
      colorButtons.forEach((btn) => btn.removeClass("active-gradient"));
      button.addClass("active-gradient");
      col = colors[i];
    });
    if (i === 0) {
      button.addClass("active-gradient");
    }
    colorButtons.push(button);
  }

  function getGradientColor(col) {
    if (col === 1) {
      palette1();
    }
    if (col === 2) {
      palette2();
    }
    if (col === 3) {
      palette3();
    }
    if (col === 4) {
      palette4();
    }
    if (col === 5) {
      palette5();
    }
    if (col === 6) {
      palette6();
    }
    if (col === 7) {
      palette7();
    }
    if (col === 8) {
      palette8();
    }
    if (col === 9) {
      palette9();
    }
    return "linear-gradient(to right, " + c1 + ", " + c2 + ", " + c3 + ")";
  }

  // Creazione dei pulsanti dei formati
  let formati = ["1:1", "16:9", "4:3", "9:16", "3:4"];

  for (let i = 0; i < formati.length; i++) {
    let button2 = createButton(formati[i]);
    button2.parent("format");
    button2.mousePressed(() => {
      colorButtons.forEach((btn) => btn.removeClass("active"));
      button2.addClass("active");
      form = formati[i];
    });
    if (i === 0) {
      button2.addClass("active");
    }
    colorButtons.push(button2);
  }
}

// function createSliderValueDisplay(slider) {
//   let valueDisplay = createDiv();
//   valueDisplay.parent(slider.parent());
//   valueDisplay.addClass("slider-value");
//   updateSliderValueDisplay(valueDisplay, slider);
//   slider.input(() => updateSliderValueDisplay(valueDisplay, slider));
// }

function createSliderValueDisplay(slider, index) {
  let valueDisplay = createDiv();
  valueDisplay.parent(document.getElementsByClassName("slider-title")[index]);
  valueDisplay.addClass("slider-value");
  updateSliderValueDisplay(valueDisplay, slider);
  slider.input(() => updateSliderValueDisplay(valueDisplay, slider));
}

function updateSliderValueDisplay(valueDisplay, slider) {
  valueDisplay.html(slider.value());
}

function formato1() {
  //1:1
  canvaw = 700;
  canvah = 700;
}
function formato2() {
  //16:9
  canvaw = 700;
  canvah = 394;
}
function formato3() {
  //4:3
  canvaw = 700;
  canvah = 525;
}
function formato4() {
  //9:16
  canvaw = 394;
  canvah = 700;
}
function formato5() {
  //4:3
  canvaw = 525;
  canvah = 700;
}

function palette1() {
  c1 = black;
  c2 = red;
  c3 = black;
}
function palette2() {
  c1 = white;
  c2 = red;
  c3 = black;
}
function palette3() {
  c1 = white;
  c2 = red;
  c3 = white;
}
function palette4() {
  c1 = black;
  c2 = purple;
  c3 = red;
}
function palette5() {
  c1 = red;
  c2 = yellow;
  c3 = white;
}
function palette6() {
  c1 = purple;
  c2 = red;
  c3 = yellow;
}

function palette7() {
  c1 = black;
  c2 = blue;
  c3 = black;
}
function palette8() {
  c1 = blue;
  c2 = cyan;
  c3 = white;
}
function palette9() {
  c1 = blue;
  c2 = green;
  c3 = black;
}

function gradiente(partenza, altezza) {
  let gradient = drawingContext.createLinearGradient(0, partenza, 0, altezza);

  gradient.addColorStop(0.1, c1);
  gradient.addColorStop(0.8, c2);
  gradient.addColorStop(1, c3);

  drawingContext.fillStyle = gradient;
}

//////////////////////

function modulo1(x, e, f, r1) {
  noStroke();

  gradiente(magic1 * r1, moduloh);
  rect(x, magic1 * r1, modulow * f, moduloh - magic1 * r1);

  gradiente(0, magic1 * r1);
  rect(x, 0, modulow * f, magic1 * r1);

  fill(200);
}

function modulo2(z, m, sposta) {
  ritardo = 0.4;
  modulo1(z * modulow, m * 3.25 + ritardo, 1, sposta);
}

function modulo2a() {
  for (let z = 0; z < number / 2; z++) {
    variabile = r1;
    sposta += velocità;
    curva = sin(2 * (z * curv) + curv * 5);
    magic1 = sposta * curva;

    if (magic1 < moduloh + offset) {
      variabile = r1;
      modulo2(z, z, r1);
    } else {
      variabile = 0;
      modulo2(z, z, variabile);
      if (z === 0) {
        sposta = 0;
      }
    }
  }
}

function modulo3() {
  push();
  scale(1, -1);
  translate(0, -moduloh);

  modulo2a();

  push();
  scale(-1, 1);
  translate(-canvaw, 0);

  modulo2a();

  pop();
  pop();

  ////////////

  push();
  translate(0, moduloh);

  modulo2a();

  push();
  scale(-1, 1);
  translate(-canvaw, 0);

  modulo2a();

  pop();
  pop();
}

function modulo4() {
  for (let z1 = rows; z1 > 0; z1--) {
    push();
    strech = (1 / rows) * z1;
    strechw = 1;
    translate(0, canvah / 2 - moduloh * strech);
    scale(strechw, strech);
    modulo3();
    pop();
  }
}

/////////////////////

function composizione() {
  for (let z2 = orizontal; z2 > 0; z2--) {
    push();
    strech = 1;
    strechw = 1 / orizontal;
    translate(canvaw / 2 - (canvaw * strechw) / 2 + canvaw * strechw * (z2 / 2), 0);
    scale(strechw, strech);
    modulo4();
    pop();

    push();
    strech = 1;
    strechw = 1 / orizontal;
    translate(canvaw / 2 - (canvaw * strechw) / 2 - canvaw * strechw * (z2 / 2), 0);
    scale(strechw, strech);
    modulo4();
    pop();

    push();
    strech = 1;
    strechw = 1 / orizontal;
    translate(canvaw / 2 - (canvaw * strechw) / 2, 0);
    scale(strechw, strech);
    modulo4();
    pop();
  }
}
