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

//title users
document.addEventListener("DOMContentLoaded", function () {
  const corpUsers = document.querySelectorAll(".corp_user");

  // Функция для добавления класса show с задержкой
  function showCorpUsersWithDelay(index) {
    setTimeout(function () {
      corpUsers[index].classList.add("show");
    }, index * 200); // Измените задержку по своему усмотрению (500 миллисекунд в данном примере)
  }

  // Проходим по всем элементам corp_user и добавляем классы с задержкой
  for (let i = 0; i < corpUsers.length; i++) {
    showCorpUsersWithDelay(i);
  }
});

//line security
const yourDiv = document.querySelector(".secutiry__level .line__progress");
const progressTitle = document.querySelector(
  ".secutiry__level .line__progress .line__point .line__text"
);

const transitionEndHandler = () => {
  let progress =
    (yourDiv.offsetWidth / yourDiv.parentElement.offsetWidth) * 100;

  if (progress >= 61) {
    yourDiv.classList.add("progress-50");
    progressTitle.style.opacity = "1";
    yourDiv.removeEventListener("transitionend", transitionEndHandler);
  } else if (progress >= 30 && progress < 60) {
    yourDiv.classList.add("progress-20");
  }
};

yourDiv.addEventListener("transitionend", transitionEndHandler);

//add class when block on user screen
// Получаем элемент, к которому хотим добавить класс
const itemsBackground = document.querySelectorAll(
  ".security__wrapper .bg_items"
);
console.log(itemsBackground);

// Получаем высоту видимой области браузера
const windowHeight = window.innerHeight;

// Функция для проверки, находится ли элемент в видимой области
const isElementInViewport = (el) => {
  const rect = el.getBoundingClientRect();
  return rect.top < windowHeight;
};

// Функция для добавления класса при прокрутке
const handleScroll = () => {
  if (isElementInViewport(yourDiv)) {
    yourDiv.classList.add("active");
    itemsBackground.forEach((item, index) => {
      setTimeout(() => {
        item.style.opacity = "0.7";
      }, index * 200);
    });
    // Если нужно выполнить действие только один раз после прокрутки, можно убрать обработчик события
    window.removeEventListener("scroll", handleScroll);
  }
};

// Добавляем обработчик события scroll
window.addEventListener("scroll", handleScroll);

//client slider
document.addEventListener("DOMContentLoaded", function () {
  const slider = document.querySelector(".slider");
  const slides = document.querySelectorAll(".slide");
  const cloneSlides = Array.from(slides).map((slide) => slide.cloneNode(true));

  slider.append(...cloneSlides);

  function nextSlide() {
    const currentIndex = -slider.scrollLeft / slides[0].offsetWidth;
    const nextIndex = (currentIndex + 1) % slides.length;

    if (nextIndex === 0) {
      slider.scrollLeft = 0;
      slides[0].remove();
    }

    slider.scroll({
      left: nextIndex * slides[0].offsetWidth,
      behavior: "smooth",
    });
  }

  // Задайте интервал времени в миллисекундах
  const interval = 3000;

  // Запуск автоматического переключения слайдов
  const intervalId = setInterval(nextSlide, interval);
});

//faq toogle
document.addEventListener("DOMContentLoaded", function () {
  const items = document.querySelectorAll(".faq__item");

  items.forEach(function (item) {
    const title = item.querySelector(".content__title");
    const answer = item.querySelector(".content__answer");
    const controller = item.querySelector(".content__controller");
    const arrowImage = controller.querySelector("img");

    title.addEventListener("click", function () {
      if (answer.style.maxHeight) {
        // Если ответ уже открыт, закрыть его и сменить изображение на обычное
        answer.style.maxHeight = null;
        title.classList.remove("opened");
        arrowImage.src = "./src/img/svg/faq_arrow.svg";
      } else {
        // Закрыть все ответы и открыть текущий, добавив класс opened и сменить изображение на активное
        closeAllAnswers();
        answer.style.maxHeight = answer.scrollHeight + "px";
        title.classList.add("opened");
        arrowImage.src = "./src/img/svg/faq_arrow_active.svg";
      }
    });
  });

  function closeAllAnswers() {
    const answers = document.querySelectorAll(".content__answer");
    answers.forEach(function (answer) {
      answer.style.maxHeight = null;
    });

    const titles = document.querySelectorAll(".content__title");
    titles.forEach(function (title) {
      title.classList.remove("opened");
    });

    const controllers = document.querySelectorAll(".content__controller");
    controllers.forEach(function (controller) {
      const arrowImage = controller.querySelector("img");
      arrowImage.src = "./src/img/svg/faq_arrow.svg";
    });
  }
});

//expml work
document.addEventListener("DOMContentLoaded", function () {
  const workWithItems = document.querySelectorAll(".workwith__item");
  const rightImages = document.querySelectorAll(".workwith__rigth img");

  workWithItems.forEach((item, index) => {
    const contentTitle = item.querySelector(".content__title");
    const contentText = item.querySelector(".content__text");
    const contentTitleArrow = contentTitle.querySelector(
      ".content__controller img"
    );

    contentTitle.addEventListener("click", function () {
      workWithItems.forEach((otherItem, otherIndex) => {
        if (otherItem !== item) {
          otherItem.classList.remove("active");
          rightImages[otherIndex].classList.remove("active");
          otherItem.querySelector(".content__text").style.maxHeight = "0";
          otherItem.querySelector("img").src = `./src/img/svg/faq_arrow.svg`;
        } else {
          contentTitleArrow.src = `./src/img/svg/faq_arrow_active.svg`;
          item.classList.add("active");
          contentText.style.maxHeight = item.classList.contains("active")
            ? contentText.scrollHeight + "px"
            : "0";
          rightImages[index].classList.add("active");
        }
      });
    });
  });
});
