import './scss/styles.scss';
import { getPercent, sizeFromPercentage } from 'dddrawings';
import fetch from './js/fetch';
import lazy from './js/lazy';

const main = document.getElementById('main');
let images;
let current;
const ping = document.getElementById('ping');
const pong = document.getElementById('pong');
let isPing = true;
let last;
let pad = window.getComputedStyle(main, null).getPropertyValue('padding-top');

function init(page) {
  fetch(page).then(res => {
    res.photo.forEach(photo => {
      const container = document.createElement('div');
      const img = document.createElement('img');
      console.log(getPercent(photo.height_o));
      // console.log(photo.height_o, photo.width_o);
      container.className = 'img';
      img.className = 'lazy';
      img.dataset.src = photo.url_k;
      img.setAttribute('alt', photo.title);
      container.appendChild(img);
      main.appendChild(container);
    });

    if (res.page < res.pages) {
      init(++res.page);
    } else {
      images = [...document.querySelectorAll('.lazy')];

      const observer = new IntersectionObserver(
        entries => {
          const entry = entries[0];

          if (entry.isIntersecting) {
            console.log('intersecting');
            current = [entry, entry.target.querySelector('img')];
          }
        },
        {
          root: main,
          threshold: 0
        }
      );

      const target = document.querySelector('.img');
      observer.observe(target);

      lazy(images);
    }
  });
}

main.onscroll = e => {
  if (!current) return;
  const scrolled = main.scrollTop;
  const coords = current[0].boundingClientRect;
  const offY = scrolled - coords.top;
  const yStep = current[1].clientHeight / coords.height;

  current[1].style.top = `${offY * yStep}px`;
  // console.log(imgH, divH);
};

init(1);
