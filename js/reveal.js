/* ── nav: hairline appears once the page has moved ── */
(function () {
  var nav = document.getElementById('site-nav');
  if (!nav) return;
  function onScroll() {
    nav.classList.toggle('scrolled', window.scrollY > 24);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();

/* ── annotations reveal as the capsule comes upright ── */
(function () {
  var items = document.querySelectorAll('#annotation-stage .annot');
  if (!items.length) return;
  if (!('IntersectionObserver' in window)) {
    items.forEach(function (el) { el.classList.add('show'); });
    return;
  }
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) {
        var i = Array.prototype.indexOf.call(items, e.target);
        setTimeout(function () { e.target.classList.add('show'); }, i * 110);
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.4 });
  items.forEach(function (el) { io.observe(el); });
})();

/* ── one arrival for the whole page ──────────────────────────────
   Every section lifts its content in the same way as it comes into
   view, so moving down the page feels like one movement instead of
   a series of starts.
   ─────────────────────────────────────────────────────────────── */
(function () {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  if (!('IntersectionObserver' in window)) return;

  var groups = [
    '#page-hero .process h2', '#page-hero .step',
    '#page-hero .library-head', '#page-hero .ing-row',
    '#page-hero .chapter-body > *',
    '#page-hero .closer > *',
    '#page-about .mission > *', '#page-about .founder > *',
    '#page-about .value', '#page-about .about-step',
    '#page-about .compare > *', '#page-about .pharmacy > *'
  ];

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (!e.isIntersecting) return;
      e.target.classList.add('rv-in');
      io.unobserve(e.target);
    });
  }, { threshold: 0.18, rootMargin: '0px 0px -8% 0px' });

  var tracked = [];
  groups.forEach(function (sel) {
    var items = document.querySelectorAll(sel);
    for (var i = 0; i < items.length; i++) {
      var el = items[i];
      if (el.closest && el.closest('#annotation-stage')) continue;
      el.classList.add('rv');
      el.style.transitionDelay = Math.min(i, 6) * 80 + 'ms';
      io.observe(el);
      tracked.push(el);
    }
  });

  // A page that was hidden when the observer started gets a nudge when it
  // opens: anything already on screen is shown, so a missed callback can
  // never leave a section blank.
  function showWhatIsOnScreen() {
    var vh = window.innerHeight;
    tracked.forEach(function (el) {
      if (el.classList.contains('rv-in')) return;
      var r = el.getBoundingClientRect();
      if (r.width && r.top < vh && r.bottom > 0) el.classList.add('rv-in');
    });
  }
  var nativeShowPage = window.showPage;
  if (typeof nativeShowPage === 'function') {
    window.showPage = function () {
      var out = nativeShowPage.apply(this, arguments);
      setTimeout(showWhatIsOnScreen, 350);
      setTimeout(showWhatIsOnScreen, 1200);
      return out;
    };
  }
})();

/* ── hamburger state for assistive tech ── */
(function () {
  var b = document.getElementById('nav-hamburger');
  if (!b) return;
  var obs = new MutationObserver(function () {
    b.setAttribute('aria-expanded', b.classList.contains('open') ? 'true' : 'false');
  });
  obs.observe(b, { attributes: true, attributeFilter: ['class'] });
})();
