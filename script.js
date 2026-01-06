const slider = document.getElementById("slider");
const slides = slider.children.length;
let index = 0;

setInterval(() => {
  index = (index + 1) % slides;
  slider.style.transform = `translateX(-${index * 100}%)`;
}, 2000);



