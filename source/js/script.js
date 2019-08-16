var menu = document.querySelector(".main-nav__list");
var nav =  document.querySelector(".main-nav");
var logo =  document.querySelector(".page-header__logo");
var toggle = document.querySelector(".main-nav__toggle");

nav.classList.remove('show');
nav.classList.add('hide');


toggle.addEventListener("click", function (evt) {
  evt.preventDefault();
  if (nav.classList.contains("show")) {
    nav.classList.remove("show");
    nav.classList.add("hide");
    logo.classList.add("top");
    toggle.classList.remove("main-nav__toggle--cross");
    toggle.classList.add("main-nav__toggle--burger");
  }
  else {
    nav.classList.remove("hide");
    nav.classList.add("show");
    logo.classList.remove("top");
    toggle.classList.remove("main-nav__toggle--burger");
    toggle.classList.add("main-nav__toggle--cross");
  }
});
