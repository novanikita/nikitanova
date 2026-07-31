(function () {
  const PAGE_TO_NAV = {
    "06-06.html": "portfolio.html",
    "60.html": "portfolio.html",
    "Dodo-dubai-package.html": "portfolio.html",
    "Dodo-new-identity.html": "portfolio.html",
    "How-to-properly-arrange-a-book-spine.html": "articles.html",
    "Street-wave-book.html": "portfolio.html",
    "a-100.html": "portfolio.html",
    "about.html": "about.html",
    "address-sign.html": "portfolio.html",
    "answers-to-6-popular-questions.html": "articles.html",
    "art-director-at-21.html": "video.html",
    "articles.html": "articles.html",
    "aura.html": "portfolio.html",
    "aviasales.html": "portfolio.html",
    "basquiat.html": "portfolio.html",
    "beauty.html": "articles.html",
    "brand-messages-poster.html": "portfolio.html",
    "chicha.html": "portfolio.html",
    "colored-lights-on-trams.html": "articles.html",
    "commo.html": "portfolio.html",
    "crypto-logo.html": "portfolio.html",
    "design-weekend.html": "video.html",
    "designers-and-customers.html": "articles.html",
    "dich.html": "portfolio.html",
    "division-in-the-design.html": "video.html",
    "dodo-app-promo.html": "portfolio.html",
    "dodo-auto.html": "portfolio.html",
    "dodo-book-cover.html": "portfolio.html",
    "dodo-hr-promo.html": "portfolio.html",
    "dodo-interior.html": "portfolio.html",
    "dodo-kidza-logo.html": "portfolio.html",
    "dodo-track.html": "portfolio.html",
    "drop-1.html": "portfolio.html",
    "drop-2.html": "portfolio.html",
    "drop-3.html": "portfolio.html",
    "drop-4.html": "portfolio.html",
    "drop-5.html": "portfolio.html",
    "ever-dream-this-cat.html": "portfolio.html",
    "drop-6.html": "portfolio.html",
    "eat-ded.html": "portfolio.html",
    "elafix-poster.html": "portfolio.html",
    "elafix.html": "portfolio.html",
    "essay.html": "portfolio.html",
    "film-cards.html": "portfolio.html",
    "film.html": "video.html",
    "frog.html": "portfolio.html",
    "gender-day.html": "portfolio.html",
    "how-did-designers-come-about.html": "articles.html",
    "how-to-finish.html": "video.html",
    "job-tips.html": "video.html",
    "kazan.html": "travels.html",
    "kirovez.html": "portfolio.html",
    "malica.html": "portfolio.html",
    "meme-park.html": "portfolio.html",
    "metro.html": "portfolio.html",
    "mid-90.html": "portfolio.html",
    "mural-1.html": "portfolio.html",
    "news.html": "portfolio.html",
    "novasti-1.html": "video.html",
    "novasti-10.html": "video.html",
    "novasti-11.html": "video.html",
    "novasti-12.html": "video.html",
    "novasti-13.html": "video.html",
    "novasti-14.html": "video.html",
    "novasti-15.html": "video.html",
    "novasti-16.html": "video.html",
    "novasti-17.html": "video.html",
    "novasti-18.html": "video.html",
    "novasti-19.html": "video.html",
    "novasti-2.html": "video.html",
    "novasti-20.html": "video.html",
    "novasti-3.html": "video.html",
    "novasti-4.html": "video.html",
    "novasti-5.html": "video.html",
    "novasti-6.html": "video.html",
    "novasti-7.html": "video.html",
    "novasti-8.html": "video.html",
    "out-of-university.html": "video.html",
    "pass-sign.html": "portfolio.html",
    "people-are-dumb.html": "articles.html",
    "pogodus.html": "portfolio.html",
    "portfolio.html": "portfolio.html",
    "pushkin.html": "travels.html",
    "refuse-my-dream.html": "video.html",
    "remember-the-name.html": "articles.html",
    "sap-soyz.html": "portfolio.html",
    "secret-of-productivity.html": "articles.html",
    "security-sign.html": "portfolio.html",
    "showcase-designers-work.html": "articles.html",
    "slavarik.html": "portfolio.html",
    "small-cities-signs.html": "portfolio.html",
    "staff-lettering.html": "portfolio.html",
    "symbol-of-progress.html": "articles.html",
    "take-a-step-back.html": "video.html",
    "travels.html": "travels.html",
    "tv.html": "portfolio.html",
    "veliky-novgorod.html": "travels.html",
    "video.html": "video.html",
    "vkusvill.html": "portfolio.html",
    "wibes.html": "portfolio.html",
    "we-can-do-anything.html": "video.html",
    "when-you-can-say-bad.html": "articles.html",
    "workshop-631.html": "portfolio.html",
    "write-every-day.html": "articles.html",
    "a-case.html": "portfolio.html",
    "zara-logo.html": "portfolio.html",
  };

  function getPageFilename(pathname) {
    const cleanPath = pathname.split("?")[0].split("#")[0];
    const parts = cleanPath.split("/").filter(Boolean);
    const last = parts.length ? parts[parts.length - 1] : "";
    if (!last || !last.endsWith(".html")) return "index.html";
    return last;
  }

  window.initActiveNav = function initActiveNav() {
    const nav = document.querySelector(".main-page-nav");
    if (!nav) return;

    const filename = getPageFilename(window.location.pathname);
    const activeTarget = PAGE_TO_NAV[filename];
    if (!activeTarget) return;

    nav.querySelectorAll(":scope > div:not(.language-switcher) > a").forEach(function (link) {
      const href = link.getAttribute("href") || "";
      const linkFile = href.split("/").pop().split("?")[0];
      const isActive = linkFile === activeTarget;

      link.classList.toggle("is-nav-active", isActive);
      if (isActive) {
        link.setAttribute("aria-current", "page");
      } else {
        link.removeAttribute("aria-current");
      }
    });
  };
})();
