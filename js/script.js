const menuE1 = document.querySelector( '.menu');
window.addEventListener('scroll', () => { if (window.scrollY >50) { menuE1.classList.add('menu-scrolled');}
else if(window. scrollY <= 50) { menuE1.classList.remove('menu-scrolled');}});


// Gallery Images Array
const gallery_images = [
  "https://placehold.co/1080x606/777777/FFF?text=Picture2",
  "https://placehold.co/1080x606/777777/FFF?text=Picture3",
  "https://placehold.co/1080x606/777777/FFF?text=Picture4",
  "https://placehold.co/1080x606/777777/FFF?text=Picture5",
  "https://placehold.co/1080x606/777777/FFF?text=Picture6",
  "https://placehold.co/1080x606/777777/FFF?text=Picture7",
  "https://placehold.co/1080x606/777777/FFF?text=Picture8",
  "https://placehold.co/1080x606/777777/FFF?text=Picture9"
  //You Can add more Pictures
];

let currentIndex = 0;
const previewImg = document.querySelector('.gallery-preview-container img');
const thumbnailsContainer = document.querySelector('.thumbnails-slider');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

function generateThumbnails() {
  gallery_images.forEach((imgSrc, index) => {
    const thumbnail = document.createElement('div');
    thumbnail.className = 'thumbnail';
    if (index === currentIndex) thumbnail.classList.add('active');
    
    const img = document.createElement('img');
    img.src = imgSrc;
    img.alt = `Thumbnail ${index + 1}`;
    
    thumbnail.appendChild(img);
    thumbnailsContainer.appendChild(thumbnail);
    
    thumbnail.addEventListener('click', () => {
      changeImage(index);
    });
  });
}

function changeImage(index) {
  currentIndex = index;
  const currentImage = gallery_images[currentIndex];
  
  previewImg.src = currentImage;
  
  document.querySelectorAll('.thumbnail').forEach((thumb, i) => {
    thumb.classList.toggle('active', i === currentIndex);
  });
}

function prevImage() {
  currentIndex = (currentIndex - 1 + gallery_images.length) % gallery_images.length;
  changeImage(currentIndex);
}

function nextImage() {
  currentIndex = (currentIndex + 1) % gallery_images.length;
  changeImage(currentIndex);
}

prevBtn.addEventListener('click', prevImage);
nextBtn.addEventListener('click', nextImage);

generateThumbnails();




