const container = document.querySelector(".header__banner--slider");
const slides = document.querySelectorAll(".header__banner--slider img");
const dots = document.querySelectorAll(".header__banner--dots span");

let counter = 0;
const size = slides[0].clientWidth;
console.log(size);

container.style.transform = `translateX(${-size * counter}px)`;
dots[counter - 1].classList.add("active");
//prev
function prevSlider() {
  container.style.transition = `transform 0.4s ease-in-out`;
  counter--;
  container.style.transform = `translateX(${-size * counter}px)`;

  for (let i = 0; i < dots.length; i++) {
    dots[i].classList.remove("active");
  }
  dots[counter - 1].classList.add("active");
}

//next
function nextSlider() {
  container.style.transition = `transform 0.4s ease-in-out`;
  counter++;

  container.style.transform = `translateX(${-size * counter}px)`;
  for (let i = 0; i < dots.length; i++) {
    dots[i].classList.remove("active");
  }
  dots[counter - 1].classList.add("active");
}
