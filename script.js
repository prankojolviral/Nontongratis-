"use strict";

document.addEventListener("DOMContentLoaded", function () {
  const shopeeLink = "https://s.shopee.co.id/9KimoIcguf";

  const thumbnail = document.querySelector(".thumbnail");
  const button = document.querySelector(".button");

  if (thumbnail) {
    thumbnail.href = shopeeLink;
  }

  if (button) {
    button.href = shopeeLink;
  }
});