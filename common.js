// mobile nav toggle + dropdown-tap-to-open on small screens + scroll reveal
document.addEventListener('DOMContentLoaded', function () {
  const toggle = document.getElementById('navtoggle');
  const links = document.getElementById('navlinks');
  if (toggle && links) {
    toggle.addEventListener('click', () => links.classList.toggle('open'));
  }
  if (window.innerWidth <= 980) {
    document.querySelectorAll('.navlinks > li').forEach(li => {
      const a = li.querySelector(':scope > a');
      const dd = li.querySelector('.dropdown');
      if (dd && a) {
        a.addEventListener('click', (e) => { e.preventDefault(); li.classList.toggle('open'); });
      }
    });
  }
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); obs.unobserve(e.target); } });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
});
