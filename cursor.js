class CustomCursor extends HTMLElement {
  constructor() {
    super();

    // 🛑 Don't add another cursor if one already exists
    if (document.getElementById('custom-cursor')) return;

    this.cursor = document.createElement('div');
    this.cursor.id = 'custom-cursor';

    Object.assign(this.cursor.style, {
      width: '18px',
      height: '18px',
      position: 'fixed',
      top: '0',
      left: '0',
      borderRadius: '50%',
      backgroundColor: 'white',
      mixBlendMode: 'difference',
      pointerEvents: 'none',
      zIndex: '9999',
      transition: 'transform 0.05s ease'
    });

    document.body.appendChild(this.cursor);
  }

  connectedCallback() {
  const cursor = document.getElementById('custom-cursor');
  let mouseX = 0;
  let mouseY = 0;
  let currentX = 0;
  let currentY = 0;

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX - 9;
    mouseY = e.clientY - 9;
  });

 document.addEventListener('mousemove', (e) => {
  const x = e.clientX - 9; // adjust for cursor size
  const y = e.clientY - 9;
  cursor.style.transform = `translate(${x}px, ${y}px) scale(1)`;
});


  animate();

  // 💥 Click scale
  document.addEventListener('click', () => {
    if (cursor) {
      cursor.style.transition = 'transform 0.05s ease, scale 0.15s ease';
      cursor.style.transform = `translate(${currentX}px, ${currentY}px) scale(1.8)`;

      setTimeout(() => {
        cursor.style.transform = `translate(${currentX}px, ${currentY}px) scale(1)`;
      }, 150);
    }
  });
}

}

customElements.define('custom-cursor', CustomCursor);
