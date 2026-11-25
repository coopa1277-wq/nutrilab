function toggleMobileMenu(){
  const hamburger = document.getElementById('nav-hamburger');
  const drawer = document.getElementById('nav-drawer');
  hamburger.classList.toggle('open');
  drawer.classList.toggle('open');
  // Prevent body scroll when menu open
  document.body.style.overflow = drawer.classList.contains('open') ? 'hidden' : '';
}

function navTo(page){
  // Close drawer first
  document.getElementById('nav-hamburger').classList.remove('open');
  const drawer = document.getElementById('nav-drawer');
  drawer.classList.remove('open');
  document.body.style.overflow = '';
  showPage(page);
}

// Close drawer when clicking outside
document.addEventListener('click', function(e){
  const drawer = document.getElementById('nav-drawer');
  const hamburger = document.getElementById('nav-hamburger');
  if(drawer && drawer.classList.contains('open')){
    if(!drawer.contains(e.target) && !hamburger.contains(e.target)){
      hamburger.classList.remove('open');
      drawer.classList.remove('open');
      document.body.style.overflow = '';
    }
  }
});
