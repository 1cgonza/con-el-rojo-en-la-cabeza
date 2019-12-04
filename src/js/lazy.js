export default images => {
  function onIntersection(imageEntites) {
    imageEntites.forEach(image => {
      if (image.isIntersecting) {
        observer.unobserve(image.target);
        image.target.onload = () => {
          image.target.classList.add('loaded');
        };
        image.target.src = image.target.dataset.src;
      }
    });
  }

  const observer = new IntersectionObserver(onIntersection, {
    // root: document.querySelector('#mask'),
    rootMargin: '0px 0px 0px 0px'
  });

  images.forEach(image => observer.observe(image));
};
