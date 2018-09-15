function Particle(
    x = Math.random() * window.innerWidth,
    y = Math.random() * window.innerHeight,
    rayon = 1,
) {
    this.x = x;
    this.y = y;
    this.rayon = rayon;
    this.angle = Math.random() * 360;
    this.speed = Math.floor((Math.random() * 2)) + 1;
}
Particle.prototype.draw = function () {
    ctx.beginPath()
    ctx.arc(this.x, this.y, this.rayon, 0, Math.PI * 2)
    ctx.fill()
}
Particle.prototype.move = function () {
    ctx.fillStyle = `rgb(${color})`
    this.x += this.speed * Math.cos(this.angle * Math.PI / 180);
    this.y += this.speed * Math.sin(this.angle * Math.PI / 180);
    this.draw()
}