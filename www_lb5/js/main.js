//slider

document.addEventListener('DOMContentLoaded', function () {
  const images = document.querySelectorAll('.slider img');
  const prevBtn = document.querySelector('.prev');
  const nextBtn = document.querySelector('.next');
  let currentIndex = 0;

  function updateSlider() {
    images.forEach((img, index) => {
      img.style.display = index === currentIndex ? 'block' : 'none';
    });
  }

  prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateSlider();
  });

  nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateSlider();
  });

  updateSlider();
});
