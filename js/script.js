const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');
const slider = document.querySelector('.slider');

const images = [
    './Assets/image-slide/sl1.png',
    './Assets/image-slide/sl2.png',
    './Assets/image-slide/sl3.png',
    './Assets/image-slide/sl4.png',
    './Assets/image-slide/sl5.png',
    './Assets/image-slide/sl6.png',
    './Assets/image-slide/sl8.jpg',
    './Assets/image-slide/sl9.jpg',
    './Assets/image-slide/sl10.jpg',
    './Assets/image-slide/sl11.jpg',
    './Assets/image-slide/sl12.jpg',
    './Assets/image-slide/sl13.jpeg'
];

let slideIndex = 0;


images.forEach(src => {
    const img = document.createElement('img');
    img.src = src;
    img.style.width = '100vw';
    img.style.height = '500px'
    // img.object.fit = 'fill'
    slider.appendChild(img);
});

const showSlide = (index) => {
    if (index >= images.length) {
        slideIndex = 0;
    } else if (index < 0) {
        slideIndex = images.length - 1;
    }
    slider.style.transform = `translateX(-${slideIndex * 100}vw)`;
};

rightArrow.addEventListener('click', () => {
    slideIndex++;
    showSlide(slideIndex);
    stopAutoSlide();
    startAutoSlide();
});

leftArrow.addEventListener('click', () => {
    slideIndex--;
    showSlide(slideIndex);
    stopAutoSlide();
    startAutoSlide();
});

let autoSlideInterval;

const startAutoSlide = () => {
    autoSlideInterval = setInterval(() => {
        slideIndex++;
        showSlide(slideIndex);
    }, 4000);
};

const stopAutoSlide = () => {
    clearInterval(autoSlideInterval);
};

slider.addEventListener('mouseover', stopAutoSlide);
slider.addEventListener('mouseout', startAutoSlide);


showSlide(slideIndex);
startAutoSlide();



// let accountForm = document.querySelector('.account-form')

// document.querySelector('#account-btn').onclick = () =>{
//   accountForm.classList.add('active');
// }

// document.querySelector('#close-form').onclick = () =>{
//   accountForm.classList.remove('active');
// };



