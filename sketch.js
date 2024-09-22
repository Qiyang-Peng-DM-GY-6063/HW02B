let newCanvas;
let backgroundColor;
let horizontalColor;
let verticalColor;
let bSwitch = 1;
let wSwitch = -1;
let hsSwitch = 1;
let vsSwitch = -1;

function setup() {
  newCanvas = createCanvas(525, 525);
  newCanvas.position((windowWidth - width) / 2, (windowHeight - height) / 2);
  colorMode(RGB, 255);

  b = 0;
  w = 255;
  a = 45;
  hs = 90;
  vs = 90;

  backgroundColor = color(252, 241, 226);

  background(backgroundColor);

  noStroke();

  verticalColor = color(w, w, w, 45);
  horizontalColor = color(b, b, b, 45);

  drawH(hs, vs);

  frameRate(20);
}

function draw() {
  //color

  b += bSwitch;
  w += wSwitch;

  if (b >= 255 || b <= 0) {
    bSwitch *= -1;
  }

  if (w >= 255 || w <= 0) {
    wSwitch *= -1;
  }

  //size

  hs += hsSwitch;
  vs += vsSwitch;

  if (hs >= 105 || hs <= 75) {
    hsSwitch *= -1;
  }

  if (vs >= 105 || vs <= 75) {
    vsSwitch *= -1;
  }

  verticalColor = color(w, w, w, a);
  horizontalColor = color(b, b, b, a);

  drawH(hs, vs);
}

function drawH(hs, vs) {
  //Line 1
  verticalShape(30, 30, vs, verticalColor);
  horizontalShape(120, 30, hs, horizontalColor);
  verticalShape(210, 30, vs, verticalColor);
  horizontalShape(300, 30, hs, horizontalColor);
  verticalShape(390, 30, vs, verticalColor);

  //Line 2
  horizontalShape(30, 120, hs, horizontalColor);
  verticalShape(120, 120, vs, verticalColor);
  horizontalShape(210, 120, hs, horizontalColor);
  verticalShape(300, 120, vs, verticalColor);
  horizontalShape(390, 120, hs, horizontalColor);

  //Line 3
  verticalShape(30, 210, vs, verticalColor);
  horizontalShape(120, 210, hs, horizontalColor);
  verticalShape(210, 210, vs, verticalColor);
  horizontalShape(300, 210, hs, horizontalColor);
  verticalShape(390, 210, vs, verticalColor);

  //Line 4
  horizontalShape(30, 300, hs, horizontalColor);
  verticalShape(120, 300, vs, verticalColor);
  horizontalShape(210, 300, hs, horizontalColor);
  verticalShape(300, 300, vs, verticalColor);
  horizontalShape(390, 300, hs, horizontalColor);

  //Line 5
  verticalShape(30, 390, vs, verticalColor);
  horizontalShape(120, 390, hs, horizontalColor);
  verticalShape(210, 390, vs, verticalColor);
  horizontalShape(300, 390, hs, horizontalColor);
  verticalShape(390, 390, vs, verticalColor);
}

function verticalShape(x, y, s, color) {
  fill(color);
  square(x, y, s);
  fill(backgroundColor);
  square(x + s / 3, y, s / 3);
  square(x + s / 3, y + (s * 2) / 3, s / 3);
}

function horizontalShape(x, y, s, color) {
  fill(color);
  square(x, y, s);
  fill(backgroundColor);
  square(x, y + s / 3, s / 3);
  square(x + (s * 2) / 3, y + s / 3, s / 3);
}

//credit artist: Vera Molnar
