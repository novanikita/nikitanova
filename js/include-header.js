(function () {
  const isEnglishPage = window.location.pathname.indexOf("/en/") !== -1;

  function loadPartial(path, errorMessage) {
    return fetch(path).then(function (response) {
      if (!response.ok) {
        throw new Error(errorMessage);
      }
      return response.text();
    });
  }

  const mount = document.getElementById("site-header");
  const headerPartialPath = isEnglishPage
    ? "../partials/header-en.partial"
    : "partials/header.partial";
  const footerPartialPath = isEnglishPage
    ? "../partials/footer-en.partial"
    : "partials/footer.partial";

  function loadScript(src, datasetKey) {
    return new Promise(function (resolve) {
      const globalInitName = datasetKey === "footer-cat"
        ? "initFooterCatAnimation"
        : datasetKey === "nav-active"
          ? "initActiveNav"
          : null;

      if (globalInitName && typeof window[globalInitName] === "function") {
        resolve();
        return;
      }

      const existingScript = document.querySelector('script[data-include-script="' + datasetKey + '"]');
      if (existingScript) {
        existingScript.addEventListener("load", resolve, { once: true });
        existingScript.addEventListener("error", resolve, { once: true });
        return;
      }

      const script = document.createElement("script");
      script.src = src;
      script.dataset.includeScript = datasetKey;
      script.onload = resolve;
      script.onerror = resolve;
      document.body.appendChild(script);
    });
  }

  if (mount) {
    loadScript(
      isEnglishPage ? "../js/nav-active.js" : "js/nav-active.js",
      "nav-active"
    )
      .then(function () {
        return loadPartial(headerPartialPath, "Failed to load header partial");
      })
      .then(function (html) {
        mount.innerHTML = html;
        if (typeof window.initActiveNav === "function") {
          window.initActiveNav();
        }
        if (typeof window.initLanguageSwitcher === "function") {
          window.initLanguageSwitcher();
        }
      })
      .catch(function (error) {
        console.error(error);
      });
  }

  const footer = document.getElementById("site-footer");
  if (!footer) return;

  loadScript(
    isEnglishPage ? "../js/footer-cat.js" : "js/footer-cat.js",
    "footer-cat"
  )
    .then(function () {
      return loadPartial(footerPartialPath, "Failed to load footer partial");
    })
    .then(function (html) {
      footer.outerHTML = html;
      if (typeof window.initFooterCatAnimation === "function") {
        window.initFooterCatAnimation();
      }
      document.dispatchEvent(new CustomEvent("siteFooterLoaded"));
      if (typeof window.initLanguageSwitcher === "function") {
        window.initLanguageSwitcher();
      }
    })
    .catch(function (error) {
      console.error(error);
    });
})();
