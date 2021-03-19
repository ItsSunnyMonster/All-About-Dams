const openButtons = document.querySelectorAll("[data-target]");
const closeButtons = document.querySelectorAll("[data-close-button]");
const overlay = document.getElementById("overlay");

openButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const model = document.querySelector(button.dataset.target);
    openModel(model);
  });
});

closeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const model = button.closest(".model");
    closeModel(model);
  });
});

overlay.addEventListener("click", () => {
  closeAllModels();
});

function openModel(model) {
  if (model == null) return;
  closeAllModels();
  model.classList.add("active");
  overlay.classList.add("active");
}

function closeModel(model) {
  if (model == null) return;
  model.classList.remove("active");
  overlay.classList.remove("active");
}

function closeAllModels() {
  const models = document.querySelectorAll(".model.active");
  models.forEach((model) => {
    closeModel(model);
  });
}
