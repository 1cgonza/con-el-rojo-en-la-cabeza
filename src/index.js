import './scss/styles.scss';
import fetch from './js/fetch';
import lazy from './js/lazy';

const main = document.getElementById('main');
let images;
let current;
let pad = window.getComputedStyle(main, null).getPropertyValue('padding-top');

function init(page) {
  fetch(page).then(res => {
    res.photo.forEach(photo => {
      const container = document.createElement('div');
      const img = document.createElement('img');
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
      lazy(images);
    }
  });
}

main.onscroll = e => {
  if (!current) return;
  const coords = current.boundingClientRect;
  const imgH = current.target.clientHeight;
  const divH = window.innerHeight;
  const scrolled = main.scrollTop;
  const step = divH / imgH;

  current.target.style.transform = `translateY(${scrolled * step}px)`;
  console.log(imgH, divH);
};

init(1);
