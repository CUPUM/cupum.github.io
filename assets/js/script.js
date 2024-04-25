document.addEventListener('DOMContentLoaded', function() {
  let current = 0;
  const items = document.querySelectorAll('.carousel-item');
  const totalItems = items.length;

  // Function to change to the next item
  function nextItem() {
    items[current].classList.remove('active');
    current = (current + 1) % totalItems;
    items[current].classList.add('active');
  }

  // Initially activate the first item
  if (totalItems > 0) {
    items[0].classList.add('active');
  }

  // Rotate items every 5 seconds
  setInterval(nextItem, 5000);
});

document.addEventListener('DOMContentLoaded', function() {
  const newsTitles = document.querySelectorAll('.news-list li');

  newsTitles.forEach(title => {
      title.addEventListener('mouseover', function() {
          const imgPath = this.getAttribute('data-img');
          document.getElementById('newsImg').src = imgPath;
      });

      title.addEventListener('mouseout', function() {
          // Optional: reset to default image or keep the last hovered image
          // document.getElementById('newsImg').src = 'path/to/initial/image.jpg';
      });
  });
});

// script.js

function toggleMenu() {
  var menu = document.querySelector('.menu');
  if (menu.style.display === 'block') {
      menu.style.display = 'none';
  } else {
      menu.style.display = 'block';
  }
}