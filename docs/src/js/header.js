function initMobileMenu() {
  if (document.__mobileMenuInited) return;
  document.__mobileMenuInited = true;

  let menuOpen = false;

  document.addEventListener("click", (e) => {
    const menuBtn = e.target.closest(".mobile-btn");
    if (!menuBtn) return;

    const menu = document.querySelector(".mobile-nav");
    const menuItem = document.querySelectorAll(".mobile-nav__list li a");
    if (!menu) return;

    menuBtn.classList.toggle("open");
    menu.classList.toggle("open");
    menuOpen = !menuOpen;

    menuItem.forEach((item, index) => {
      setTimeout(() => {
        item.style.transform = menuOpen ? "translateX(0px)" : "translateX(-190px)";
      }, index * 40);
    });
  });
}


document.addEventListener("DOMContentLoaded", initMobileMenu);
document.addEventListener("includes:loaded", initMobileMenu);