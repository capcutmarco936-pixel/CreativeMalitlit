// Portfolio filter
function filterPortfolio(cat, btn) {
  document.querySelectorAll('.filter-btn').forEach((b) => b.classList.remove('active'));
  btn.classList.add('active');
  document.querySelectorAll('.portfolio-item').forEach((item) => {
    if (item.dataset.category === cat) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}
// Show static by default
document.addEventListener('DOMContentLoaded', () =>
  filterPortfolio('static', document.querySelector('.filter-btn.active')),
);

// Scroll reveal
const reveals = document.querySelectorAll('.reveal');

function checkReveals() {
  reveals.forEach((el) => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight + 100) {
      el.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', checkReveals);
window.add;
window.addEventListener('load', checkReveals);
checkReveals();
setTimeout(checkReveals, 300);
