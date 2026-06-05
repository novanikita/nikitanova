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

  if (mount) {
    loadPartial(headerPartialPath, "Failed to load header partial")
      .then(function (html) {
        mount.innerHTML = html;
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

  loadPartial(footerPartialPath, "Failed to load footer partial")
    .then(function (html) {
      footer.outerHTML = html;
      document.dispatchEvent(new CustomEvent("siteFooterLoaded"));
      if (typeof window.initLanguageSwitcher === "function") {
        window.initLanguageSwitcher();
      }
    })
    .catch(function (error) {
      console.error(error);
    });
})();
