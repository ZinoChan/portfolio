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
  gsap.from('.title h1', {y: -100, opacity: 0, duration: .5, delay: 1});
  gsap.from('.title h3', {y: 100, opacity: 0, duration: .5, delay: 1});
  
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
 

export { homeAnimation, workAnimation, pageTransition, navToggler };
