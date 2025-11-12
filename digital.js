const canvas = document.getElementById('digital-lines');
const ctx = canvas.getContext('2d');
let lines = [];
let w, h;

function resize() {
  w = canvas.width = window.innerWidth;
  h = canvas.height = document.getElementById('logo').offsetHeight;
}
window.addEventListener('resize', resize);
resize();

for(let i=0;i<50;i++){
  lines.push({
    x: Math.random()*w,
    y: Math.random()*h,
    l: 20 + Math.random()*30,
    speed: 1 + Math.random()*2
  });
}

function animate(){
  ctx.clearRect(0,0,w,h);
  ctx.strokeStyle = 'rgba(0,200,255,0.15)';
  ctx.lineWidth = 2;
  for(let line of lines){
    ctx.beginPath();
    ctx.moveTo(line.x, line.y);
    ctx.lineTo(line.x, line.y + line.l);
    ctx.stroke();
    line.y += line.speed;
    if(line.y > h) line.y = -line.l;
  }
  requestAnimationFrame(animate);
}

animate();
