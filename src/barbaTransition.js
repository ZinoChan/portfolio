import barba from '@barba/core';
import { animation, pageTransition } from './js/main';

function delay(n) {
  return new Promise((done) => {
    setTimeout(() => {
      done();
    }, n);
  });
}

barba.init({
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
