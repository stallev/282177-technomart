    var straying = document.querySelector(".stray-form");
    var cartOpen = document.querySelectorAll(".buy-item");
    var cartPopup = document.querySelector(".goods-buying-notification");

    if (straying) {
      var close = document.querySelector(".stray-form>.window-close-button");
      var usersname_storage = localStorage.getItem("person_name");
      var email_storage = localStorage.getItem("person_email");
      var usr_msg = straying.querySelector("[name=stray-form-message]");
      var location_link = document.querySelector(".small-map");
      var big_map = document.querySelector(".modal-map");
      var close_map = document.querySelector(".modal-map>.window-close-button");
      var link = document.querySelector(".we-stray-button");
      var usersname = straying.querySelector("[name=stray-form-name]");
      var email = straying.querySelector("[name=stray-form-email]");

      link.addEventListener("click", function(event) {
        event.preventDefault();
        console.log("2");
        straying.classList.add("appear");
        usersname.focus();
        if (usersname_storage) {
          console.log("usersname is in the localStorage");
          usersname.value = usersname_storage;
          email.focus();
        } else {
          usersname.focus();
          console.log("No usersname in the localStorage");
        }
        if (email_storage) {
          console.log("email is in the localStorage");
          email.value = email_storage;
          usr_msg.focus();
        } else {
          console.log("No email in the localStorage");
          email.focus();
        }
      });
      close.addEventListener("click", function(event) {
        event.preventDefault();
        console.log("3");
        straying.classList.remove("appear");
      });
      straying.addEventListener("submit", function(event) {
        event.preventDefault();
        console.log("Отправляем форму");
        console.log("usersname.value");
        console.log("email.value");
        if (!usersname.value || !email.value) {
          console.log("Необходимо представиться и ввести email");
        } else {
          localStorage.setItem("person_name", usersname.value);
          localStorage.setItem("person_email", email.value);
        }
      });
      location_link.addEventListener("click", function(event) {
        event.preventDefault();
        console.log("Кликнули по карте");
        big_map.classList.add("map_ap");
        console.log("5");
      });
      close_map.addEventListener("click", function(event) {
        event.preventDefault();
        console.log("3");
        big_map.classList.remove("map_ap");
      });

    }

    if (cartOpen && cartPopup) {
      var cartClose = cartPopup.querySelector(".goods-buying-notification>.window-close-button");
      var cartContinue = cartPopup.querySelector(".make-order");
      for (var i = 0; i < cartOpen.length; i++) {
        cartOpen[i].addEventListener("click", function(event) {
          event.preventDefault();
          cartPopup.classList.add("notification_ap");
        });
      }

      cartClose.addEventListener("click", function(event) {
        event.preventDefault();
        cartPopup.classList.remove("notification_ap");
      });

      cartContinue.addEventListener("click", function(event) {
        event.preventDefault();
        cartPopup.classList.remove("notification_ap");
      });

      window.addEventListener("keydown", function(event) {
        if (event.keyCode === 27) {
          if (cartPopup.classList.contains("modal-content-show")) {
            cartPopup.classList.remove("notification_ap");
          }
        }
      });
    }