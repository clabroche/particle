var canvas = document.querySelector("canvas");
var ctx = canvas.getContext("2d");
let w;
let h;
let particles = []
let color = "0,204,255";
let distanceLink = 100
const body = document.querySelector("body")
window.addEventListener('resize', debounce(() => {
  resize()
}, 250))
function resize() {
  w = window.innerWidth
  h = window.innerHeight
  canvas.width = w;
  canvas.height = h;
  seed()
}
function changeColor (_color) {
  color = _color
}

function seed(density = 50) {
  density = 100 - density
  maxDensity = 9000;
  minDensity = 3000
  density = ((density*(maxDensity - minDensity))/100) +minDensity
  density = (w * h) / (density);
  particles = Array(Math.floor(density)).fill('').map(_=> new Particle())
}

function draw() {
  ctx.fillStyle = "rgb(0,0,0)";
  ctx.fillRect(0, 0,w,h) 
}
function changeDistance(d) {
  distanceLink = d
}
setInterval(_=>{
  draw()
  particles.map((particle,i) => {
    const windowX = window.innerWidth
    const windowY = window.innerHeight
    if ((particle.x > 0 && particle.x < windowX) && (particle.y > 0 && particle.y < windowY)) 
      particle.move();
    else {
      particles.splice(i, 1);
      particles.push(new Particle())
    }
  });
  for (let i = 0; i < particles.length / 2; i++) {
    const particle1 = particles[i];
    for (let j = 0; j < particles.length; j++) {
      const particle2 = particles[j];
      const distance = Distance(particle1, particle2);
      if(distance < distanceLink) {
        ctx.strokeStyle = `rgba(${color},${1 - distance/distanceLink} )`
        ctx.beginPath();
        ctx.moveTo(particle1.x, particle1.y);
        ctx.lineTo(particle2.x, particle2.y)
        ctx.stroke()
      }
    }
  } 
})
resize()