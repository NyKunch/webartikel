const slider = document.querySelector('.slider');
const leftArrow = document.querySelector('.left');
const rightArrow = document.querySelector('.right');
const textProfil = document.querySelector('.text-profil');
const role = document.querySelector('.role');
const fotoku = document.querySelector('#fotoku');

let sectionIndex = 0;

rightArrow.addEventListener('click',function(){
    if(sectionIndex<4){
    sectionIndex += 1;
    slider.style.transform = 'translate(' + (sectionIndex) * -20 + '%)';
}
});

leftArrow.addEventListener('click',function(){
    if(sectionIndex>0){
    sectionIndex -= 1;
    slider.style.transform = 'translate(' + (sectionIndex) * -20 + '%)';
}
});

const menu = document.querySelector('#mobile-menu');
const navMenu = document.querySelector('.nav-menu');
// const menuLink = document.querySelector('.nav-link');

function mobileMenu(){
    menu.classList.toggle('is-active');
    navMenu.classList.toggle('active');
}
function hideMobileMenu(){
    const menuBar = document.querySelector('.is-active');
    if(window.innerWidth <= 768 && menuBar){
        menu.classList.toggle('is-active');
        navMenu.classList.remove('active');
    }
}

menu.addEventListener('click', mobileMenu);
navMenu.addEventListener('click', hideMobileMenu);