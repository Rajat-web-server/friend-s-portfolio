
  document.addEventListener("DOMContentLoaded", function () {
    let currentIndex = 0;
    const slider = document.getElementById("slider");
    const totalSlides = slider.children.length;

    function updateSlide() {
      slider.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    window.nextSlide = function () {
      currentIndex = (currentIndex + 1) % totalSlides;
      updateSlide();
    };

    window.prevSlide = function () {
      currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
      updateSlide();
    };
  });







