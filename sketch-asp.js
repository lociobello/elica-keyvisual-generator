let xSlider, ySlider, radiusSlider, orizzontali;
// let xSlider = document.getElementById("slider-columns");
// let ySlider = document.getElementById("slider-rows");
// let radiusSlider = document.getElementById("slider-modules");
// let orizzontali = document.getElementById("slider-speed");
let orizontal;

let colorButtons = [];
let formatiButtons = [];
let selectedColor;
let myCanvas;

/////////////////

offset = 0;

r1 = 1;

canvaw = 800;
canvah = 800;

angle1 = 0;

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
  onda = ondaSlider.value();

  number = righe;
  rows = columns;

  modulow = canvaw / 2;
  moduloh = canvah / number;

  curv = 4;

  velocità = vel / (columns * righe * orizontal) / 20;

  acuto = 200 * onda;

  ///////////////////

  composizione();

  // document.getElementById("x-value").textContent = columns;
  // document.getElementById("y-value").textContent = righe;
  // document.getElementById("radius-value").textContent = vel;
  // document.getElementById("orizzontale").textContent = orizontal;
}

///////////////////////

function interaction() {
  // Creazione degli slider

  xSlider = createSlider(1, 3, 1, 1);
  xSlider.parent("slider-1");
  xSlider.addClass("slider");
  createSliderValueDisplay(xSlider, 0);

  ySlider = createSlider(1, 20, 6, 1);
  ySlider.parent("slider-2");
  ySlider.addClass("slider");
  createSliderValueDisplay(ySlider, 1);

  orizzontaliSlider = createSlider(1, 5, 1);
  orizzontaliSlider.parent("slider-3");
  orizzontaliSlider.addClass("slider");
  createSliderValueDisplay(orizzontaliSlider, 2);

  radiusSlider = createSlider(0, 10, 2);
  radiusSlider.parent("slider-4");
  radiusSlider.addClass("slider");
  createSliderValueDisplay(radiusSlider, 3);

  ondaSlider = createSlider(1, 100, 3);
  ondaSlider.parent("slider-5");
  ondaSlider.addClass("slider");
  createSliderValueDisplay(ondaSlider, 4);

  // Creazione dei pulsanti dei colori
  let colors = [1, 2, 3];

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
  canvaw = 800;
  canvah = 800;
}
function formato2() {
  //16:9
  canvaw = 1100;
  canvah = 574;
}
function formato3() {
  //4:3
  canvaw = 800;
  canvah = 600;
}
function formato4() {
  //9:16
  canvaw = 450;
  canvah = 800;
}
function formato5() {
  //4:3
  canvaw = 600;
  canvah = 800;
}

function palette1() {
  c1 = black;
  c2 = blue;
  c3 = white;
  c4 = black;
}
function palette2() {
  c1 = blue;
  c2 = cyan;
  c3 = white;
  c4 = blue;
}
function palette3() {
  c1 = green;
  c2 = blue;
  c3 = black;
  c4 = green;
}

function gradiente(partenza, altezza) {
  let gradient = drawingContext.createLinearGradient(partenza, 0, altezza, 0);

  gradient.addColorStop(0.1, c1);
  gradient.addColorStop(0.5, c2);
  gradient.addColorStop(1, c3);

  drawingContext.fillStyle = gradient;
}

//////////////////////

function modulo0(x, e, f, r1) {
  x = 0;
  e = 1;
  f = 1;
  r1 = 1;

  angle1 += 100 * e;
  let ang1 = radians(angle1 / 2);
  curva = cos(ang1 + e * acuto);

  magic1 = curva * (modulow / 2);
  percent = modulow * (magic1 / 600);

  noStroke();

  gradiente(0, modulow / 2 - magic1);
  rect(0, x, modulow / 2 - magic1, moduloh);

  gradiente(modulow, modulow / 2 - magic1);
  rect(0 + modulow, x, -magic1 - modulow / 2, moduloh);

  fill(200);
}

function modulo1(x, e, f, r1) {
  noStroke();

  gradiente(0, modulow / 2 - magic1);
  rect(0, x, modulow / 2 - magic1, moduloh);

  gradiente(modulow / 2 - magic1, modulow);
  rect(0 + modulow, x, -magic1 - modulow / 2, moduloh);

  fill(200);
}

function modulo2(z, m, sposta) {
  ritardo = 0.4;
  modulo1(z * moduloh, m * 3.25 + ritardo, 1, sposta);
}

function modulo2a() {
  for (let z = 0; z < number; z++) {
    variabile = r1;
    e = velocità * z;

    angle1 += 100 * e;
    let ang1 = radians(angle1 / 2);
    curva = cos(ang1 + e * acuto);

    magic1 = curva * (modulow / 2);
    percent = modulow * (magic1 / 600);

    modulo2(z, z, variabile);
  }
}

function modulo3() {
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

  push();
  scale(1, 0.5);
  translate(0, 0);

  modulo2a();

  push();
  scale(-1, 1);
  translate(-canvaw, 0);

  modulo2a();

  pop();
  pop();

  //////////

  push();
  scale(1, -0.5);

  translate(0, -canvah - canvah);

  // c4 = c1;

  // c1 = c2;
  // c2 = c3;
  // c3 = c4;

  // if (c3 === c1) {
  //   c3 = c2;
  // } else {
  //   c3 = c1;
  // }

  c1 = c3;
  c2 = c2;
  c3 = c4;
  c4 = c2;

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
    strech = 1;
    strechw = (1 / rows) * z1;
    translate(canvaw / 2 - (canvaw * strechw) / 2, 0);
    scale(strechw, strech);
    modulo3();
    pop();
  }
}

/////////////////////

function composizione() {
  for (let z2 = 0; z2 < orizontal; z2++) {
    push();
    strech = 1;
    strechw = 1 / orizontal;
    translate(canvaw * strechw * z2, 0);
    scale(strechw, strech);
    modulo4();
    pop();
  }
}

function download() {
  var activeButton = document.querySelector(".ob button.active");

  if (activeButton.id === "output-png") {
    downloadPNG();
  } else if (activeButton.id === "output-mp4") {
    downloadMP4();
  } else if (activeButton.id === "output-mov") {
    downloadMOV();
  } else {
    console.log("No active button found.");
  }
}

function downloadPNG() {
  saveCanvas(myCanvas, "elicaKeyVisual", "png");
}
