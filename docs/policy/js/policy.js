const menuBtn = document.querySelector(".mobile-btn");
const menu = document.querySelector(".mobile-nav");
const menuItem = document.querySelectorAll(".mobile-nav__list li a");
let menuOpen = false;

//toogle burger menu
menuBtn.addEventListener("click", () => {
    if (!menuOpen) {
      menuBtn.classList.add("open");
      menu.classList.add("open");
      menuOpen = true;
      menuItem.forEach((item, index) => {
        setTimeout(() => {
          item.style.transform = "translateX(0px)";
        }, index * 40);
      });
    } else {
      menu.classList.remove("open");
      menuBtn.classList.remove("open");
      menuOpen = false;
      menuItem.forEach((item) => {
        item.style.transform = "translateX(-190px)";
      });
    }
  });