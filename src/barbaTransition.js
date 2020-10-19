import barba from '@barba/core';
import { homeAnimation, pageTransition } from './js/main';

function delay(n) {
  return new Promise((done) => {
    setTimeout(() => {
      done();
    }, n);
  });
}

/*barba.init({
  sync: true,
  transitions: [
    {
      async leave() {
        pageTransition();
        await delay(1000);
      },

      async enter() {
        animation();
      },
      async once() {
        animation();
      },
    },
  ],
});
*/


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
    asy
    },
  ],
views: [
  {
    namespace: 'home',
    async afterEnter() {
      homeAnimation();
    },
  },  
]
});
});

