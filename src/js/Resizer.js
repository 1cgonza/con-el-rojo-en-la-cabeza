import { getPercent, sizeFromPercentage } from 'dddrawings';
import { debounce } from './utils';
import fitText from './fitText';
export default class Resizer {
  constructor(main) {
    this.main = main;
    this.elements = [];
    this.boxes = [document.getElementById('titulo'), document.getElementById('descripcion')];
    this.height_k = 2048;
    this.width_k = 1367;

    window.onresize = () => debounce().then(this.update);
  }

  bindElements(elements) {
    this.elements = elements;
  }

  setParams() {
    const screenW = Math.min(window.innerWidth, window.outerWidth);
    const screenH = Math.min(window.innerHeight, window.outerHeight);
    this.eleH = screenH;
    this.eleW = sizeFromPercentage(getPercent(this.eleH, this.height_k), this.width_k);

    if (this.eleW > screenW) {
      this.eleW = screenW;
      this.eleH = sizeFromPercentage(getPercent(this.eleW, this.width_k), this.height_k);
    }
  }

  update = () => {
    if (!this.elements.length) return;
    this.setParams();
    this.main.style.width = `${this.eleW * this.boxes.length + this.eleW * this.elements.length}px`;
    this.main.style.paddingLeft = `${this.eleW * 2}px`;

    this.boxes.forEach(box => (box.style.width = `${this.eleW}px`));
    this.boxes[1].style.left = `${this.eleW}px`;

    this.elements.forEach(ele => {
      ele.container.style.width = `${this.eleW}px`;
      ele.container.style.height = `${this.eleH}px`;
      fitText(ele.container.querySelector('.descripcion'), 2);
    });

    fitText(this.boxes[0], 0.3);
    fitText(this.boxes[1], 2.5);
  };
}
