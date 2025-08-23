document.getElementById('year').textContent = new Date().getFullYear();
const toggle = document.getElementById('themeToggle');
const applyTheme = (mode) => {
  document.documentElement.dataset.theme = mode;
  document.documentElement.style.colorScheme = mode;
  document.body.style.background = 'var(--bg)';
};

(function initTheme() {
  const saved = localStorage.getItem('theme');
  if (saved) applyTheme(saved);
})();

toggle?.addEventListener('click', () => {
  const current = document.documentElement.dataset.theme || 
    (matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
  const next = current === 'dark' ? 'light' : 'dark';
  localStorage.setItem('theme', next);
  applyTheme(next);
  toggle.setAttribute('aria-pressed', String(next === 'dark'));
});

// ===== Mock form submit =====
function handleSubmit(e) {
  e.preventDefault();
  const status = document.getElementById('formStatus');
  status.textContent = 'Sending…';
  setTimeout(() => {
    status.textContent = 'Thanks! Your message has been sent (demo).';
    e.target.reset();
  }, 700);
}
