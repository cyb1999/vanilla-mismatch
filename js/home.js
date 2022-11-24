const JumpAbout = () => {
    const image_wrapper = document.querySelector('.image_wrapper');
    image.classList.add('animate__animated', 'animate__fadeOutLeft');
    image_2.classList.add('animate__animated', 'animate__fadeOutRight');
    image_3.classList.add('animate__animated', 'animate__fadeOutLeft');
    image_4.classList.add('animate__animated', 'animate__fadeOutLeft');
    image_5.classList.add('animate__animated', 'animate__fadeOutRight');
    image_6.classList.add('animate_v_animated', 'animate__fadeOutLeft');
    image_7.classList.add('animate__animated', 'animate__fadeOutRight');
    image_8.classList.add('animate__animated', 'animate__fadeOutRight');
    section_2.classList.add('animate__animated', 'animate__fadeOutRight');
    image_wrapper.classList.add('animate__animated', 'animate__fadeOutRight');
    tap.classList.add('animate__animated', 'animate__fadeOutDown');
    down_icon.classList.add('animate__animated', 'animate__fadeOutDown');
    JumpState = true
    setTimeout(() => {
        if (JumpState) {
            window.location.href = '/view/about.html'
        }
    }, 800);


}


