var secretButton = document.querySelector("[data-secret-btn]");
var secretButton2 = document.querySelector("[data-secret-btn-2]");

secretButton.addEventListener("click", () => {
  document.title = "Did you notice that I was changed? ";
  secretButton.innerHTML = "Oh. I didn't do anything. OR did I? ";
  setTimeout(() => {
    secretButton.blur();
  }, 5000);
});

secretButton2.addEventListener("click", () => {
  secretButton2.blur();
});
