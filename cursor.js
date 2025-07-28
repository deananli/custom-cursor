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
    document.addEventListener('mousemove', (e) => {
      if (cursor) {
        cursor.style.transform = `translate(${e.clientX - 10}px, ${e.clientY - 10}px)`;
      }
    });
  }
}

customElements.define('custom-cursor', CustomCursor);
