import { getPercent, sizeFromPercentage } from 'dddrawings';
import fitText from './fitText';
export default class Resizer {
  constructor(main) {
    this.main = main;
    this.height_k = 2048;
    this.width_k = 1367;
    this.setParams();
    window.onresize = this.update;
    this.boxes = [document.getElementById('titulo'), document.getElementById('descripcion')];
  }

  bindElements(elements) {
    this.elements = elements;
  }

  setParams() {
    this.h = window.innerHeight;
    this.eleW = sizeFromPercentage(getPercent(this.h, this.height_k), this.width_k);
  }

  update = () => {
    if (!this.elements.length) return;
    this.setParams();

    this.main.style.width = `${this.eleW * this.boxes.length + this.eleW * this.elements.length}px`;
    this.main.style.paddingLeft = `${this.eleW * 2}px`;

    this.boxes.forEach(box => (box.style.width = `${this.eleW}px`));
    this.boxes[1].style.left = `${this.eleW}px`;

    fitText(this.boxes[0], 0.3);
    fitText(this.boxes[1], 2.5);

    this.elements.forEach(ele => {
      ele.container.style.width = `${this.eleW}px`;
      fitText(ele.container.querySelector('.descripcion'), 2);
    });
  };
}
