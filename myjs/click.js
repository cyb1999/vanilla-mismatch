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
    console.log('11')

}
const CloudScroll = (event) => {
    let scrollTop = document.getElementsByClassName('page')[0].scrollTop;
    if (scrollTop > 20) {
        image.classList.add('animate__animated', 'animate__fadeOutLeft');
        image_2.classList.add('animate__animated', 'animate__fadeOutRight');
        image_3.classList.add('animate__animated', 'animate__fadeOutLeft');
        image_4.classList.add('animate__animated', 'animate__fadeOutLeft');
        image_5.classList.add('animate__animated', 'animate__fadeOutRight');
        image_6.classList.add('animate__animated', 'animate__fadeOutLeft');
        image_7.classList.add('animate__animated', 'animate__fadeOutRight');
        image_8.classList.add('animate__animated', 'animate__fadeOutRight');
        section_2.classList.add('animate__animated', 'animate__fadeOutRight');
        image_wrapper.classList.add('animate__animated', 'animate__fadeOutRight');
        tap.classList.add('animate__animated', 'animate__fadeOutDown');
        down_icon.classList.add('animate__animated', 'animate__fadeOutDown');
    }
    if (scrollTop === 0) {
        image.classList.remove('animate__animated', 'animate__fadeOutLeft');
        image.classList.add('animate__animated', 'animate__fadeInLeft');
        image_2.classList.remove('animate__animated', 'animate__fadeOutRight');
        image_2.classList.add('animate__animated', 'animate__fadeInRight');
        image_3.classList.remove('animate__animated', 'animate__fadeOutLeft');
        image_3.classList.add('animate__animated', 'animate__fadeInLeft');
        image_4.classList.remove('animate__animated', 'animate__fadeOutLeft');
        image_4.classList.add('animate__animated', 'animate__fadeInLeft');
        image_5.classList.remove('animate__animated', 'animate__fadeOutRight');
        image_5.classList.add('animate__animated', 'animate__fadeInRight');
        image_6.classList.remove('animate__animated', 'animate__fadeOutLeft');
        image_6.classList.add('animate__animated', 'animate__fadeInLeft');
        image_7.classList.remove('animate__animated', 'animate__fadeOutRight');
        image_7.classList.add('animate__animated', 'animate__fadeInRight');
        image_8.classList.remove('animate__animated', 'animate__fadeOutRight');
        image_8.classList.add('animate__animated', 'animate__fadeInRight');
        section_2.classList.remove('animate__animated', 'animate__fadeOutRight');
        section_2.classList.add('animate__animated', 'animate__fadeInRight');
        image_wrapper.classList.remove('animate__animated', 'animate__fadeOutRight');
        image_wrapper.classList.add('animate__animated', 'animate__fadeInRight');
        tap.classList.remove('animate__animated', 'animate__fadeOutDown');
        tap.classList.add('animate__animated', 'animate__fadeInDown');
        down_icon.classList.remove('animate__animated', 'animate__fadeOutDown');
        down_icon.classList.add('animate__animated', 'animate__fadeInDown');
    }

}

//IE之外的绑定事件方法 
if (document.addEventListener && !document.attachEvent) {
    var isMobile = 'ontouchstart' in document;
    console.log(isMobile);
    if (isMobile) {
        document.addEventListener('touchstart', CloudScroll, true);
        document.addEventListener("touchmove", CloudScroll, true);
    }
    document.addEventListener('mousewheel', CloudScroll);

}


const Jump = () => {
    window.location.href = "slotmachine.html";
}


