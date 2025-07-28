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
    const x = e.clientX - 9; // half of 18px for centering
    const y = e.clientY - 9;
    cursor.style.transform = `translate(${x}px, ${y}px) scale(1)`;
  });

  // 💥 Click pulse animation
  document.addEventListener('mousedown', () => {
    cursor.style.transition = 'transform 0.05s ease, scale 0.15s ease';
    cursor.style.transform += ' scale(1.8)';
  });

  document.addEventListener('mouseup', () => {
    const computedStyle = getComputedStyle(cursor);
    const matrix = computedStyle.transform.match(/matrix.*\((.+)\)/);
    
    // Extract translateX and translateY from current transform
    let translate = [0, 0];
    if (matrix) {
      const values = matrix[1].split(', ');
      translate = [parseFloat(values[4]), parseFloat(values[5])];
    }

    cursor.style.transform = `translate(${translate[0]}px, ${translate[1]}px) scale(1)`;
  });
}


}

customElements.define('custom-cursor', CustomCursor);
