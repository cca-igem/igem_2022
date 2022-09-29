let dropdowns = document.querySelectorAll('.dropdown');
let submenus = document.querySelectorAll('.submenu');

window.addEventListener('click', (e) => {
  if (!e.target.classList.contains('submenu') && !e.target.classList.contains('dropdown')) {
    dropdowns.forEach((item) => {
      item.parentElement.querySelector('.submenu').classList.remove('open');
    });
  }
});

dropdowns.forEach((el) =>
  el.addEventListener('click', () => {
    let submenu = el.parentElement.querySelector('.submenu');

    if (!submenu.classList.contains('open')) {
      submenus.forEach((item) => {
        item.classList.remove('open');
        item.style.transition = 'all .5s ease';
      });
      submenu.classList.add('open');
    } else {
      submenu.classList.remove('open');
    }
  })
);