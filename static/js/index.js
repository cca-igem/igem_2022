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
});
