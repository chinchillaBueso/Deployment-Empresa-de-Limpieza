//const myCarouselElement = document.querySelector('#carouselExampleControlsNoTouching')
//const carousel = new bootstrap.Carousel(myCarouselElement, {
//  interval: 2000,
 // wrap: false,
 // cycle
//})

const menu= document.querySelector('.menu');
const menu2=document.getElementById('menu')
menu.addEventListener('click',()=>{
    menu2.classList.toggle('visualizar')
})