// transition.js

function showOverlay() {
  const existing = document.getElementById('page-transition');
  if (existing) existing.remove();

  const overlay = document.createElement('div');
  overlay.id = 'page-transition';
  Object.assign(overlay.style, {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    backgroundColor: 'black',
    zIndex: '9999',
    opacity: '1',
    pointerEvents: 'none',
    transition: 'opacity 0.6s ease'
  });

  document.body.appendChild(overlay);

  setTimeout(() => {
    overlay.style.opacity = '0';
    setTimeout(() => overlay.remove(), 600);
  }, 50);
}

// Runs on full refresh / first load
window.addEventListener('load', () => {
  showOverlay();
});

// Listen for Wix-internal page changes
window.addEventListener('message', (ev) => {
  if (ev.data && ev.data.type === 'run-page-transition') {
    showOverlay();
  }
});
