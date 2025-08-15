// Mobile nav
const navToggle = document.getElementById('navToggle');
const nav = document.querySelector('.nav');
navToggle?.addEventListener('click', () => {
  nav.classList.toggle('nav--open');
});

// Year
document.getElementById('year').textContent = new Date().getFullYear();

// Scroll reveal
const revealEls = document.querySelectorAll('.reveal');
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('is-visible');
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.15 });
revealEls.forEach(el => io.observe(el));

// Light tilt (no library)
const clamp = (n, min, max) => Math.max(min, Math.min(n, max));
document.querySelectorAll('[data-tilt]').forEach(card => {
  let rect;
  const onMove = (e) => {
    rect = rect || card.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    const rotX = clamp((0.5 - py) * 8, -6, 6);
    const rotY = clamp((px - 0.5) * 8, -6, 6);
    card.style.transform = `perspective(900px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateY(-2px)`;
  };
  const reset = () => { card.style.transform = ''; rect = null; };
  card.addEventListener('mousemove', onMove);
  card.addEventListener('mouseleave', reset);
});

// Animate skill meters on view
const bars = document.querySelectorAll('.meter .bar i');
const metersIo = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      const el = e.target.querySelector('i');
      const width = el.style.width;
      el.style.width = '0%';
      setTimeout(() => { el.style.transition = 'width .9s ease'; el.style.width = width; }, 50);
      metersIo.unobserve(e.target);
    }
  });
}, { threshold: 0.2 });
document.querySelectorAll('.meter .bar').forEach(b => metersIo.observe(b));
