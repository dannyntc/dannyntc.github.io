(function () {
  const links = Array.from(document.querySelectorAll('.site-header nav a[href^="#"]'));
  const sections = links
    .map((link) => document.querySelector(link.getAttribute('href')))
    .filter(Boolean);

  if (!links.length || !sections.length) return;

  function setCurrent(sectionId) {
    links.forEach((link) => {
      const isCurrent = link.getAttribute('href') === `#${sectionId}`;
      link.classList.toggle('is-current', isCurrent);

      if (isCurrent) {
        link.setAttribute('aria-current', 'location');
      } else {
        link.removeAttribute('aria-current');
      }
    });
  }

  function syncCurrentSection() {
    const activationLine = Math.min(Math.max(window.innerHeight * 0.28, 120), 280);
    let currentSection = null;

    sections.forEach((section) => {
      if (section.getBoundingClientRect().top <= activationLine) {
        currentSection = section;
      }
    });

    setCurrent(currentSection ? currentSection.id : null);
  }

  let frameRequested = false;
  function requestSync() {
    if (frameRequested) return;

    frameRequested = true;
    window.requestAnimationFrame(() => {
      frameRequested = false;
      syncCurrentSection();
    });
  }

  window.addEventListener('scroll', requestSync, { passive: true });
  window.addEventListener('resize', requestSync);
  window.addEventListener('hashchange', requestSync);
  window.addEventListener('load', requestSync);
  links.forEach((link) => link.addEventListener('click', requestSync));

  syncCurrentSection();
})();
