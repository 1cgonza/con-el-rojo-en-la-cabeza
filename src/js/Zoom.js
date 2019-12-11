export default class Zoom {
  constructor(container, img) {
    this.container = container;
    this.img = img;
    this.zooming = false;

    container.onmousemove = e => {
      if (!this.zooming) return;
      this.getPos(e);
    };

    container.onmouseenter = () => {
      if (!this.zooming) return;
      this.img.style.width = `${this.img.naturalWidth}px`;
      this.img.style.height = `${this.img.naturalHeight}px`;
    };

    container.onmouseleave = () => {
      if (!this.zooming) return;
      this.img.style.width = `auto`;
      this.img.style.height = `100vh`;
      this.img.style.transform = `translate(${0}px, ${0}px)`;
    };

    container.onclick = e => {
      this.zooming = !this.zooming;

      if (this.zooming) {
        this.container.classList.add('zooming');
        this.img.style.width = `${this.img.naturalWidth}px`;
        this.img.style.height = `${this.img.naturalHeight}px`;
        this.getPos(e);
      } else {
        this.container.classList.remove('zooming');
        this.img.style.width = `auto`;
        this.img.style.height = `100vh`;
        this.img.style.transform = `translate(${0}px, ${0}px)`;
      }

      document.getElementById('about').classList.remove('active');
    };
  }

  getPos(e) {
    const rect = this.container.getBoundingClientRect();
    const xStep = (this.img.naturalWidth - rect.width) / rect.width;
    const yStep = (this.img.naturalHeight - rect.height) / rect.height;
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    this.img.style.transform = `translate(-${x * xStep}px, -${y * yStep}px)`;
  }
}
