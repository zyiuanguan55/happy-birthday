const canvas = document.getElementById("fireworks");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

function createFirework(x, y) {
  for (let i = 0; i < 50; i++) {
    particles.push({
      x,
      y,
      radius: Math.random() * 2 + 1,
      dx: (Math.random() - 0.5) * 6,
      dy: (Math.random() - 0.5) * 6,
      life: 100
    });
  }
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach((p, i) => {
    p.x += p.dx;
    p.y += p.dy;
    p.life--;
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(255,182,193,0.8)";
    ctx.fill();
    if (p.life <= 0) particles.splice(i, 1);
  });
  requestAnimationFrame(animate);
}

canvas.addEventListener("click", e => {
  createFirework(e.clientX, e.clientY);
});

animate();

function playMusic() {
  document.getElementById("bgm").play();
}
