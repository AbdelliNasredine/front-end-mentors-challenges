console.log("hello world");

const nextBtn = document.querySelector("#nextBtn");
const prevBtn = document.querySelector("#prevBtn");
const slideItems = document.querySelectorAll(".slider__item");
let index = 0;

console.log(slideItems.length);
slideItems[index].classList.add("active");

function nextSlide() {
  if (index + 1 >= slideItems.length) {
    return;
  }
  slideItems[index].classList.remove("active");
  slideItems[index + 1].classList.add("active");
  index++;
  console.log("next", index);
}

function prevSlide() {
  if (index - 1 < 0) {
    return;
  }
  slideItems[index].classList.remove("active");
  slideItems[index - 1].classList.add("active");
  index--;
  console.log("prev", index);
}

nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", prevSlide);
