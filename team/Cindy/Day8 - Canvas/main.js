const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d');
const colorInput = document.querySelector('#color');
const sizeInput = document.querySelector('#size');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let color = "#ffc600";
let size = 50;
ctx.lineJoin = 'round';
ctx.lineCap = 'round';

const draw = (e) => {
  if (!isDrawing) return;
  // console.log(e);
  ctx.lineWidth = size;
  ctx.strokeStyle = color;
  ctx.beginPath();
  // start from
  ctx.moveTo(lastX, lastY);
  // go to
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
  [lastX, lastY] = [e.offsetX, e.offsetY];
}

const updateColor = (e) => {
  color = e.target.value;
}

const updateSize = (e) => {
  size = e.target.value;
}

canvas.addEventListener('mousedown', (e) => {
  isDrawing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY];
});

colorInput.addEventListener('input', updateColor);
sizeInput.addEventListener('input', updateSize);
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);
