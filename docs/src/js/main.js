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

// feedback slider
$(".single-item").slick({
  speed: 600,
  draggable: true,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: true,
  dots: true,
  prevArrow: $(".prev"),
  nextArrow: $(".next"),
  responsive: [
    {
      breakpoint: 1170,
      settings: {
        arrows: false,
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 750,
      settings: {
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});
// feedback content
const feedbackContent = {
  content: [
    {
      name: "Наталія Алексєєва",
      position: "Директор ТОВ «ІМР»",
      review:
        "Одним з напрямків діяльності ТОВ «Інститут місцевого розвитку» (ІМР) є проведення навчальних заходів, які з 2020 р. відбуваються переважно онлайн, що передбачає обмін документами з контрагентами поштою (під час офлайн-заходів все можна було зробити «на місці»). У середньому в одному заході участь беруть близько 50-75 учасників (підприємств), тому документів чимало. До переходу на електронний документообіг збір документів часто затягувався, через ненадійну роботу «Укрпошти» періодично доводилося готувати дублікати документів. Контрагенти також часто були незадоволені, якщо не отримували свої примірники вчасно для потреб бухобліку. Траплялося навіть, що фахівець контрагента (підприємства зі складною організаційною структурою і тривалим погодженням документів), відповідальний за підготовку документів, на момент отримання оригіналів документів для підпису, уже звільнявся. Процес передачі справ новому працівнику затягувався, а підписання і повернення наших примірників відкладалося. У зв’язку з підвищенням вартості пересилання кореспонденції «Укрпоштою» при сумнівній якості послуг, невигідною вартістю послуг такого надійного оператора поштового зв’язку як «Нова пошта», та потребою оперативно обмінюватися документами з контрагентами керівництво ТОВ «Інститут місцевого розвитку» прийняло рішення перейти на електронний документообіг (ЕДО). Уперше ми скористалися сервісом «Мій Арт-офіс» у листопаді 2022 р. і одразу мали змогу оцінити зручність його функціоналу, зокрема, інтуїтивність інтерфейсу, оперативне сповіщення контрагентів, можливість моніторингу обміну електронними документами від формування до підписання КЕП, можливість експортувати та архівувати на електронних носіях підписані електронні документи. ТОВ «ІМР» планує і надалі використовувати сервіс «Мій Арт-офіс».",
      publicDate: "18.05.2023",
    },
    {
      name: "Вікторія Синиця",
      position: "Операційна директорка компанії Kompas Україна",
      review:
        "Обираючи сервіс електронного документообігу, ми шукали, щоб функціональність була широкою та зручною, а також, щоб було забезпечено високий рівень надійності та безпеки конфіденційної інформації. Щоб працювати з документами було просто у будь-який час, а для наших контрагентів підписання вхідних документів було б безкоштовним. Рішення хмарного сервісу «Мій Арт‑Офіс» найповніше задовольнило наші потреби. І головне — завдяки ЕДО, втричі скоротився час роботи з документами. І це суттєва перевага. Нам потрібна була послуга «під ключ», якою можна було почати швидко користуватися, і не чекати встановлення програмного забезпечення на комп’ютери співробітників. Тож ми оплатили пакет і нам одразу надали доступ. «Мій Арт‑Офіс» має максимально розширену функціональність. Ще однією із переваг є створення документів за шаблоном. Зручно, що сервісом одночасно можуть користуватися кілька співробітників. Є цілодобовий онлайн-доступ до усіх документів та проста авторизація за допомогою КЕП. Зазвичай процес друку, передача документів та логістика — це велика витрата часу. ЕДО — дає суттєву мінімізацію витрат на папір, доставку тощо.",
      publicDate: "22.09.2020",
    },
    {
      name: "Тетяна Ткачук",
      position: "Юрист компанії ZEO Alliance",
      review:
        "«Електронний документообіг в сервісі Арт‑Офіс, особливо в умовах карантину, це зручно та ефективно. А головне - документи, створені та підписані в «Арт‑Офіс», є юридично значущими, їх приймають у податковій службі та інших державних установах» Юристи ZEO Alliance відзначають, що завдяки «Арт‑Офіс» зараз суттєво економлять час. Узгодження і підписання документів, на які раніше йшли години, а то й дні, тепер виконуються за лічені хвилини. При цьому кількість ресурсів на виконання подібних завдань, як фінансових, так і людських, скоротилося в декілька разів. Вивільнений робочий час працівники витрачають на виконання інших обов'язків.",
      publicDate: "25.08.2020",
    },
    {
      name: "Олег Пикар",
      position: "Директор департаменту якості ЄВРАЗІЯ в PSA Group",
      review:
        "Рішення «Арт‑Офіс» дозволило нам автоматизувати процес обміну документами між компанією та дилерами. Ми керувалися тим, що рішення повинно бути хмарним з можливістю авторизуватися в кабінеті з ключем КЕП, правила підписання документів та програмний API повинні бути кастомізованими під наші процеси. Водночас, наші дилери не повинні нести ніякого фінансового навантаження. Тобто, підключення до системи, підписання вхідних та вихідних документів для них повинне бути безплатним. «Корпоративна хмара» «Арт‑Офіс» найточніше відповідала нашим вимогам, тому наш вибір ми зробили на користь такої моделі використання. Ми не купували «кота в мішку», оскільки мали можливість попрацювати з демо-майданчиком досить часу, щоб прийняти остаточне рішення. Упровадження тривало приблизно 2-3 тижні, і вже зовсім скоро ми змогли відчути переваги використання корпоративного рішення. Ми поступово відходимо від паперу у всіх сферах нашого бізнесу. Переводимо в електронний вигляд різні види документів з різними правилами підписання. З кожним новим оновленням система відповідає нашим очікуванням. Ми бачимо подальші етапи розвитку. З урахуванням відносно невеликої кількості документів, виконані всі вимоги безпеки щодо розміщення системи в інфраструктурі вендора та довгострокового зберігання документів, використовуючи спеціальний формат розширеного підпису CAdES-X Long. Окремо хочемо відзначити можливість масового підпису, оскільки ця функціональність суттєво скоротила час на підписання документів директором компанії. За 2,5 роки експлуатації було створено та підписано більше 40 000 документів. До процесу залучено 60 контрагентів (юридичних осіб). Технічна та консультаційна підтримка здійснюється своєчасно. У випадку будь-яких змін в інфраструктурі PKI (наприклад, зміна кореневих сертифікатів АЦСК тощо) команда-розробник сервісу «Арт‑Офіс» швидко реагує та в найкоротші строки здійснює оновлення системи.",
      publicDate: "02.05.2019",
    },
    {
      name: "Микола Курус",
      position: "Program manager at Finance Information Systems",
      review:
        "При виборі системи електронного документообігу компанія керувалася загальною стратегією розвитку, цілями, наявним конкуруючим середовищем, бажаною структурою та очікуваним економічним ефектом від впровадження такого рішення. Завдяки впровадженню комплексного веб-рішення від «Арт‑Офіс» був автоматизований процес обміну документів між групою компаній SoftServe і зовнішніми контрагентами. Механізм створення та підписання електронного документа, що застосовується в «Арт‑Офіс», гарантує незмінність формату і контенту підготовленого для підписання документа, його відповідність до вимог та правил, встановлених політикою підписання документів. Зараз процес обміну документами здійснюється в режимі 24/7 – контрагенти будь-коли та будь-де (за наявності Інтернету) можуть безпечно авторизуватися в своєму персональному кабінеті, ознайомитися з отриманим документом та підписати його. За два з половиною роки експлуатації було створено і підписано більш ніж один мільйон документів. До процесу залучені близько 6000 контрагентів. Технічна та організаційна підтримка своєчасна, стабільна, без затримок. Крім того, компанія прийняла рішення про впровадження модуля для роботи з внутрішніми документами і зараз успішно його експлуатує. Модуль дозволяє формувати гнучкі сценарії підписання і узгодження внутрішніх документів зі зручною візуалізацією у вигляді графа. З переваг системи можна виділити, що авторизація в кабінеті користувача відбувається з використанням кваліфікованого електронного підпису. Варто підкреслити важливість такої особливості для юридичних організацій: керівнику не потрібно перейматися через те, що колишні або звільнені співробітники будуть мати доступ до документів його компанії.",
      publicDate: "17.04.2019",
    },
  ],
};

function openModal(index) {
  const overlay = document.querySelector(".overlay");
  const modal = document.getElementById("modal");
  const modalContent = document.getElementById("modal-content");

  const feedback = feedbackContent.content[index];
  modalContent.innerHTML = `
    <div class="modal__date">${feedback.publicDate}</div>
    <div class="modal__name">${feedback.name}</div>
    <div class="modal__position">${feedback.position}</div>
    <div class="modal__review">${feedback.review}</div>
  `;
  overlay.style.display = "block";
  overlay.style.zIndex = "1";
  modal.style.zIndex = "2";
  modal.style.opacity = "1";
}

function closeModal() {
  const modal = document.getElementById("modal");
  const overlay = document.querySelector(".overlay");
  modal.style.opacity = "0";
  overlay.style.display = "none";
  overlay.style.zIndex = "-99";
  modal.style.zIndex = "-100";
}

const feedbackSection = document.querySelector(".feedback__section");
const feedbackBgItems = feedbackSection.querySelectorAll(".wrapper.dark__background h2 img");

function showFeedbackBgItems(index) {
  setTimeout(function () {
    feedbackBgItems[index].classList.add("show");
  }, index * 200);
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      for (let i = 0; i < feedbackBgItems.length; i++) {
        showFeedbackBgItems(i);
      }
      // Отключаем наблюдение после первого появления
      observer.disconnect();
    }
  });
}, { threshold: 0.2 });

observer.observe(feedbackSection);