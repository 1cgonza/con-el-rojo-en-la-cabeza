import './scss/estilos.scss';
import Escalador from './utilidades/Escalador';
import Lupa from './utilidades/Lupa';
import Flick from './utilidades/Flickr';
import { perezoso } from './utilidades/ayudas';

const contenedorGeneral = document.getElementById('contenedorGeneral');
const creditos = document.getElementById('creditos');
const botonCreditos = document.getElementById('botonCreditos');
const ayudas = document.querySelectorAll('.ayuda');
const elementos = [];
let desplazadoIzq = 0;

const escala = new Escalador(contenedorGeneral);

function inicio(pagina) {
  Flick(pagina).then((res) => {
    res.photo.reverse();
    res.photo.forEach((photo) => {
      const contenedor = document.createElement('div');
      const img = document.createElement('img');
      const desc = document.createElement('div');

      contenedor.className = 'img';
      img.className = 'perezoso';
      desc.className = 'descripcion';
      img.dataset.src = `https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_b.jpg`;
      img.setAttribute('alt', photo.title);
      desc.innerText = photo.description._content.replace(/&quot;/g, '"');
      contenedor.style.width = `${escala.eleW}px`;

      new Lupa(contenedor, img);

      contenedor.appendChild(img);
      contenedor.appendChild(desc);
      contenedorGeneral.appendChild(contenedor);

      elementos.push({ contenedor, img });
    });

    if (res.page < res.pages) {
      init(++res.page);
    } else {
      const images = [...document.querySelectorAll('.perezoso')];
      escala.agregarElementos(elementos);
      escala.actualizar();
      perezoso(images);
    }
  });
}

inicio(1);

contenedorGeneral.addEventListener('wheel', (ev) => {
  ev.preventDefault();
  const delta = Math.sign(ev.deltaY);
  desplazadoIzq += delta * 40;

  if (desplazadoIzq < 0) {
    desplazadoIzq = 0;
  } else if (desplazadoIzq > contenedorGeneral.clientWidth) {
    desplazadoIzq = contenedorGeneral.clientWidth;
  }

  if (desplazadoIzq > escala.eleW) {
    ayudas.forEach((icono) => icono.classList.add('hide'));
  } else {
    ayudas.forEach((icono) => icono.classList.remove('hide'));
  }

  document.body.scrollLeft = document.documentElement.scrollLeft = desplazadoIzq;
});

botonCreditos.onclick = () => {
  creditos.classList.toggle('active');
};
