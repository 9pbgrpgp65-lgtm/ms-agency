// Cursor glow
const glow = document.querySelector('.cursor-glow');
if (glow) {
  document.addEventListener('mousemove', e => {
    glow.style.left = e.clientX + 'px';
    glow.style.top  = e.clientY + 'px';
  });
}

// Animated counters
function animateCounter(el) {
  const to     = parseFloat(el.dataset.to);
  const suffix = el.dataset.suffix || '';
  const prefix = el.dataset.prefix || '';
  const dur    = 1400;
  const start  = performance.now();
  const tick   = now => {
    const p = Math.min((now - start) / dur, 1);
    const eased = 1 - Math.pow(1 - p, 3);
    el.textContent = prefix + Math.round(to * eased) + suffix;
    if (p < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}
const cntObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) { animateCounter(e.target); cntObs.unobserve(e.target); }
  });
}, { threshold: 0.6 });
document.querySelectorAll('[data-to]').forEach(el => cntObs.observe(el));

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

// Price calculator
const calcPacks = {
  starter: { name: 'Starter', price: '490', ht: '€ HT', desc: 'L\'essentiel pour exister en ligne. Site 1 page, design personnalise, livraison 48h.' },
  pro:     { name: 'Pro',     price: '790', ht: '€ HT', desc: 'Le site complet qui transforme vos visiteurs en clients. Multi-pages, SEO local, formulaires.' },
  premium: { name: 'Premium', price: '1 290', ht: '€ HT', desc: 'Pour dominer votre marche local. Animations premium, RDV en ligne, suivi analytics.' }
};
const sectorIsPro = ['garage','sante','artisan','autoecole'];

function updateCalc() {
  const sector = document.querySelector('.calc-btn.active')?.dataset.sector || 'restaurant';
  const needs  = document.querySelectorAll('.calc-need-item.checked').length;
  let pack;
  if (needs >= 3) pack = 'premium';
  else if (needs >= 1 || sectorIsPro.includes(sector)) pack = 'pro';
  else pack = 'starter';
  const d = calcPacks[pack];
  const el = id => document.getElementById(id);
  if (el('calcPack'))  el('calcPack').textContent  = d.name;
  if (el('calcPrice')) el('calcPrice').textContent = d.price;
  if (el('calcHt'))    el('calcHt').textContent    = d.ht;
  if (el('calcDesc'))  el('calcDesc').textContent  = d.desc;
}
document.querySelectorAll('.calc-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.calc-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    updateCalc();
  });
});
document.querySelectorAll('.calc-need-item').forEach(item => {
  item.addEventListener('click', () => {
    item.classList.toggle('checked');
    updateCalc();
  });
});

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
