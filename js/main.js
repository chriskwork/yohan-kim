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

// sr.reveal('.showcase-info', { delay: 500 });
// sr.reveal('.showcase-image', { origin: 'top', delay: 600 });

// ################## Skills

const firstSkill = document.querySelector('.skill:first-child');
const skCounters = document.querySelectorAll('.counter span');
const progressBars = document.querySelectorAll('.skills svg circle');

window.addEventListener('scroll', () => {
  if (!skillsPlayed) skillsCounter();
});

function hasReached(el) {
  let topPosition = el.getBoundingClientRect().top;

  if (window.innerHeight >= topPosition + el.offsetHeight) {
    return true;
  } else {
    return false;
  }
}

function updateCount(num, maxNum) {
  let currentNum = +num.innerText;

  if (currentNum < maxNum) {
    num.innerText = currentNum + 1;
    setTimeout(() => {
      updateCount(num, maxNum);
    }, 12);
  }
}

let skillsPlayed = false;

function skillsCounter() {
  if (!hasReached(firstSkill)) return;

  skillsPlayed = true;

  skCounters.forEach((counter, i) => {
    let target = +counter.dataset.target;
    let strokeVal = 427 - 427 * (target / 100);

    progressBars[i].style.setProperty('--target', strokeVal);

    setTimeout(() => {
      updateCount(counter, target);
    }, 400);
  });

  progressBars.forEach((p) => {
    p.style.animation = 'progress 2s ease-in-out forwards';
  });
}
