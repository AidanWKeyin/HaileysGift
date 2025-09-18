document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('collage-container');
  if (!container) return;

  // List of your photo URLs
  const photos = [
    'images/pic1.png',
    'images/pic2.png',
    'images/pic3.png',
    'images/pic4.png',
    'images/pic5.png',
    'images/pic6.png',
    'images/pic7.png',
    'images/pic8.png',
    'images/pic9.png',
    'images/pic10.png',
    'images/pic11.png',
    'images/pic12.png',
    'images/pic13.png',
    'images/pic14.png',
    'images/pic15.png',
    'images/pic16.png',
    'images/pic17.png',
    'images/pic18.png',
    'images/pic19.png',
    'images/pic20.png'
  ];

  const shapes = ['shape-circle', 'shape-rounded', 'shape-heart'];

  photos.forEach(src => {
    const img = document.createElement('img');
    img.src = src;
    img.classList.add('collage-photo');

    // random shape
    img.classList.add(shapes[Math.floor(Math.random() * shapes.length)]);

    // random size
    const size = 100 + Math.random() * 150; // 100px to 250px
    img.style.width = size + 'px';
    img.style.height = size + 'px';

    // random position
    img.style.top = Math.random() * 80 + '%';
    img.style.left = Math.random() * 80 + '%';

    // random rotation
    img.style.transform = `rotate(${Math.random() * 40 - 20}deg)`;

    container.appendChild(img);
  });
});
