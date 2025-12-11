let menu = document.querySelector('#menu');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

const navLinks = document.querySelectorAll('.navbar a');
navLinks.forEach(link => {
    link.onclick = () => {
        menu.classList.remove('bx-x');
        navbar.classList.remove('active');
    }
});

window.onscroll = () => {
    if(window.scrollY > 50){
        document.querySelector('header').style.background = 'rgba(0,0,0,0.8)';
    } else {
        document.querySelector('header').style.background = 'rgba(0,0,0,0.5)';
    }
}

const typed = new Typed('.multiplue-text', {
    strings: ['Physical Fitness', 'Weight Gain','Strength Training','Fat Lose','Weight Liffting','Running'],
    typeSpeed: 50,
    backSpeed: 50,
    backDelay: 500,
    loop: true
});
