export default class Lupa {
  constructor(contenedor, img) {
    this.contenedor = contenedor;
    this.img = img;
    this.escalado = false;

    contenedor.onmousemove = (e) => {
      if (!this.escalado) return;
      this.getPos(e);
    };

    contenedor.onmouseenter = () => {
      if (!this.escalado) return;
      this.img.style.width = `${this.img.naturalWidth}px`;
      this.img.style.height = `${this.img.naturalHeight}px`;
    };

    contenedor.onmouseleave = () => {
      if (!this.escalado) return;
      this.img.style.width = `auto`;
      this.img.style.height = `100vh`;
      this.img.style.transform = `translate(${0}px, ${0}px)`;
    };

    contenedor.onclick = (e) => {
      this.escalado = !this.escalado;

      if (this.escalado) {
        this.contenedor.classList.add('escalado');
        this.img.style.width = `${this.img.naturalWidth}px`;
        this.img.style.height = `${this.img.naturalHeight}px`;
        this.getPos(e);
      } else {
        this.contenedor.classList.remove('escalado');
        this.img.style.width = `auto`;
        this.img.style.height = `100vh`;
        this.img.style.transform = `translate(${0}px, ${0}px)`;
      }

      document.getElementById('creditos').classList.remove('active');
    };
  }

  getPos(e) {
    const { width, height, left, top } = this.contenedor.getBoundingClientRect();
    const pasoX = (this.img.naturalWidth - width) / width;
    const pasoY = (this.img.naturalHeight - height) / height;
    const x = e.clientX - left;
    const y = e.clientY - top;
    this.img.style.transform = `translate(-${x * pasoX}px, -${y * pasoY}px)`;
  }
}
