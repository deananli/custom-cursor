class CustomCursor extends HTMLElement {
  constructor() {
    super();
    this.cursor = document.createElement('div');
    this.cursor.id = 'custom-cursor';
    Object.assign(this.cursor.style, {
      width: '40px',
      height: '40px',
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
    document.addEventListener('mousemove', (e) => {
      this.cursor.style.transform = `translate(${e.clientX - 20}px, ${e.clientY - 20}px)`;
    });
  }
}

customElements.define('custom-cursor', CustomCursor);
