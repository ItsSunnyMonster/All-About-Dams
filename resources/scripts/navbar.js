const links = document.querySelectorAll(".link");

links.forEach((link) => {
  link.classList.remove("active");
  if (window.location.href.includes(link.getAttribute("href"))) {
    link.classList.add("active");
  }
});
