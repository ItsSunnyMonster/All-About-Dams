var secretButton = document.querySelector("[data-secret-btn]");

secretButton.addEventListener("click", () => {
  document.title = "Did you notice that I was changed? ";
  secretButton.innerHTML = "Oh. I didn't do anything. OR did I? ";
  setTimeout(() => {
    secretButton.blur();
  }, 5000);
});
