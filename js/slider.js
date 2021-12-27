/// menu
const btnOpen = document.querySelector(".header__menu--icon");
const listMenu = document.querySelector(".header__menu--nav");
const btnClose = document.querySelector(".menu__close");
const overlay = document.querySelector(".header__menu--overlay");
btnOpen.addEventListener("click", () => {
  // listMenu.style.display = "flex";
  listMenu.classList.add("show");
  overlay.classList.add("active");
});
btnClose.addEventListener("click", () => {
  listMenu.classList.remove("show");
  overlay.classList.remove("active");
});

window.addEventListener("load", () => {
  const container = document.querySelector(".header__banner--slider");
  const slides = document.querySelectorAll(".header__banner--slider img");
  const dots = document.querySelectorAll(".header__banner--dots span");
  const nextBtn = document.querySelector(".header__banner--btn.next");
  const prevBtn = document.querySelector(".header__banner--btn.prev");
  let counter = 0;
  let size = slides[0].clientWidth;
  console.log(size);
  container.style.transform = `translateX(${-size * counter}px)`;
  dots[counter].classList.add("active");
  //prev
  prevBtn.addEventListener("click", () => {
    if (counter == 0) counter = slides.length;
    container.style.transition = `transform 0.4s ease-in-out`;
    counter--;
    container.style.transform = `translateX(${-size * counter}px)`;

    for (let i = 0; i < dots.length; i++) {
      dots[i].classList.remove("active");
    }
    dots[counter].classList.add("active");
  });
  //next
  nextBtn.addEventListener("click", () => {
    if (counter >= slides.length - 1) counter = -1;

    container.style.transition = `transform 0.4s ease-in-out`;
    counter++;
    container.style.transform = `translateX(${-size * counter}px)`;
    for (let i = 0; i < dots.length; i++) {
      dots[i].classList.remove("active");
    }
    dots[counter].classList.add("active");
  });
  dots.forEach((e, index) => {
    e.addEventListener("click", () => {
      container.style.transition = `transform 0.4s ease-in-out`;
      if (counter >= index) {
        counter = -1;
      }
      counter++;
      container.style.transform = `translateX(${-size * counter}px)`;
      for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove("active");
      }
      e.classList.add("active");
    });
  });
});
