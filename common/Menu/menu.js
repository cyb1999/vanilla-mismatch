//Menu开关事件
const Menu = () => {
    const NavSwitch_Header = document.getElementById('NavSwitch_Header')
    const NavSwitch_Group = document.getElementById('NavSwitch_Group');
    const NavSwitch_Wrapper = document.getElementById('NavSwitch_Wrapper');
    const OpenStatus = NavSwitch_Header.classList.contains("open_header")
    const CloseStatus = NavSwitch_Header.classList.contains("menu_header")
    if (CloseStatus) {
        NavSwitch_Header.classList.replace('menu_header', 'open_header')
        NavSwitch_Wrapper.classList.replace('menu_image_wrapper', 'open_image_wrapper')
        NavSwitch_Group.classList.replace('menu_group', 'open_group')
    }
    if (OpenStatus) {
        NavSwitch_Header.classList.replace('open_header', 'menu_header')
        NavSwitch_Wrapper.classList.replace('open_image_wrapper', 'menu_image_wrapper')
        NavSwitch_Group.classList.replace('open_group', 'menu_group')
    }






}