(function () {
  window.initFooterCatAnimation = function initFooterCatAnimation() {
    const footerCatImage = document.querySelector(".portfolio-footer__cat img");
    if (!footerCatImage || footerCatImage.dataset.catAnimationReady === "true") {
      return;
    }

    const defaultSrc = footerCatImage.getAttribute("src");
    if (!defaultSrc) {
      return;
    }

    footerCatImage.dataset.catAnimationReady = "true";

    const basePath = defaultSrc.replace(/cat-1\.png$/, "");
    const cat = function (index) {
      return basePath + "cat-" + index + ".png";
    };

    footerCatImage.addEventListener("mousemove", function (event) {
      const rect = footerCatImage.getBoundingClientRect();
      const relativeX = event.clientX - rect.left;
      const zone = relativeX / rect.width;

      if (zone < 1 / 5) {
        footerCatImage.src = cat(2);
      } else if (zone < 2 / 5) {
        footerCatImage.src = cat(3);
      } else if (zone < 3 / 5) {
        footerCatImage.src = cat(4);
      } else if (zone < 4 / 5) {
        footerCatImage.src = cat(5);
      } else {
        footerCatImage.src = cat(6);
      }
    });

    footerCatImage.addEventListener("mouseleave", function () {
      footerCatImage.src = cat(1);
    });
  }

  document.addEventListener("siteFooterLoaded", window.initFooterCatAnimation);
})();
