// HENEX static navigation interactions
(function () {
  const body = document.body;
  const toggle = document.querySelector('[data-nav-toggle]');
  const nav = document.querySelector('[data-site-nav]');

  if (!toggle || !nav) {
    return;
  }

  function closeNav() {
    body.classList.remove('nav-open');
    toggle.setAttribute('aria-expanded', 'false');
  }

  function openNav() {
    body.classList.add('nav-open');
    toggle.setAttribute('aria-expanded', 'true');
  }

  toggle.addEventListener('click', function () {
    const isOpen = body.classList.contains('nav-open');
    if (isOpen) {
      closeNav();
    } else {
      openNav();
    }
  });

  nav.addEventListener('click', function (event) {
    if (event.target.tagName === 'A') {
      closeNav();
    }
  });

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
      closeNav();
    }
  });
})();
