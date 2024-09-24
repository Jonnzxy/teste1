// Particles.js - Biblioteca de partículas para criar efeitos visuais

class Particle {
    constructor(x, y) {
      this.x = x;
      this.y = y;
      this.vx = Math.random() * 2 - 1;
      this.vy = Math.random() * 2 - 1;
      this.radius = Math.random() * 2 + 1;
      this.color = `hsla(${Math.random() * 360}, 100%, 50%, 0.5)`;
    }
  
    update() {
      this.x += this.vx;
      this.y += this.vy;
  
      if (this.x + this.radius > window.innerWidth || this.x - this.radius < 0) {
        this.vx = -this.vx;
      }
  
      if (this.y + this.radius > window.innerHeight || this.y - this.radius < 0) {
        this.vy = -this.vy;
      }
    }
  
    draw(ctx) {
      ctx.fillStyle = this.color;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
      ctx.fill();
    }
  }
  
  class ParticleSystem {
    constructor() {
      this.particles = [];
      for (let i = 0; i < 100; i++) {
        this.particles.push(new Particle(Math.random() * window.innerWidth, Math.random() * window.innerHeight));
      }
    }
  
    update() {
      for (let i = 0; i < this.particles.length; i++) {
        this.particles[i].update();
      }
    }
  
    draw(ctx) {
      for (let i = 0; i < this.particles.length; i++) {
        this.particles[i].draw(ctx);
      }
    }
  }
  
  let canvas = document.getElementById('canvas');
  let ctx = canvas.getContext('2d');
  let particleSystem = new ParticleSystem();
  
  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particleSystem.update();
    particleSystem.draw(ctx);
    requestAnimationFrame(animate);
  }
  
  animate();