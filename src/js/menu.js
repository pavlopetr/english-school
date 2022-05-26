(() => {
  const menuBtnRef = document.querySelector("[data-menu-button]");
  const mobileMenuRef = document.querySelector("[data-menu]");
  const menuLinkRef = document.querySelectorAll(".site-nav__link")

  menuBtnRef.addEventListener("click", () => {
    toggleMenu();
  });
  if (window.innerWidth < 1366) {
      menuLinkRef.forEach(function (link) {
    link.addEventListener("click", toggleMenu)
  })
  }

  function toggleMenu() {
    const expanded =
      menuBtnRef.getAttribute("aria-expanded") === "true" || false;

    menuBtnRef.classList.toggle("is-open");
    menuBtnRef.setAttribute("aria-expanded", !expanded);

    mobileMenuRef.classList.toggle("is-open");
  }
})();

