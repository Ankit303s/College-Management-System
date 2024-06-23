const left_slider = document.querySelector('.left-arrow');
const right_slider = document.querySelector('.right-arrow');
const slider = document.querySelector('.slider');
const sl_images = document.querySelectorAll('.image');
sl_length = sl_images.length
let slidenumber = 1
//for right arrow
const next_slide = () => {
    slider.style.transform = `translateX(-${slidenumber*100}vw)`
    slidenumber++
}
const first_slide = () => {
    slider.style.transform = 'translateX(0px)'
    slidenumber = 1;
}

right_slider.addEventListener( 'click', () => {
    slidenumber < sl_length ? next_slide() : first_slide()
});

//for left arrow
const previous_slide = () => {
    slider.style.transform = `translateX(-${(slidenumber-2)*100}vw)`
    slidenumber--
}

const last_slide = () => {
    slider.style.transform = `translateX(-${(sl_length-1)*100}vh)`
    slidenumber = slidenumber.length;
}
left_slider.addEventListener( 'click', () => {
    previous_slide()
    slidenumber > 1 ? previous_slide() : last_slide()
});