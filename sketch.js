let dotCoords;
let mouseCoords;
let constraint;

function setup() {
  const w = window.innerWidth;
  const h = window.innerHeight;
  createCanvas(w, h);
  frameRate(144);
  noCursor();
  dotCoords = createVector(w / 2, h / 2);
  mouseCoords = createVector(w / 2, h / 2);

  constraint = 50;
  background(0);
}

function draw() {
  background(0);
  mouseCoords.set(mouseX, mouseY);
  drawMouseCircle(mouseCoords);
  const distance = p5.Vector.dist(mouseCoords, dotCoords);
  if (distance >= constraint) {
    dotCoords = ConstrainDistance(dotCoords, mouseCoords, constraint);
  }
  drawDot(dotCoords);
}

function drawMouseCircle(pos) {
  fill(0);
  stroke(255);
  circle(pos.x, pos.y, constraint * 2);
}

function drawDot(pos) {
  fill(255);
  stroke(255);
  circle(pos.x, pos.y, 20);
}

function ConstrainDistance(point, anchor, distance) {
  let direction = p5.Vector.sub(point, anchor);
  direction.normalize();
  direction.mult(distance);
  return p5.Vector.add(anchor, direction);
}

window.onresize = function () {
  resizeCanvas(window.innerWidth, window.innerHeight);
};
