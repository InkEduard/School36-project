// //Окрытие меню
// $('.header__nav-btn').on('click', function (e) {
//     e.preventDefault;
//     $(this).toggleClass('header__nav-btn-active');
//     $('.header__nav').toggleClass('header__nav-active');
// });
// //закрытие меню
// $('.header__nav-btn-active').on('click', function (e) {
//     e.preventDefault;
//     $(this).toggleClass('header__nav-btn');
//     $('.header__nav-active').toggleClass('header__nav');
// });

const navHeader = document.querySelector('.header__nav');
const navBtnOpen = document.querySelector('.header__nav-btn');

navBtnOpen.addEventListener('click', function () {
    navHeader.classList.toggle('header__nav-active');
    navBtnOpen.classList.toggle('header__nav-btn-active');
});


//вызов формы для регистрации
$('.registration-form').on('click', function (e) {
    e.preventDefault;
    $('.registration').slideToggle('registration-active');
});
//закрытие формы для регистрации 
$('.registerform-close').on('click', function (e) {
    e.preventDefault;
    $('.registration').slideToggle('registration-none');
});

//вызов формы для авторизации
$('.login-form').on('click', function (e) {
    e.preventDefault;
    $('.login').slideToggle('login-active');
});
//закрытие формы для авторизации
$('.loginform-close').on('click', function (e) {
    e.preventDefault;
    $('.login').slideToggle('login-none');
});

//вызов распоряжения 
$('.doc__btn').on('click', function (e) {
    e.preventDefault;
    $('.order-hsa').slideToggle('order-hsa-active');
});
//закрытие распоряжения 
$('.order-hsa').on('click', function (e) {
    e.preventDefault;
    $('.order-hsa').slideToggle('order-hsa-none');
});

// слайдер 1
var swiper = new Swiper('#poll-slider.swiper-container', {
    spaceBetween: 30,
    loop: true,
    speed: 1300,
    autoplay: {
        delay: 20000,
    },
    pagination: {
        el: '#poll-slider .swiper-pagination',
        clickable: true,
    }
});
// слайдер 2 
var swiper = new Swiper('#structure-slider.swiper-container', {
    pagination: {
        el: '.swiper-pagination',
        type: 'progressbar',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
});

var swiper = new Swiper('#education-slider.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 10,
    // init: false,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 4,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 5,
            spaceBetween: 50,
        }
    }
});

// слайдер в gallery
var swiper = new Swiper('#gallery-slider.swiper-container', {
    autoHeight: true, //enable auto height
    spaceBetween: 20,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

// плавная прокрутка
const anchors = document.querySelectorAll('a[href*="#"]');
for (let anchor of anchors) {
    anchor.addEventListener("click", function (event) {
        event.preventDefault();
        const blockID = anchor.getAttribute('href');
        document.querySelector('' + blockID).scrollIntoView({
            behavior: "smooth",
            block: "start"
        })
    })
}

// кастом видеоплеера 

// document.querySelector('#play').onclick = play;
// document.querySelector('#pause').onclick = pause;
// document.querySelector('#stop').onclick = stop;
// document.querySelector('#quickly').onclick = quickly;
// document.querySelector('#slow').onclick = slow;
// document.querySelector('#speed-normal').onclick = speedNormal;
// document.querySelector('#volume').oninput = videoVolume;

// let video;
// let display;
// let progress;

// video = document.querySelector('#video-player');
// progress = document.querySelector('#progress');
// // !!!!!
// video.ontimeupdate = progressUpdate
// progress.onclick = videoRewind;

// function play(){
//     video.play();
// }
// function pause(){
//     video.pause();
// }
// function stop(){
//     video.pause();
//     video.currentTime = 0;
// }
// function quickly(){
//     video.play();
//     video.playbackRate = 2;
// }
// function slow(){
//     video.play();
//     video.playbackRate = 0.5;
// }
// function speedNormal(){
//     video.play();
//     video.playbackRate = 1;
// }
// function videoVolume(){
//     let v = this.value;
//     console.log(v);
//     video.volume = v / 100;
// }
// function progressUpdate(){
//     console.log(video.duration);
//     console.log(video.currentTime);
//     let d = video.duration;
//     let c = video.currentTime;
//     progress.value = (100 * c) / d;
//     document.querySelector('#out').innerHTML = video.currentTime;
// }

// function videoRewind(){
//     let w = this.offsetWidth;
//     let o = event.offsetX;
//     console.log(w);
//     console.log(o);
//     this.value = 100 * o / w;
//     video.pause();
//     video.currentTime = video.duration * (o / w);
//     video.play();
// }

// //кнопка воспроизведения
// $('.play-btn').on('click', function (e) {
//     e.preventDefault;
//     $(this).toggleClass('play-btn-noactive');
//     $('.pause-btn').removeClass('pause-btn');
// });
// //кнопка стоп
// $('.pause-btn').on('click', function (e) {
//     e.preventDefault;
//     $(this).toggleClass('pause-btn');
//     $('.play-btn').removeClass('play-btn-noactive');
// });
// //кнопка звук
// $('.range').on('click', function (e) {
//     e.preventDefault;
//     $('.volume-btn').toggleClass('volume-btn-active');
//     $('юvolume-btn-active').removeClass('volume-btn-active');
// });
