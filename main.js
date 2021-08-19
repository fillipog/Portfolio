const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for( const element of toggle ) {
    element.addEventListener('click', function() {
        nav.classList.toggle('show')
    })
}

const links = document.querySelectorAll('nav ul li a')

for( const link of links) {
    link.addEventListener('click', function() {
        nav.classList.remove('show')
    })
}

const header = document.querySelector('#header')
const navHeight = header.offsetHeight

window.addEventListener('scroll', function() {
    if(window.scrollY >= navHeight) {
        header.classList.add('scroll')
    } else {
        header.classList.remove('scroll')
    }
})

/* ---- scroll home ----- */


const scrollReveal = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 700,
    reset: true
})

scrollReveal.reveal(
    `
    #home .text, #home .image,
    #home .text-welcome,
    #about .image, #about .text,
    #works .cards-works, #works .cards,
    #contact .links, #contact .social
    `, { interval: 100 });


function textHomeWelcome(element){
    const textArray = element.innerHTML.split('');
    element.innerHTML = '';
    textArray.forEach((letra, i) => {
        setTimeout(() => {
            element.innerHTML += letra;
        }, 120 * i);
    })
}

const title = document.querySelector('h1')
textHomeWelcome(title)

setInterval(() => {
    (textHomeWelcome(title))
}, 4000)