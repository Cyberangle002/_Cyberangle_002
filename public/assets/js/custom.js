// basic interactive bits: menu toggle, skill bars anim, contact mock submit, year, canvas matrix bg

document.addEventListener('DOMContentLoaded', function () {
  // year
  document.getElementById('year').textContent = new Date().getFullYear();

  // menu toggle
  const menuBtn = document.getElementById('menu-toggle');
  const navLinks = document.getElementById('nav-links');
  menuBtn && menuBtn.addEventListener('click', () => {
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
  });

  // animate skill bars
  const bars = document.querySelectorAll('.skill-bar .bar');
  bars.forEach(bar => {
    const level = bar.getAttribute('data-level') || '60';
    // small delay for nicer effect
    setTimeout(() => {
      bar.style.width = level + '%';
    }, 400);
  });

  // contact form fake submit
  window.submitContact = function(e){
    e.preventDefault();
    const form = document.getElementById('contact-form');
    const data = new FormData(form);
    // Here you can wire fetch to a serverless function; for demo we show a toast
    alert('Thanks ' + (data.get('name')||'') + '! Your message was received (demo).');
    form.reset();
  };

  // subtle matrix / particles background -- canvas
  (function matrixBg(){
    const canvas = document.getElementById('bg-canvas');
    if(!canvas) return;
    const ctx = canvas.getContext('2d');
    let w, h;
    function resize(){ w = canvas.width = innerWidth; h = canvas.height = innerHeight; }
    window.addEventListener('resize', resize);
    resize();

    const cols = Math.floor(w / 20) + 1;
    const ypos = Array(cols).fill(0);

    function draw(){
      ctx.fillStyle = 'rgba(6,7,10,0.08)';
      ctx.fillRect(0,0,w,h);
      ctx.fillStyle = 'rgba(0,255,138,0.06)';
      ctx.font = '14px monospace';

      ypos.forEach((y, ind) => {
        const text = String.fromCharCode(48 + Math.random() * 42);
        const x = ind * 20;
        ctx.fillText(text, x, y);
        if (y > 100 + Math.random() * 10000) ypos[ind] = 0;
        else ypos[ind] = y + 18;
      });
      requestAnimationFrame(draw);
    }
    draw();
  })();
});
