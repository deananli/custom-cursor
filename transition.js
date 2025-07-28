// transition.js

if (!document.querySelector('#page-transition')) {
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

  // Fade it out after 500ms
  setTimeout(() => {
    overlay.style.opacity = '0';
    setTimeout(() => {
      overlay.remove();
    }, 500);
  }, 100);
}
