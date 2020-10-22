import gsap from 'gsap';

const homeAnimation = () => {
  gsap.from('.line', {scale: 0, duration: .5, delay: .8});

  gsap.from('.fade-down', {y: 100, opacity: 0, duration: .5, delay: 1});

  gsap.from('.fade-up', {y: -100, opacity: 0, duration: .5, delay: 1});

  gsap.from('.social-nav .nav-link',{x: 100, opacity: 0, delay: 1, stagger: .2, duration: .4});

  gsap.from('.theme-toggler', {x: -100, opacity: 0, delay: 1, duration: .4});

  gsap.from('.home-text p',{x: -100, opacity: 0, delay: 1, duration: .6});

  gsap.from('.home-text .btn',{x: 100, opacity: 0, delay: 1, duration: .6});
};

const workAnimation  = () => {
  gsap.from('h1', {y: -100, opacity: 0, duration: .5, delay: 1});
  gsap.from('h3', {y: 100, opacity: 0, duration: .5, delay: 1});
  gsap.from('.work-info', {x: -100, opacity: 0, duration: .5, delay: 1.3})
  gsap.from('.img-container', {x: 100, opacity: 0, duration: .5, delay: 1.3})
}

const aboutAnimation = () => {
  gsap.from('h1', {y: -100, opacity: 0, duration: .5, delay: 1});
  gsap.from('h3', {y: 100, opacity: 0, duration: .5, delay: 1});
  gsap.from('.about-text', {x: -100, opacity: 0, delay: 1.5, duration: .6});
  gsap.from('.skills', {x: 100, opacity: 0, delay: 1.5, duration: .6});
  gsap.from('.skills p', {x: -100, opacity: 0, delay: 1.6, duration: .6, stagger: .3});
}

const contactAnimation = () => {
  gsap.from('h1', {y: -100, opacity: 0, duration: .5, delay: 1});
  gsap.from('h3', {y: 100, opacity: 0, duration: .5, delay: 1});
  gsap.from('.contact-info p', {y: -100, opacity: 0, delay: 1.6, duration: .6, stagger: .3});
}

function pageTransition() {
  const tl = gsap.timeline();
  tl.to('ul.transition li', {
    duration: 0.5,
    scaleX: 1,
    transformOrigin: 'bottom left',
    stagger: 0.2,
  });
  tl.to('ul.transition li', {
    duration: 0.5,
    scaleX: 0,
    transformOrigin: 'bottom left',
    stagger: 0.1,
    delay: 0.1,
  });
}

function navToggler (){
  const hamburger = document.querySelector('.hamburger');
  if(hamburger.classList.contains('is-active')){
    hamburger.classList.remove('is-active');
    gsap.to('.main-nav', {
        height: 0,
        duration: .4,
        delay: .7
    })
    gsap.to('.main-nav .nav-link', {
        y: -100,
        opacity: 0,
        duration: .2,
        stagger: .2
    })
  } else{
    hamburger.classList.add('is-active');
    gsap.to('.main-nav', {
       height: "100vh",
        duration: .4
    })
    gsap.to('.main-nav .nav-link', {
        y: 0,
        opacity: 1,
        duration: .2,
        delay: .4,
        stagger: .3,
    })
  }  
}


function removePreloader(){
  gsap.to('.preloader svg', {y: "100vh", display: 'none', duration: .4, opacity: 0});
  gsap.to('.preloader',{height: 0, duration: .3, delay: .4,});
}
 

export { 
  homeAnimation, 
  workAnimation, 
  pageTransition, 
  navToggler,
  aboutAnimation,
  contactAnimation,
  removePreloader
};
