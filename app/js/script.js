const body = document.querySelector('body')
const btnHamburger = document.querySelector('#btnHamburger');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const fadeElems = document.querySelectorAll('.has-fade');

btnHamburger.addEventListener('click', () => {
    if (header.classList.contains('open')) {
        fadeElems.forEach((el) => {
            el.classList.remove('fade-in');
            el.classList.add('fade-out');
        });
        header.classList.remove('open');
    } else {
        header.classList.add('open');
        
        fadeElems.forEach((el) => {
            el.classList.remove('fade-out');
            el.classList.add('fade-in');
        });
        
    }

});