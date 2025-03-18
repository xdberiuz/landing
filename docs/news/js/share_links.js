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

//share button on page News

var URL_SHAER_FACEBOOK = 'https://www.facebook.com/art.office.com.ua/';
var URL_SHARE_TELEGRAM = 'https://t.me/art_office';
var correctLink = window.location.href.substring(0, window.location.href.length - 5);

//share link
function shareBtnLink(obj, link) {
  let nextPageLink = link;
  navigator.clipboard.writeText(correctLink + `/${nextPageLink}`);
  var checkmark = document.getElementById('checkmark');
  checkmark.style.display = 'inline-block';
  setTimeout(function () {
    checkmark.style.display = 'none';
  }, 3000);
}

//share FB

function shareBtnFb(linkFb) {
  // let fullLinkFb = URL_SHAER_FACEBOOK + correctLink + `/${linkFb}`
  let fullLinkFb = URL_SHAER_FACEBOOK;
  window.open(fullLinkFb, '_blank').focus();
}

//share Telegram

function shareBtnTm(linkTm) {
  // let fullLinkTm = URL_SHARE_TELEGRAM + correctLink + `/${linkTm}`
  let fullLinkTm = URL_SHARE_TELEGRAM;
  window.open(fullLinkTm, '_blank').focus();
}

//share button on news content page

$('.url').click(function () {
  navigator.clipboard.writeText(window.location.href)
  var checkmark = document.getElementById('checkmark');
  checkmark.style.display = 'inline-block';
  setTimeout(function () {
    checkmark.style.display = 'none';
  }, 3000);
});

//share Telegram

$('.share_social .tm').click(function () {
  // let fullLink = URL_SHARE_TELEGRAM + window.location.href
  let fullLink = URL_SHARE_TELEGRAM;
  window.open(fullLink, '_blank').focus();
})

//share FB

$('.share_social .fb').click(function () {
  // let fullLink = URL_SHAER_FACEBOOK + window.location.href
  let fullLink = URL_SHAER_FACEBOOK ;
  window.open(fullLink, '_blank').focus();
})