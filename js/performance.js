(function () {
  function lazyBackgrounds() {
    const items = document.querySelectorAll('[data-bg]');
    if (!items.length) return;

    const applyBg = function (el) {
      const bg = el.getAttribute('data-bg');
      if (!bg) return;
      el.style.backgroundImage = 'url("' + bg + '")';
      el.removeAttribute('data-bg');
    };

    if (!('IntersectionObserver' in window)) {
      items.forEach(applyBg);
      return;
    }

    const observer = new IntersectionObserver(
      function (entries, obs) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          applyBg(entry.target);
          obs.unobserve(entry.target);
        });
      },
      { rootMargin: '300px 0px' }
    );

    items.forEach(function (item) {
      observer.observe(item);
    });
  }

  function improveImages() {
    const images = document.querySelectorAll('img');
    images.forEach(function (img) {
      if (!img.hasAttribute('loading')) img.setAttribute('loading', 'lazy');
      if (!img.hasAttribute('decoding')) img.setAttribute('decoding', 'async');
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
      improveImages();
      lazyBackgrounds();
    });
  } else {
    improveImages();
    lazyBackgrounds();
  }
})();
