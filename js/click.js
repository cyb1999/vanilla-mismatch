const btn = () => {
    const image_wrapper = document.querySelector('.image_wrapper');
    image.classList.add('animate__animated', 'animate__fadeInLeft');
    image_2.classList.add('animate__animated', 'animate__fadeInRight');
    image_3.classList.add('animate__animated', 'animate__fadeInLeft');
    image_4.classList.add('animate__animated', 'animate__fadeInLeft');
    image_5.classList.add('animate__animated', 'animate__fadeInRight');
    image_6.classList.add('animate__animated', 'animate__fadeInLeft');
    image_7.classList.add('animate__animated', 'animate__fadeInRight');
    image_8.classList.add('animate__animated', 'animate__fadeInRight');
    section_2.classList.add('animate__animated', 'animate__fadeInRight');
    image_wrapper.classList.add('animate__animated', 'animate__fadeInRight');
    tap.classList.add('animate__animated', 'animate__fadeInDown');
    down_icon.classList.add('animate__animated', 'animate__fadeInDown');

}




const JumpAbout = () => {
    var JumpState = false
    const image_wrapper = document.querySelector('.image_wrapper');
    image.classList.add('animate__animated', 'animate__fadeInLeft');
    image_2.classList.add('animate__animated', 'animate__fadeInRight');
    image_3.classList.add('animate__animated', 'animate__fadeInLeft');
    image_4.classList.add('animate__animated', 'animate__fadeInLeft');
    image_5.classList.add('animate__animated', 'animate__fadeInRight');
    image_6.classList.add('animate__animated', 'animate__fadeInLeft');
    image_7.classList.add('animate__animated', 'animate__fadeInRight');
    image_8.classList.add('animate__animated', 'animate__fadeInRight');
    section_2.classList.add('animate__animated', 'animate__fadeInRight');
    image_wrapper.classList.add('animate__animated', 'animate__fadeInRight');
    tap.classList.add('animate__animated', 'animate__fadeInDown');
    down_icon.classList.add('animate__animated', 'animate__fadeInDown');
    JumpState = true
    if (JumpState) {

        window.location.href = 'about.html'
    }

    // window.location.href = "slotmachine.html";
}


