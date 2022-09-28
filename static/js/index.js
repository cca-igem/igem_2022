import LocomotiveScroll from 'locomotive-scroll';

window.addEventListener('load', () => {
  const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true,
  });
});
