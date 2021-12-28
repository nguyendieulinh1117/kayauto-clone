// scroll to top
const btnScroll = document.querySelector(".scrollToTop");
function showScroll() {
  if (window.scrollY > 150) {
    btnScroll.style.display = "block";
    btnScroll.classList.add("visible");
  } else {
    btnScroll.classList.remove("visible");
    btnScroll.style.display = "none";
  }
}

btnScroll.addEventListener("click", () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

//load car
const carBuy = document.querySelector(".buy__container--item--img");
const carSell = document.querySelector(".buy__container--sell--img");
const buySection = document.querySelector(".buy");
let positionBuy = carBuy.getBoundingClientRect();
let positionSell = carSell.getBoundingClientRect();

// console.log(position);
function loadCar() {
  if (window.scrollY >= 250 && window.scrollY <= 1300) {
    carBuy.classList.add("go");
    carSell.classList.add("go");
  } else {
    carBuy.classList.remove("go");
    carSell.classList.remove("go");
  }
}
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
const container = document.querySelector(".header__banner--slider");
const slides = document.querySelectorAll(".header__banner--slider img");
const dots = document.querySelectorAll(".header__banner--dots span");
const nextBtn = document.querySelector(".header__banner--btn.next");
const prevBtn = document.querySelector(".header__banner--btn.prev");
let counter = 0;
let size;
window.addEventListener("resize", () => {
  size = slides[0].clientWidth;
  console.log(size);
});
window.addEventListener("load", () => {
  size = slides[0].clientWidth;
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
//scroll window
window.onscroll = function () {
  showScroll();
  loadCar();
  // console.log(window.scrollY);
};
