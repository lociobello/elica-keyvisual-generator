let xSlider, ySlider, radiusSlider, orizzontali;
let colorButtons = [];
let formatiButtons = [];
let selectedColor;

/////////////////

offset = 0;

r1 = 1;

canvaw = 700;
canvah = 700;

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

  createCanvas(canvaw, canvah);

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

  if (form === 1) {
    formato1();
    createCanvas(canvaw, canvah);
  }
  if (form === 2) {
    formato2();
    createCanvas(canvaw, canvah);
  }
  if (form === 3) {
    formato3();
    createCanvas(canvaw, canvah);
  }
  if (form === 4) {
    formato4();
    createCanvas(canvaw, canvah);
  }
  if (form === 5) {
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

  //modulo4()

  composizione();

  ///////////////////

  document.getElementById("x-value").textContent = columns;
  document.getElementById("y-value").textContent = righe;
  document.getElementById("radius-value").textContent = vel;
  document.getElementById("orizzontale").textContent = orizontal;
  //document.getElementById("onda").textContent = orizontal;
}

///////////////////////

function interaction() {
  // Creazione degli slider

  xSlider = createSlider(1, 3, 1, 1);
  xSlider.position(20, height + 10);

  ySlider = createSlider(1, 20, 1, 1);
  ySlider.position(20, height + 40);

  orizzontaliSlider = createSlider(1, 5, 1);
  orizzontaliSlider.position(20, height + 70);

  radiusSlider = createSlider(0, 10, 1);
  radiusSlider.position(20, height + 100);

  ondaSlider = createSlider(1, 100, 1);
  ondaSlider.position(20, height + 130);

  // Creazione dei pulsanti dei colori
  let colors = [1, 2, 3];

  let buttonWidth = width / colors.length;
  for (let i = 0; i < colors.length; i++) {
    let button = createButton("");
    button.position(i * buttonWidth, height + 160);
    button.size(buttonWidth, 30);
    button.style("background-color", colors[i]);
    button.mousePressed(() => {
      col = colors[i];
    });
    colorButtons.push(button);
  }

  // Creazione dei pulsanti dei formati
  let formati = [1, 2, 3, 4, 5];

  let buttonWidth2 = width / colors.length;
  for (let i = 0; i < formati.length; i++) {
    let button2 = createButton("");
    button2.position(i * buttonWidth + i * 5, height + 250);
    button2.size(buttonWidth, 20);
    button2.style("background-color", color(20, 20, 20));
    button2.mousePressed(() => {
      form = formati[i];
    });
    colorButtons.push(button2);
  }
}

function formato1() {
  //1:1

  canvaw = 700;
  canvah = 700;
}
function formato2() {
  ///16:9

  canvaw = 700;
  canvah = 394;
}
function formato3() {
  ///4:3

  canvaw = 700;
  canvah = 525;
}
function formato4() {
  ///9:16

  canvaw = 394;
  canvah = 700;
}
function formato5() {
  ///4:3

  canvaw = 525;
  canvah = 700;
}

function palette1() {
  c1 = black;
  c2 = blue;
  c3 = black;
}
function palette2() {
  c1 = blue;
  c2 = cyan;
  c3 = white;
}
function palette3() {
  c1 = blue;
  c2 = green;
  c3 = black;
}

function gradiente(partenza, altezza) {
  let gradient = drawingContext.createLinearGradient(partenza, 0, altezza, 0);

  gradient.addColorStop(0.1, c1);
  gradient.addColorStop(0.8, c2);
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

  gradiente(+modulow, modulow / 2 - magic1);
  rect(0 + modulow, x, -magic1 - modulow / 2, moduloh);

  fill(200);
}

function modulo1(x, e, f, r1) {
  noStroke();

  gradiente(0, modulow / 2 - magic1);
  rect(0, x, modulow / 2 - magic1, moduloh);

  gradiente(+modulow, modulow / 2 - magic1);
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

  c1 = c2;
  c2 = c3;
  c3 = c1;

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

    //  push()
    //  strech=1
    //  strechw=(1/(rows))
    //  translate((canvaw/2)-((canvaw*strechw)/2),0)
    //  scale(strechw,strech)
    //  modulo3()
    //  pop()
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

    //  push()
    //  strech=(1/(orizontal))
    //  strechw=1
    //  translate(0,((canvah*strech)*z2))
    //  scale(strechw,-strech)
    //  modulo4()
    //  pop()
  }
}
