(function () {
  if (!window.__pageTransitionInitialized) {
    window.__pageTransitionInitialized = true;

    function showOverlay() {
      let overlay = document.getElementById('page-transition');
      if (!overlay) {
        overlay = document.createElement('div');
        overlay.id = 'page-transition';
        overlay.style.position = 'fixed';
        overlay.style.top = '0';
        overlay.style.left = '0';
        overlay.style.width = '100vw';
        overlay.style.height = '100vh';
        overlay.style.backgroundColor = 'black';
        overlay.style.zIndex = '9999';
        overlay.style.pointerEvents = 'none';
        overlay.style.opacity = '0';
        overlay.style.transition = 'opacity 0.6s ease-in-out';

        document.body.appendChild(overlay);
      }

      // Trigger the fade in
      overlay.style.opacity = '1';

      // Then fade it back out
      setTimeout(() => {
        overlay.style.opacity = '0';
      }, 200); // visible for a moment

      // Optional: remove after fade out to clean up
      setTimeout(() => {
        overlay.remove();
      }, 1000);
    }

    // Listen for Wix postMessage
    window.addEventListener('message', (ev) => {
      if (ev.data && ev.data.type === 'run-page-transition') {
        showOverlay();
      }
    });

    // Also run on initial load
    window.addEventListener('DOMContentLoaded', showOverlay);
  }
})();
