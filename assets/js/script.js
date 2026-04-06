document.addEventListener('DOMContentLoaded', function () {

  // --- Carousel ---
  const items = document.querySelectorAll('.carousel-item');
  if (items.length > 0) {
    let current = 0;
    items[0].classList.add('active');
    setInterval(function () {
      items[current].classList.remove('active');
      current = (current + 1) % items.length;
      items[current].classList.add('active');
    }, 5000);
  }

  // --- Hamburger menu ---
  const hamburger = document.querySelector('.hamburger');
  const menu = document.querySelector('.menu');
  if (hamburger && menu) {
    hamburger.addEventListener('click', function () {
      menu.classList.toggle('open');
    });
  }


  // --- Accordion ---
  document.querySelectorAll('.question-accordion').forEach(function (btn) {
    btn.addEventListener('click', function () {
      this.classList.toggle('active');
      var panel = this.nextElementSibling;
      if (panel) {
        panel.style.display = panel.style.display === 'block' ? 'none' : 'block';
      }
    });
  });

});
