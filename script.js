// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const navLinks = document.querySelector('.nav-links');

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('nav-links-open');
    navToggle.setAttribute('aria-expanded', isOpen);
  });

  // Close menu after clicking a link (mobile)
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('nav-links-open');
    });
  });
}

// Make each project card clickable — follows its "View Writeup" link,
// as long as that link actually points somewhere (skips "#" placeholders).
document.querySelectorAll('.project-card').forEach(card => {
  const writeupLink = card.querySelector('.project-links a');
  if (!writeupLink) return;

  const href = writeupLink.getAttribute('href');
  if (!href || href === '#') return;

  card.classList.add('project-card-clickable');
  card.addEventListener('click', (e) => {
    if (e.target.closest('a')) return; // let real links (View Writeup, GitHub) behave normally
    window.location.href = href;
  });
});
