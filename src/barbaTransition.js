import barba from '@barba/core';
import header from './components/header.html'
import { 
  homeAnimation,
  workAnimation, 
  pageTransition,
  aboutAnimation,
  contactAnimation, 
  removePreloader,
  navToggler
} from './js/main';

function delay(n) {
  return new Promise((done) => {
    setTimeout(() => {
      done();
    }, n);
  });
}





document.addEventListener('DOMContentLoaded', () => {

  removePreloader();

  const selector = (s) => document.querySelector(s);
  document.getElementById('header').innerHTML = header;
  
  selector(".theme-toggler").addEventListener('click', () => {
      const body =  selector('body');
      const icon = selector('.theme-toggler');
     
      if(body.classList.contains('dark')){
        body.classList.remove('dark');
        icon.innerHTML = '<i class="fas fa-moon"></i>'
      }else{
        body.classList.add('dark');
        icon.innerHTML = '<i class="fas fa-sun"></i>'
      }
  });

  selector('.hamburger').addEventListener('click', navToggler);
  

  

barba.init({
  sync: true,

  transitions: [
    {
      async leave(data) {
        pageTransition();
        await delay(1000);
        //data.current.container.remove();
      },
     
    },
  ],
views: [
  {
    namespace: 'home',
    async afterEnter() {
      homeAnimation();
    }
  }, 
  {
    namespace: 'work',
    async afterEnter() {
      workAnimation();
    }
  },
  {
    namespace: 'about',
    async afterEnter() {
      aboutAnimation();
    }
  }, 
  {
    namespace: 'contact',
    async afterEnter() {
     contactAnimation();
    }
  },  
]
});
});

