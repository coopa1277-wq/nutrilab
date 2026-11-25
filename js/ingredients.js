// ── TABS ────────────────────────────────────────────────────────
function switchTab(panelId, btn) {
  // Hide all panels
  document.querySelectorAll('.panel').forEach(function(p) {
    p.classList.remove('active');
    p.style.display = 'none';
  });
  // Deactivate all tabs
  document.querySelectorAll('.tab').forEach(function(t) {
    t.classList.remove('active');
  });
  // Show target panel
  const panel = document.getElementById('panel-' + panelId);
  if (panel) {
    panel.style.display = 'block';
    panel.classList.add('active');
  }
  // Activate tab
  btn.classList.add('active');
  // Scroll to explore section
  const section = document.getElementById('explore');
  if (section) {
    const top = section.getBoundingClientRect().top + window.pageYOffset - 16;
    window.scrollTo({ top: top, behavior: 'smooth' });
  }
}

// Ensure only first panel is visible on load
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.panel').forEach(function(p, i) {
    if (i === 0) {
      p.style.display = 'block';
      p.classList.add('active');
    } else {
      p.style.display = 'none';
      p.classList.remove('active');
    }
  });
});

// ── REFS ────────────────────────────────────────────────────────
function toggleRefs(trigger) {
  const chevron = trigger.querySelector('.refs-chevron');
  const content = trigger.parentElement.querySelector('.refs-content');
  const isOpen = content.classList.contains('open');
  if (isOpen) {
    content.classList.remove('open');
    chevron.classList.remove('open');
  } else {
    content.classList.add('open');
    chevron.classList.add('open');
  }
}
