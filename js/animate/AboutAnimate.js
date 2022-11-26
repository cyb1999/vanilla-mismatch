const image = document.querySelector('.image');
const text = document.querySelector('.text');
const text_2 = document.querySelector('.text_2');
const text_3 = document.querySelector('.text_3');
const text_4 = document.querySelector('.text_4');
const text_5 = document.querySelector('.text_5');
const text_6 = document.querySelector('.text_6');
const text_7 = document.querySelector('.text_7');
const group_2 = document.querySelector('.group_2');
const top2_section_3 = document.querySelector('.top2_section_3');
const top2_image_5 = document.querySelector('.top2_image_5');
const top2_image_6 = document.querySelector('.top2_image_6');

image.classList.add('animate__animated', 'animate__fadeInRight');
text.classList.add('animate__animated', 'animate__fadeInDown');
text_2.classList.add('animate__animated', 'animate__fadeInRight');
text_3.classList.add('animate__animated', 'animate__fadeInRight');
text_4.classList.add('animate__animated', 'animate__fadeInRight');
text_5.classList.add('animate__animated', 'animate__fadeInLeft');
text_6.classList.add('animate__animated', 'animate__fadeInLeft');
text_7.classList.add('animate__animated', 'animate__fadeInRight');
group_2.classList.add('animate__animated', 'animate__fadeInRight');
const top2_text_4 = document.querySelector('.top2_text_4');
const top2_text_5 = document.querySelector('.top2_text_5');



const top2_sectionId = document.getElementById('top2_section_3');

window.addEventListener('scroll', function () {
    const offset = top2_sectionId.getBoundingClientRect()
    const offsetTop = offset.top;
    const offsetBottom = offset.bottom;
    const offsetHeight = offset.height;
    // console.log(offsetTop, offsetBottom, offsetHeight)
    if (offsetTop < 950 || offsetTop < 900) {
        top2_section_3.classList.add('animate__animated', 'animate__fadeInLeft');
    }
    if (offsetTop < 580 || offsetTop < 500) {
        top2_text_4.classList.add('animate__animated', 'animate__fadeInLeft');
        top2_text_5.classList.add('animate__animated', 'animate__fadeInLeft');

    }
    if (offsetTop < 450) {
        top2_image_5.classList.add('animate__animated', 'animate__fadeInLeft');
    }
    if (offsetTop < 280) {
        top2_image_6.classList.add('animate__animated', 'animate__fadeInUp');
    }
}, true);




