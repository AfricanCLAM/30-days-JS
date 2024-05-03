const canvas = document.querySelector('#draw');
//ask for 2d context
const ctx = canvas.getContext('2d');

//size up the canvas by the exact size of current window
canvas.Width = window.innerWidth;
canvas.height = window.innerHeight;

//stroke settings
ctx.strokeStyle = '#BADA55';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 100;
ctx.globalCompositeOperation = 'multiply'; //allow color mixing

//dummy variables
let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = true;

function draw (e) {
  if (!isDrawing) return; //stop the function from running when they aren,t moused down
 ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
  ctx.beginPath();
  //start from
  ctx.moveTo(lastX,lastY);
  //go to
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
  [lastX,lastY] = [e.offsetX,e.offsetY]; //so that the stroke doesn't always start at lasX(0) and lasY(0)
 
 //hue value
  hue++;
  if (hue >= 360) {
    hue = 0;
  }
  if (ctx.lineWidth >= 100 || ctx.lineWidth <= 1) {
    direction = !direction;
  }
  if (direction) {
    ctx.lineWidth++;
  } else {
    ctx.lineWidth--;
  }
}

//canvas onmouse detection
canvas.addEventListener('mousedown', (e) => {
  isDrawing = true;
  [lastX,lastY] = [e.offsetX,e.offsetY];
});
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);