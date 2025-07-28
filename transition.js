// transition.js

function createOverlay() {
  const existing = document.querySelector('#page-transition');
  if (existing) return existing;

  const overlay = document.createElement('div');
  overlay.id = 'page-transition';
  overlay.style.position = 'fixed';
  overlay.style.top = 0;
  overlay.style.left = 0;
  overlay.style.width = '100vw';
  overlay.style.height = '100vh';
  overlay.style.backgroundColor = 'black';
  overlay.style.zIndex = '9999';
  overlay.style.opacity = '1';
  overlay.style.pointerEvents = 'none';
  overlay.style.transition = 'opacity 0.8s ease';

  document.body.appendChild(overlay);
  return overlay;
}

function fadeInOverlay() {
  const overlay = createOverlay();
  overlay.style.opacity = '1';
}

function fadeOutOverlay() {
  const overlay = document.querySelector('#page-transition');
  if (!overlay) return;
  overlay.style.opacity = '0';
  setTimeout(() => {
    overlay.remove();
  }, 1000);
}

// On load (initial visit or full refresh)
window.addEventListener('load', () => {
  fadeInOverlay();
  setTimeout(() => fadeOutOverlay(), 200);
});

// On Wix internal page change
window.addEventListener('pageshow', () => {
  fadeInOverlay();
  setTimeout(() => fadeOutOverlay(), 200);
});
