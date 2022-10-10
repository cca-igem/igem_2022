import LocomotiveScroll from 'locomotive-scroll';

window.addEventListener('load', () => {
  const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true,
  });

  let nav = document.querySelector('nav');

  let lastScroll = 0;

  scroll.on('scroll', (instance) => {
    instance.scroll.y > 100 ? nav.classList.add('filled') : nav.classList.remove('filled');
    if (instance.scroll.y < lastScroll) {
      nav.style.top = '0';
    } else {
      nav.style.top = '-8rem';
    }

    lastScroll = instance.scroll.y;
  });

  scroll.on('call', (func) => {
    eval(func);
  });
});

const animationDuration = 1500;
const frameDuration = 1000 / 60;
const totalFrames = Math.round(animationDuration / frameDuration);

const easeOutQuad = (t) => t * (2 - t);
const animateCountUp = (el) => {
  let frame = 0;
  const countTo = parseInt(el.innerHTML, 10);
  const counter = setInterval(() => {
    frame++;
    const progress = easeOutQuad(frame / totalFrames);
    const currentCount = Math.round(countTo * progress);
    if (parseInt(el.innerHTML, 10) !== currentCount) {
      el.innerHTML = currentCount;
    }
    if (frame === totalFrames) {
      clearInterval(counter);
    }
  }, frameDuration);
};
