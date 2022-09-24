import LocomotiveScroll from 'locomotive-scroll';

window.addEventListener('load', () => {
  const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true,
  });
  
  let ul = document.querySelector('#sidebar ul');

  document.querySelectorAll('.project .header h1').forEach((el) => {
    let item = document.createElement('li');
    let itemLink = document.createElement('a');
    itemLink.textContent = el.textContent;
    itemLink.addEventListener('click', () => {
      scroll.scrollTo(el, { offset: '-60px' });
    });

    item.appendChild(itemLink);
    ul.appendChild(item);
  });

  document.querySelectorAll('.container-text a').forEach((link) => {
    link.innerHTML =
      '<div><span>' + link.textContent.trim().split('').join('</span><span>') + '</span></div>';
    link
      .querySelectorAll('span')
      .forEach((s) => (s.innerHTML = s.textContent == ' ' ? '&nbsp;' : s.textContent));
    link.insertAdjacentHTML(
      'beforeend',
      '<div><svg preserveAspectRatio="none" viewBox="0 0 192 5"><path d="M191.246 4H129C129 4 127.781 4.00674 127 4C114.767 3.89447 108.233 1 96 1C83.7669 1 77.2327 3.89447 65 4C64.219 4.00674 63 4 63 4H0.751923" /></svg></div>'
    );
  });
});
