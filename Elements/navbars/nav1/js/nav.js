window.onscroll = () => { stickyNavbar() };
const nav = document.querySelector('#navbar');
let sticky = nav.offsetTop;

function stickyNavbar() {
    if(window.pageYOffset >= sticky) {
        nav.classList.add('sticky');
    } else {
        nav.classList.remove('sticky');
    }
}