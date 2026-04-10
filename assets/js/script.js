document.addEventListener('DOMContentLoaded', function () {

  // --- Google Translate corrections ---
  // Google Translate sometimes picks wrong translations for UI/nav terms.
  // We store the original English text and replace with correct translations per language.
  const navOverrides = {
    fr: {
      'Home':     'Accueil',
      'News':     'Actualités',
      'About':    'À propos',
      'Projects': 'Projets',
      'Output':   'Productions',
      'People':   'Équipe',
    },
    es: {
      'Home':     'Inicio',
      'News':     'Noticias',
      'About':    'Acerca de',
      'Projects': 'Proyectos',
      'Output':   'Producciones',
      'People':   'Equipo',
    },
  };

  const navLinks = document.querySelectorAll('.menu a');
  navLinks.forEach(link => {
    link.setAttribute('data-original', link.textContent.trim());
  });

  function applyNavOverrides() {
    const lang = (document.documentElement.lang || '').split('-')[0].toLowerCase();
    const overrides = navOverrides[lang];
    navLinks.forEach(link => {
      const original = link.getAttribute('data-original');
      if (!original) return;
      link.textContent = (overrides && overrides[original]) ? overrides[original] : original;
    });
  }

  new MutationObserver(applyNavOverrides).observe(
    document.documentElement,
    { attributes: true, attributeFilter: ['lang', 'class'] }
  );



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
