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
  let lastX = 0;
let lastY = 0;
  
  const cursor = document.getElementById('custom-cursor');

  // No transition on transform by default
  cursor.style.transition = 'none';

  document.addEventListener('mousemove', (e) => {
    const x = e.clientX - 9;
    const y = e.clientY - 9;
    lastX = e.clientX - 9;
lastY = e.clientY - 9;
cursor.style.transform = `translate(${lastX}px, ${lastY}px) scale(1)`;
  });

  // Apply transition *only* for click pulse
  document.addEventListener('mousedown', () => {
    cursor.style.transition = 'transform 0.05s ease';
    cursor.style.transform = `translate(${lastX}px, ${lastY}px) scale(1.8)`;
  });

  document.addEventListener('mouseup', () => {
    const computedStyle = getComputedStyle(cursor);
    const matrix = computedStyle.transform.match(/matrix.*\((.+)\)/);
    
    let translate = [0, 0];
    if (matrix) {
      const values = matrix[1].split(', ');
      translate = [parseFloat(values[4]), parseFloat(values[5])];
    }

    // Remove transition after click pulse finishes
    setTimeout(() => {
      cursor.style.transition = 'none';
      cursor.style.transition = 'transform 0.05s ease'; cursor.style.transform = `translate(${lastX}px, ${lastY}px) scale(1)`;
    }, 150);
  });
}



}

customElements.define('custom-cursor', CustomCursor);


