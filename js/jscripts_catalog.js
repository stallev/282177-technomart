var cartOpen = document.querySelectorAll(".buy-item");
var cartPopup = document.querySelector(".goods-buying-notification");
var cartClose = cartPopup.querySelector(".goods-buying-notification>.window-close-button");
var cartContinue = cartPopup.querySelector(".make-order");

if (cartOpen && cartPopup && cartClose) {
  for (var i=0; i<cartOpen.length; i++) {
      cartOpen[i].addEventListener("click", function (event) {
      event.preventDefault();
      cartPopup.classList.add("notification_ap");
      });
  }

  cartClose.addEventListener("click", function (event) {
  event.preventDefault();
  cartPopup.classList.remove("notification_ap");
  });

  cartContinue.addEventListener("click", function(event) {
  event.preventDefault();
  cartPopup.classList.remove("notification_ap");
  });

  window.addEventListener("keydown", function (event) {
    if (event.keyCode === 27) {
      if (cartPopup.classList.contains("modal-content-show")) {
      cartPopup.classList.remove("notification_ap");
      }
    }
  });
}