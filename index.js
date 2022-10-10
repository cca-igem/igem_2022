import LocomotiveScroll from "locomotive-scroll";

window.addEventListener("load", () => {
  const scroll = new LocomotiveScroll({
    el: document.querySelector("[data-scroll-container]"),
    smooth: true,
  });

  let nav = document.querySelector("nav");

  let lastScroll = 0;

  scroll.on("scroll", (instance) => {
    instance.scroll.y > 100
      ? nav.classList.add("filled")
      : nav.classList.remove("filled");
    if (instance.scroll.y < lastScroll) {
      nav.style.top = "0";
    } else {
      nav.style.top = "-8rem";
    }

    lastScroll = instance.scroll.y;
  });

  scroll.on("call", (func) => {
    if (func === `animateCountUp(document.querySelector('#counter'))`) {
      const animationDuration = 1500;
      const frameDuration = 1000 / 60;
      const totalFrames = Math.round(animationDuration / frameDuration);

      const easeOutQuad = (t) => t * (2 - t);
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
    }
  });

  let ul = document.querySelector("#sidebar ul");

  document.querySelectorAll(".project .header h1").forEach((el) => {
    let item = document.createElement("li");
    let itemLink = document.createElement("a");
    itemLink.textContent = el.textContent;
    itemLink.addEventListener("click", () => {
      scroll.scrollTo(el, { offset: "-60px" });
    });

    item.appendChild(itemLink);
    ul.appendChild(item);
  });
});

let dropdowns = document.querySelectorAll(".dropdown");
let submenus = document.querySelectorAll(".submenu");

window.addEventListener("click", (e) => {
  if (
    !e.target.classList.contains("submenu") &&
    !e.target.classList.contains("dropdown")
  ) {
    dropdowns.forEach((item) => {
      item.parentElement.querySelector(".submenu").classList.remove("open");
    });
  }
});

dropdowns.forEach((el) =>
  el.addEventListener("click", () => {
    let submenu = el.parentElement.querySelector(".submenu");

    if (!submenu.classList.contains("open")) {
      submenus.forEach((item) => {
        item.classList.remove("open");
        item.style.transition = "all .5s ease";
      });
      submenu.classList.add("open");
    } else {
      submenu.classList.remove("open");
    }
  })
);
