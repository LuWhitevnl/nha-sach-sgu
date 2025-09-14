const sliderList = document.querySelector(".fs-slider__container--list");
const items = document.querySelectorAll(".fs-slider__item");
const itemWidth = items[0].offsetWidth + 10;
// console.log(itemWidth);
let currentIndex = 0;
const maxIndex = items.length - 5 + 1;

function updateSlider(index) {
  sliderList.style.transform = `translateX(-${index * itemWidth}px)`;
}

// nút điều hướng
const prevBtn = document.querySelector(".fs-btn.fs-prev");

const nextBtn = document.querySelector(".fs-btn.fs-next");

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % maxIndex;
  updateSlider(currentIndex);
});

prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + maxIndex) % maxIndex;
  updateSlider(currentIndex);
});
