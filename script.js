const track = document.querySelector(".carousel-track");
const nextBtn = document.querySelector(".carousel-btn.next");
const prevBtn = document.querySelector(".carousel-btn.prev");
let currentIndex = 0;

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % 3;
  updateCarousel();
});

prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + 3) % 3;
  updateCarousel();
});

function updateCarousel() {
  const width = track.clientWidth;
  track.style.transform = `translateX(-${currentIndex * width}px)`;
}
