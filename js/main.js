// ################## Navbar

const header = document.querySelector('header');

function stickyNavbar() {
  header.classList.toggle('scrolled', window.pageYOffset > 0);
}

stickyNavbar();

window.addEventListener('scroll', stickyNavbar);

// Scroll animation

let sr = ScrollReveal({
  duration: 2500,
  distance: '60px',
});

sr.reveal('.showcase-info', { delay: 500 });
sr.reveal('.showcase-image', { origin: 'top', delay: 600 });
