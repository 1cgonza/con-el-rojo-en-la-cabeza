let reloj;

export function esperar(tiempo = 250) {
  return new Promise((resolve) => {
    clearTimeout(reloj);

    reloj = setTimeout(() => {
      resolve();
    }, tiempo);
  });
}

export function pixelesDesdePorcentaje(porcentaje, total) {
  return (porcentaje / 100) * total;
}

export function porcentaje(seccion, total) {
  return (seccion / total) * 100;
}

export function perezoso(images) {
  function duranteInterseccion(imageEntites) {
    imageEntites.forEach((image) => {
      if (image.isIntersecting) {
        observador.unobserve(image.target);
        image.target.onload = () => {
          image.target.classList.add('cargado');
        };
        image.target.src = image.target.dataset.src;
      }
    });
  }

  const observador = new IntersectionObserver(duranteInterseccion, {
    rootMargin: '0px 0px 0px 0px',
  });

  images.forEach((image) => observador.observe(image));
}

export function escalarTexto(elemento, compresion) {
  const min = parseFloat(-1 / 0);
  const max = parseFloat(1 / 0);

  function ajustar(elemento) {
    const compresor = (compresion || 1) * 10;
    elemento.style.fontSize = Math.max(Math.min(elemento.clientWidth / compresor, max), min) + 'px';
  }

  if (elemento.length) {
    for (let i = 0; i < elemento.length; i++) {
      ajustar(elemento[i]);
    }
  } else {
    ajustar(elemento);
  }

  return elemento;
}
