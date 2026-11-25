/* Navigation.
   Each page is its own document now, so changing page means following a link.
   showPage() keeps its name because the quiz and the chat widget call it, but
   all it does here is route. */
var ROUTES = { hero: '/', quiz: '/quiz', ingredients: '/ingredients', about: '/about' };

function currentPath() {
  var p = location.pathname.replace(/index\.html$/, '').replace(/\.html$/, '');
  return p.length > 1 ? p.replace(/\/$/, '') : '/';
}

function showPage(p) {
  var url = ROUTES[p];
  if (!url) return;
  if (currentPath() === url) { window.scrollTo(0, 0); return; }
  location.href = url;
}

// the nav CTA always starts a fresh assessment, even from inside the quiz
function goToQuiz() {
  if (currentPath() === '/quiz' && typeof state !== 'undefined' && typeof render === 'function') {
    Object.assign(state, { step: 'intro', history: [], sex: null, age: null, aspects: [],
                           answers: {}, aspIdx: 0, qIdx: 0, top2: [], formula: null, plan: 'monthly' });
    render();
    window.scrollTo(0, 0);
    return;
  }
  location.href = '/quiz';
}
