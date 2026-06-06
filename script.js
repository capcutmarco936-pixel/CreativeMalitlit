function switchTab(cat, btn) {
  document.querySelectorAll('.tab').forEach((b) => b.classList.remove('active'));
  btn.classList.add('active');
  document.querySelectorAll('.p-card').forEach((c) => {
    c.style.display = c.dataset.cat === cat ? 'flex' : 'none';
  });
}
function toggleFaq(btn) {
  const item = btn.parentElement;
  const isOpen = item.classList.contains('open');
  document.querySelectorAll('.faq-item').forEach((i) => i.classList.remove('open'));
  if (!isOpen) item.classList.add('open');
}
