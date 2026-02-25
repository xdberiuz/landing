function initCorpUsers() {
  const corpUsers = document.querySelectorAll(".corp_user");
  if (!corpUsers.length) return;

  corpUsers.forEach((_, index) => {
    setTimeout(() => {
      corpUsers[index].classList.add("show");
    }, index * 200);
  });
}

function initSecurityProgress() {
  const yourDiv = document.querySelector(".secutiry__level .line__progress");
  const progressTitle = document.querySelector(".secutiry__level .line__progress .line__point .line__text");
  if (!yourDiv || !yourDiv.parentElement) return;

  const transitionEndHandler = () => {
    const progress = (yourDiv.offsetWidth / yourDiv.parentElement.offsetWidth) * 100;

    if (progress >= 61) {
      yourDiv.classList.add("progress-50");
      if (progressTitle) progressTitle.style.opacity = "1";
      yourDiv.removeEventListener("transitionend", transitionEndHandler);
    } else if (progress >= 30 && progress < 60) {
      yourDiv.classList.add("progress-20");
    }
  };

  yourDiv.addEventListener("transitionend", transitionEndHandler);

  const itemsBackground = document.querySelectorAll(".security__wrapper .bg_items");
  const isElementInViewport = (el) => el.getBoundingClientRect().top < window.innerHeight;

  const handleScroll = () => {
    if (isElementInViewport(yourDiv)) {
      yourDiv.classList.add("active");

      itemsBackground.forEach((item, index) => {
        setTimeout(() => {
          item.style.opacity = "0.7";
        }, index * 200);
      });

      window.removeEventListener("scroll", handleScroll);
    }
  };

  window.addEventListener("scroll", handleScroll);
}

function initWorkWith() {
  const workWithItems = document.querySelectorAll(".workwith__item");
  if (!workWithItems.length) return;

  const rightImages = document.querySelectorAll(".workwith__rigth .workwith__expml-img");
  const rightSubImages = document.querySelectorAll(".workwith__rigth .subimage__wrapper");

  workWithItems.forEach((item, index) => {
    const contentTitle = item.querySelector(".content__title");
    const contentText = item.querySelector(".content__text");
    const contentTitleArrow = contentTitle?.querySelector(".content__controller img");

    if (!contentTitle || !contentText) return;

    contentTitle.addEventListener("click", function () {
      workWithItems.forEach((otherItem, otherIndex) => {
        if (otherItem !== item) {
          otherItem.classList.remove("active");
          rightImages[otherIndex]?.classList.remove("active");
          rightSubImages[otherIndex]?.classList.remove("active");
          otherItem.querySelector(".content__text")?.style && (otherItem.querySelector(".content__text").style.maxHeight = "0");
          const img = otherItem.querySelector("img");
          if (img) img.src = `./src/img/svg/faq_arrow.svg`;
        } else {
          if (contentTitleArrow) contentTitleArrow.src = `./src/img/svg/faq_arrow_active.svg`;
          item.classList.add("active");
          contentText.style.maxHeight = item.classList.contains("active") ? contentText.scrollHeight + "px" : "0";
          rightImages[index]?.classList.add("active");
          rightSubImages[index]?.classList.add("active");
        }
      });
    });
  });
}

function initSlick() {
  if (typeof window.$ !== "function") return;
  if (!document.querySelector(".single-item")) return;

  window.$(".single-item").slick({
    speed: 600,
    draggable: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    prevArrow: window.$(".prev"),
    nextArrow: window.$(".next"),
    responsive: [
      { breakpoint: 1170, settings: { arrows: false, slidesToShow: 2, slidesToScroll: 1 } },
      { breakpoint: 750, settings: { arrows: false, slidesToShow: 1, slidesToScroll: 1 } }
    ]
  });
}

function initFeedbackObserver() {
  const feedbackSection = document.querySelector(".feedback__section");
  if (!feedbackSection) return;

  const feedbackBgItems = feedbackSection.querySelectorAll(".wrapper.dark__background h2 img");
  if (!feedbackBgItems.length) return;

  function showFeedbackBgItems(index) {
    setTimeout(() => {
      feedbackBgItems[index].classList.add("show");
    }, index * 200);
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          for (let i = 0; i < feedbackBgItems.length; i++) showFeedbackBgItems(i);
          observer.disconnect();
        }
      });
    },
    { threshold: 0.2 }
  );

  observer.observe(feedbackSection);
}

function initPhoneMaskBehavior() {
  const phoneInput = document.getElementById("phone");
  if (!phoneInput) return;

  phoneInput.addEventListener(
    "focus",
    function () {
      if (!phoneInput.value.startsWith("+380")) {
        phoneInput.value = "+380" + phoneInput.value;
      }
    },
    { once: true }
  );
}

function initAll() {
  initCorpUsers();
  initSecurityProgress();
  initWorkWith();
  initSlick();
  initFeedbackObserver();
  initPhoneMaskBehavior();
}


document.addEventListener("DOMContentLoaded", initAll);
