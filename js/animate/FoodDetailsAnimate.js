const video_ctr = document.getElementById('video_ctr')
const per = document.getElementById('per')
const hearts_text = document.getElementById('hearts_text')
const dialog_1 = document.getElementById('dialog_1')
const dialog_2 = document.getElementById('dialog_2')
const bottom_btn1 = document.getElementById('bottom_btn1')
const bottom_btn2 = document.getElementById('bottom_btn2')
video_ctr.classList.add('animate__animated', 'animate__fadeIn');
per.classList.add('animate__animated', 'animate__fadeIn');
hearts_text.classList.add('animate__animated', 'animate__fadeIn');

const dialog_ctr = document.getElementById('dialog_ctr');
window.addEventListener('scroll', function () {
    const offset = dialog_ctr.getBoundingClientRect()
    const offsetTop = offset.top;
    const offsetBottom = offset.bottom;
    const offsetHeight = offset.height;

    // console.log(offsetTop, offsetBottom, offsetHeight)
    if (offsetTop < 850 || offsetTop < 800) {
        dialog_1.classList.add('animate__animated', 'animate__fadeInLeft');
    }
    if (offsetTop < 580 || offsetTop < 500) {
        dialog_2.classList.add('animate__animated', 'animate__fadeInRight');

    }

    if (offsetTop < 280) {
        bottom_btn1.classList.add('animate__animated', 'animate__fadeInUp');

    }
    if (offsetTop < 150) {
        bottom_btn2.classList.add('animate__animated', 'animate__fadeInUp');
    }
}, true);
