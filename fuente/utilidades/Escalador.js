import { escalarTexto, esperar, pixelesDesdePorcentaje, porcentaje } from './ayudas';

export default class Escalador {
  constructor(contenedorGeneral) {
    this.contenedorGeneral = contenedorGeneral;
    this.elementos = [];
    this.secciones = [document.getElementById('titulo'), document.getElementById('descripcion')];
    this.altoImg = 2048;
    this.anchoImg = 1367;

    window.onresize = () => esperar().then(this.actualizar);
  }

  agregarElementos(elementos) {
    this.elementos = elementos;
  }

  definir() {
    const anchoPantalla = Math.min(window.innerWidth, window.outerWidth);
    const altoPantalla = Math.min(window.innerHeight, window.outerHeight);
    this.alto = altoPantalla;
    this.ancho = pixelesDesdePorcentaje(porcentaje(this.alto, this.altoImg), this.anchoImg);

    if (this.ancho > anchoPantalla) {
      this.ancho = anchoPantalla;
      this.alto = pixelesDesdePorcentaje(porcentaje(this.ancho, this.anchoImg), this.altoImg);
    }
  }

  actualizar = () => {
    if (!this.elementos.length) return;
    this.definir();
    this.contenedorGeneral.style.width = `${this.ancho * this.secciones.length + this.ancho * this.elementos.length}px`;
    this.contenedorGeneral.style.paddingLeft = `${this.ancho * 2}px`;

    this.secciones.forEach((box) => (box.style.width = `${this.ancho}px`));
    this.secciones[1].style.left = `${this.ancho}px`;

    this.elementos.forEach((ele) => {
      ele.contenedor.style.width = `${this.ancho}px`;
      ele.contenedor.style.height = `${this.alto}px`;
      escalarTexto(ele.contenedor.querySelector('.descripcion'), 1.8);
    });

    escalarTexto(this.secciones[0], 0.3);
    escalarTexto(this.secciones[1], 3);
  };
}
