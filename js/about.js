const btnOpenb = document.querySelector(".headerb__menu--icon");
const listMenub = document.querySelector(".headerb__menu--nav");
const btnCloseb = document.querySelector(".menu__close");
const overlayb = document.querySelector(".headerb__menu--overlay");
btnOpenb.addEventListener("click", () => {
  // listMenu.style.display = "flex";
  listMenub.classList.add("show");
  overlayb.classList.add("active");
});
btnCloseb.addEventListener("click", () => {
  listMenub.classList.remove("show");
  overlayb.classList.remove("active");
});
