// Nav pill scroll
const pill = document.getElementById('navPill');
if (pill) {
  window.addEventListener('scroll', () => {
    pill.classList.toggle('scrolled', window.scrollY > 80);
  });
}

// Reveal on scroll
const obs = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.07, rootMargin: '0px 0px -24px 0px' });
document.querySelectorAll('.reveal').forEach(el => obs.observe(el));

// Active nav link
const path = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-links a, .nav-mobile a').forEach(a => {
  const href = a.getAttribute('href');
  if (href && href === path) a.classList.add('active');
});

// Mobile burger
const burger = document.getElementById('navBurger');
const mobileNav = document.getElementById('mobileNav');
if (burger && mobileNav) {
  burger.addEventListener('click', () => mobileNav.classList.toggle('open'));
  document.addEventListener('click', e => {
    if (!burger.contains(e.target) && !mobileNav.contains(e.target)) {
      mobileNav.classList.remove('open');
    }
  });
}

// Contact form
function handleForm(e) {
  e.preventDefault();
  const btn = e.target.querySelector('.form-submit');
  btn.textContent = 'Demande envoyee — On vous rappelle !';
  btn.style.background = '#16A34A';
  btn.disabled = true;
  e.target.reset();
  setTimeout(() => {
    btn.textContent = 'Envoyer ma demande';
    btn.style.background = '';
    btn.disabled = false;
  }, 5000);
}
