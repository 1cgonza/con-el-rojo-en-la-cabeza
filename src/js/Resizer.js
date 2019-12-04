import { getPercent, sizeFromPercentage } from 'dddrawings';

export default class Resizer {
  constructor(main) {
    this.main = main;
    this.height_k = 2048;
    this.width_k = 1367;
    this.setParams();
    window.onresize = this.update;
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

    this.main.style.width = `${this.eleW * this.elements.length}px`;
    this.elements.forEach(ele => (ele.container.style.width = `${this.eleW}px`));
  };
}
