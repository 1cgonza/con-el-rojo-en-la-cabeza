import './scss/styles.scss';
import Resizer from './js/Resizer';
import Zoom from './js/Zoom';
import fetch from './js/fetch';
import lazy from './js/lazy';

const main = document.getElementById('main');
const about = document.getElementById('about');
const aboutBtn = document.getElementById('aboutBtn');
let elements = [];
let scrolledLeft = 0;
const counters = document.querySelectorAll('.count');
const inicio = new Date('11/21/2019');
const fin = new Date();

counters.forEach(counter => {
  const days = (((fin.getTime() - inicio.getTime()) / (1000 * 3600 * 24)) | 0) + 1;
  counter.innerText = days;
});

const resize = new Resizer(main);

function init(page) {
  fetch(page).then(res => {
    res.photo.reverse();
    res.photo.forEach(photo => {
      const container = document.createElement('div');
      const img = document.createElement('img');
      const desc = document.createElement('div');

      container.className = 'img';
      img.className = 'lazy';
      desc.className = 'descripcion';

      img.dataset.src = photo.url_k;
      img.setAttribute('alt', photo.title);
      desc.innerText = photo.description._content.replace(/&quot;/g, '"');
      container.style.width = `${resize.eleW}px`;

      new Zoom(container, img);

      container.appendChild(img);
      container.appendChild(desc);
      main.appendChild(container);

      elements.push({
        container: container,
        img: img
      });
    });

    if (res.page < res.pages) {
      init(++res.page);
    } else {
      const images = [...document.querySelectorAll('.lazy')];
      resize.bindElements(elements);
      resize.update();
      lazy(images);
    }
  });
}

init(1);

main.addEventListener('wheel', ev => {
  ev.preventDefault();
  const delta = Math.sign(ev.deltaY);
  scrolledLeft += delta * 40;

  if (scrolledLeft < 0) {
    scrolledLeft = 0;
  } else if (scrolledLeft > main.clientWidth) {
    scrolledLeft = main.clientWidth;
  }

  document.body.scrollLeft = document.documentElement.scrollLeft = scrolledLeft;
});

// main.ontouchstart = e => {
//   e.preventDefault();
//   console.log('touch');
// };

aboutBtn.onclick = () => {
  about.classList.toggle('active');
};
