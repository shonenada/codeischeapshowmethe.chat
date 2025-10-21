(function () {
  const scrollClass = "is-scrolled";
  const header = document.querySelector(".site-header");

  if (header) {
    const onScroll = () => {
      if (window.scrollY > 12) {
        header.classList.add(scrollClass);
      } else {
        header.classList.remove(scrollClass);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  const readingBadges = document.querySelectorAll("[data-word-count]");
  const readLabel = document.body.getAttribute("data-read-label") || "min read";
  readingBadges.forEach((node) => {
    const words = parseInt(node.getAttribute("data-word-count") || "0", 10);
    if (words > 0) {
      const minutes = Math.max(1, Math.round(words / 200));
      node.textContent = `${minutes} ${readLabel}`;
    }
  });
})();
