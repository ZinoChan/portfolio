import barba from '@barba/core';
import { 
  homeAnimation,
  workAnimation, 
  pageTransition 
} from './js/main';

function delay(n) {
  return new Promise((done) => {
    setTimeout(() => {
      done();
    }, n);
  });
}


document.addEventListener('DOMContentLoaded', () => {
barba.init({
  sync: true,

  transitions: [
    {
      async leave(data) {
        pageTransition();
        await delay(1000);
        data.current.container.remove();
      },
      async beforeEnter(data) {
        document.querySelector('.hamburger').classList.remove('is-active');
      },
      // async beforeEnter(data) {
      //   ScrollTrigger.getAll().forEach(t => t.kill());
      // },
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
]
});
});
