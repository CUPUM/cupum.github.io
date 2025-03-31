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
  document.querySelector('.menu').classList.toggle('open');
}
document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('.hamburger').addEventListener('click', toggleMenu);
});


var acc = document.getElementsByClassName("question-accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

document.addEventListener('DOMContentLoaded', function() {
  document.querySelector(".menu-toggle").addEventListener("click", toggleMenu);
});