import './scss/styles.scss';
import Resizer from './js/Resizer';
import Zoom from './js/Zoom';
import fetch from './js/fetch';
import lazy from './js/lazy';

const main = document.getElementById('main');
const about = document.getElementById('about');
const aboutBtn = document.getElementById('aboutBtn');
const ayudas = document.querySelectorAll('.ayuda');
let elements = [];
let scrolledLeft = 0;

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

  if (scrolledLeft > resize.eleW) {
    ayudas.forEach(icono => icono.classList.add('hide'));
  } else {
    ayudas.forEach(icono => icono.classList.remove('hide'));
  }

  document.body.scrollLeft = document.documentElement.scrollLeft = scrolledLeft;
});

aboutBtn.onclick = () => {
  about.classList.toggle('active');
};
