var date = new Date();

if (date.getDate() % 7 == 0) {
  document.querySelector("[data-easter-egg]").innerHTML =
    "How does a dam work?";
}
