import gsap from 'gsap';

const animation = () => {
  const tl = gsap.timeline();
  tl.from('h1', {
    y: 100,
    opacity: 0,
    duration: 1.5,
  }).from('.btn', {
    scale: 0,
    opacity: 0,
    duration: 1.5,
  });
};

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

export { animation, pageTransition };
