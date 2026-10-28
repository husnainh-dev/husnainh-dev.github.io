(function () {
  document.getElementById('year').textContent = new Date().getFullYear();

  var nav = document.querySelector('.nav');
  var toggle = document.querySelector('.nav-toggle');
  var links = document.getElementById('nav-links');

  toggle.addEventListener('click', function () {
    var open = links.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open);
  });
  links.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') {
      links.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    }
  });

  window.addEventListener('scroll', function () {
    nav.classList.toggle('scrolled', window.scrollY > 10);
  }, { passive: true });

  if ('IntersectionObserver' in window) {
    var els = document.querySelectorAll('.section .card, .section-title, .sub-title');
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add('visible'); io.unobserve(en.target); }
      });
    }, { threshold: 0.12 });
    els.forEach(function (el) { el.classList.add('reveal'); io.observe(el); });
  }
})();
