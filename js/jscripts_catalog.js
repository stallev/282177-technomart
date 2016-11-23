    var notification_link=document.querySelector(".buy-item");
    var notification=document.querySelector(".goods-buying-notification");
    var close_notification=document.querySelector(".goods-buying-notification>.window-close-button");

    notification_link.addEventListener("click", function(event){
      event.preventDefault();
      console.log("Кликнули по карточке товара");
      notification.classList.add("notification_ap");
      console.log("8");
    });
    close_notification.addEventListener("click", function(event){
      event.preventDefault();
      console.log("9");
      notification.classList.remove("notification_ap");
    });