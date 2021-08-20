$(document).ready(function () {
  var currentFloor = 2; // переменная, где хранится текущий этаж
  var floorPath = $(".home-image path"); // каждый отдельный этаж в SVG
  var counterUp = $(".counter-up"); /* кнопка увеличения этажа */
  var counterDown = $(".counter-down"); /* кнопка уменьшения этажа */
  var modal = $(".modal");
  var modalCloseButton = $(".modal-close-button");
  var viewFlatsButton = $(".view-flats")

  // функция при наведении мышью на этаж
  floorPath.on("mouseover", function() {
    floorPath.removeClass("current-floor"); // удаляем активный класс у этажей
    currentFloor = $(this).attr("data-floor"); // получаем значение текущего этажа
    $(".counter").text(currentFloor); // записываем значение этажа в счетчик справа
  });

  floorPath.on("click", toggleModal); // Нажимаем на этаж и открываем модальное окно
  modalCloseButton.on("click", toggleModal); // Закрываем модальное окно крестиком
  viewFlatsButton.on("click", toggleModal); // Открываем этаж с помощью синей кнопки

  // отслеживаем клик по кнопке вверх
  counterUp.on("click", function () {
    // проверяем значение этажа, оно не должно быть больше 18
    if (currentFloor < 18) {
      currentFloor++; // прибавляем один этаж
      usCurrentFloor = currentFloor.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false }); // форматируем переменную с этажом, чтобы было 02 а не 2
      $(".counter").text(usCurrentFloor); // записываем в счетчик справа значение этажа
      floorPath.removeClass("current-floor"); // удаляем активный класс у этажей
      $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor"); // подсвечиваем текущий этаж
    }
  });
  // отслеживаем клик по кнопке вниз
  counterDown.on("click", function () {
    // проверяем значение этажа, оно не должно быть меньше 2
    if (currentFloor > 2) {
      currentFloor--; // отнимаем один этаж
      usCurrentFloor = currentFloor.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false }); // форматируем переменную с этажом, чтобы было 02 а не 2
      $(".counter").text(usCurrentFloor); // записываем в счетчик справа значение этажа
      floorPath.removeClass("current-floor"); // удаляем активный класс у этажей
      $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor"); // подсвечиваем текущий этаж
    }
  });
  function toggleModal() {
    modal.toggleClass("is-open");
  }
});



