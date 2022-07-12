// Для добавления функционала используем классы с префиксом js, стилизовать по этим классам нельзя

$(document).ready(function () {
  // Находим переменных
  $buyButtonWindow = $(".benefit__button .js-buy-button");
  $modalFrame = $(".js-modal-frame");
  $close = $(".js-close-wrapper");
  $buyButton = $("js-buy-button");

  // Пишем прослушку для событие с модальним окном и оверлэй

  $buyButtonWindow.on("click", function () {
    $(".overlay").addClass("active");
    $modalFrame.addClass("visible");
  });
  $close.on("click", function () {
    $(".overlay").removeClass("active");
    $modalFrame.removeClass("visible");
  });

  // Прослушка когда пользователь нажал на покупку
  $buyButton.on("submit", function () {
    $(".overlay").removeClass("active");
    $modalFrame.removeClass("visible");
  });

  // Мобильная прослушка
  const buger = document.querySelector(".js-burger.burger-wrapper");
  const mobileMenu = document.querySelector(".js-mobile-nav.mobile-nav");

  buger.addEventListener("click", function () {
    this.classList.toggle("active");
    if (this.classList.contains("active")) {
      mobileMenu.classList.add("active");
    } else {
      mobileMenu.classList.remove("active");
    }
  });

  const navItem = document.querySelectorAll(".js-nav__link");
  navItem.forEach(function (item) {
    item.addEventListener("click", function () {
      mobileMenu.classList.remove("active");
      buger.classList.toggle("active");
    });
  });
});
