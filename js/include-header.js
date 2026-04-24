(function () {
  const mount = document.getElementById("site-header");
  if (!mount) return;
  const isEnglishPage = window.location.pathname.indexOf("/en/") !== -1;
  const partialPath = isEnglishPage
    ? "../partials/header-en.partial"
    : "partials/header.partial";

  fetch(partialPath)
    .then(function (response) {
      if (!response.ok) {
        throw new Error("Failed to load header partial");
      }
      return response.text();
    })
    .then(function (html) {
      mount.innerHTML = html;
      if (typeof window.initLanguageSwitcher === "function") {
        window.initLanguageSwitcher();
      }
    })
    .catch(function (error) {
      console.error(error);
    });
})();
