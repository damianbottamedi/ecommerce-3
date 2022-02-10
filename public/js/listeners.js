var menuToggle = document.getElementById('menu-toggle__container')
var navResponsive = document.getElementById('responsive-nav-bar')
var topSpan = document.getElementById('menu-toggle__top-span')
var middleSpan = document.getElementById('menu-toggle__middle-span')
var bottomSpan = document.getElementById('menu-toggle__bottom-span')

menuToggle.addEventListener('click', function(){
    if(navResponsive.style.display == 'block'){
        navResponsive.style.display = 'none'
        topSpan.classList.remove('menu-toggle__top-span__click')
        middleSpan.classList.remove('menu-toggle__middle-span__click')
        bottomSpan.classList.remove('menu-toggle__bottom-span__click')
        menuToggle.classList.add('menu-toggle__container__hover-top-span')
        menuToggle.classList.add('menu-toggle__container__hover-bottom-span')
    }else{
        navResponsive.style.display = 'block'
        topSpan.classList.add('menu-toggle__top-span__click')
        middleSpan.classList.add('menu-toggle__middle-span__click')
        bottomSpan.classList.add('menu-toggle__bottom-span__click')
        menuToggle.classList.remove('menu-toggle__container__hover-top-span')
        menuToggle.classList.remove('menu-toggle__container__hover-bottom-span')
    }
})
