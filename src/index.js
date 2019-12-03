import './scss/styles.scss';
import Resizer from './js/Resizer';
import fetch from './js/fetch';
import lazy from './js/lazy';

// TODO: prueba, hacer palpitar las fotos con el texto

const main = document.getElementById('main');
let elements = [];
let images;
let scrolledLeft = 0;

const resize = new Resizer(main);

function init(page) {
  fetch(page).then(res => {
    console.log(res);
    res.photo.forEach(photo => {
      const container = document.createElement('div');
      const img = document.createElement('img');
      const desc = document.createElement('p');

      container.className = 'img';
      img.className = 'lazy';
      desc.className = 'descripcion';

      img.dataset.src = photo.url_k;
      img.setAttribute('alt', photo.title);
      desc.innerText = photo.description._content;

      container.style.width = `${resize.eleW}px`;

      container.appendChild(img);
      container.appendChild(desc);
      main.appendChild(container);

      elements.push({
        container: container,
        img: img
      });
    });

    resize.bindElements(elements);

    if (res.page < res.pages) {
      init(++res.page);
    } else {
      images = [...document.querySelectorAll('.lazy')];
      resize.update(elements);
      lazy(images);
    }
  });
}

// main.onscroll = e => {
//   if (!current) return;
//   const img = current[1];
//   const scrolled = main.scrollTop;
//   const coords = current[0].boundingClientRect;
//   const offY = scrolled - coords.top;
//   const yStep = img.clientHeight / coords.height;
//   const oStep = 1 / (window.innerHeight / 2);
//   const o = offY < window.innerHeight / 2 ? offY * oStep : 1;
//   const hue = offY > window.innerHeight / 5 ? 'contrast(249%) hue-rotate(-33deg)' : 'contrast(100%) hue-rotate(0deg)';
//   console.log(main.scrollLeft);
//   // img.style.bottom = `-${offY * yStep}px`;
//   // img.style.opacity = o;
//   // img.style.filter = hue;
//   // console.log(imgH, divH);
// };

init(1);

main.addEventListener('wheel', ev => {
  ev.preventDefault();
  scrolledLeft += ev.deltaY + ev.deltaX;

  if (scrolledLeft < 0) {
    scrolledLeft = 0;
  } else if (scrolledLeft > main.clientWidth) {
    scrolledLeft = main.clientWidth;
  }

  document.body.scrollLeft = document.documentElement.scrollLeft = scrolledLeft;
});
