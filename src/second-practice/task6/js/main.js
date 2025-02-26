const gallery = document.getElementById('gallery');
let images = '';

for (let i = 1; i <= 6; i++) {
  images += `<img src='images/pic_${i}.jpg' alt='Image ${i}'>`;
}

gallery.innerHTML = images;