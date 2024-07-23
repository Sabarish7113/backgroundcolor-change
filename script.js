document.addEventListener('DOMContentLoaded', () => {
    const colors = [
      { bg: 'red'},
      { bg: 'yellow'},
      { bg: 'blue'},
      { bg: 'violet'},
      { bg: 'green'}
    ];
    let currentIndex = 0;
  
    const button = document.getElementById('colorButton');
    const colorName = document.getElementById('colorName');
  
    button.addEventListener('click', () => {
      const currentColor = colors[currentIndex];
      document.body.style.backgroundColor = currentColor.bg;
      colorName.textContent = `Background Color: ${currentColor.bg}`;
      currentIndex = (currentIndex + 1) % colors.length;
    });
  });
  