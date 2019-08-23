var menu = document.querySelector(".site-list");
var logo =  document.querySelector(".page-header__logo");
var toggle = document.querySelector(".main-nav__toggle");

menu.classList.remove("show");
menu.classList.add("hide");


toggle.addEventListener("click", function (evt) {
  evt.preventDefault();
  if (menu.classList.contains("show")) {
    menu.classList.remove("show");
    menu.classList.add("hide");
    logo.classList.add("top");
    toggle.classList.remove("main-nav__toggle--cross");
    toggle.classList.add("main-nav__toggle--burger");
  }
  else {
    menu.classList.remove("hide");
    menu.classList.add("show");
    logo.classList.remove("top");
    toggle.classList.remove("main-nav__toggle--burger");
    toggle.classList.add("main-nav__toggle--cross");
  }
});
