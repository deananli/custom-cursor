// transition.js

function createOverlay() {
  const existing = document.getElementById('page-transition');
  if (existing) existing.remove();

  const overlay = document.createElement('div');
  overlay.id = 'page-transition';
  overlay.style.position = 'fixed';
  overlay.style.top = 0;
  overlay.style.left = 0;
  overlay.style.width = '100vw';
  overlay.style.height = '100vh';
  overlay.style.backgroundColor = 'black';
  overlay.style.zIndex = '9999';
  overlay.style.transition = 'opacity 0.5s ease';
  overlay.style.opacity = '1';
  overlay.style.pointerEvents = 'none';
  document.body.appendChild(overlay);

  setTimeout(() => {
    overlay.style.opacity = '0';
    setTimeout(() => {
      overlay.remove();
    }, 500);
  }, 50);
}

// Run on initial load
createOverlay();

// Watch for Wix navigation
const observer = new MutationObserver(() => {
  if (window.location.href !== observer.lastUrl) {
    observer.lastUrl = window.location.href;
    createOverlay();
  }
});
observer.lastUrl = window.location.href;
observer.observe(document.body, { childList: true, subtree: true });
