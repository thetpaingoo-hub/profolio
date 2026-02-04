(function () {
  const y = document.getElementById("year");
  if (y) y.textContent = String(new Date().getFullYear());

  const btn = document.querySelector(".nav-toggle");
  const nav = document.getElementById("nav-menu");
  const overlay = document.querySelector(".nav-overlay");

  if (!btn || !nav || !overlay) return;

  function openMenu() {
    nav.classList.add("nav--open");
    overlay.hidden = false;
    btn.setAttribute("aria-expanded", "true");
    btn.setAttribute("aria-label", "Close menu");
    document.body.classList.add("no-scroll");
  }

  function closeMenu() {
    nav.classList.remove("nav--open");
    overlay.hidden = true;
    btn.setAttribute("aria-expanded", "false");
    btn.setAttribute("aria-label", "Open menu");
    document.body.classList.remove("no-scroll");
  }

  btn.addEventListener("click", () => {
    const expanded = btn.getAttribute("aria-expanded") === "true";
    expanded ? closeMenu() : openMenu();
  });

  overlay.addEventListener("click", closeMenu);

  nav.addEventListener("click", (e) => {
    const t = e.target;
    if (t && t.tagName === "A" && nav.classList.contains("nav--open")) {
      closeMenu();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && nav.classList.contains("nav--open")) {
      closeMenu();
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 760) closeMenu();
  });
})();