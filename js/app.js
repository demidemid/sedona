(function() {
  var menuOpen = document.querySelector(".burger-button");
  var menuMobile = document.querySelector(".main-menu");
  var menuClose = menuMobile.querySelector(".main-menu__cross-button");

  menuMobile.classList.remove("main-menu--no-js");

  menuOpen.addEventListener("click", function(event) {
    event.preventDefault();
    menuMobile.classList.add("main-menu__modal-content-show");
  });

  menuClose.addEventListener("click", function(event) {
    event.preventDefault();
    menuMobile.classList.remove("main-menu__modal-content-show");
  });

  window.addEventListener("keydown", function(event) {
    if (event.keyCode === 27) {
      if (menuMobile.classList.contains("main-menu__modal-content-show")) {
        menuMobile.classList.remove("main-menu__modal-content-show");
      }
    }
  });
})();
