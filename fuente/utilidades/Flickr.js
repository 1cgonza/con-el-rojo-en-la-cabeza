const url = 'https://api.flickr.com/services/rest/?';

const parametros = {
  method: 'flickr.people.getPublicPhotos',
  user_id: '185741681@N03', // Cambiar para usar otra colección de fotos.
  api_key: '2512f39372e99a27a692abc3bae34fde',
  nojsoncallback: '1',
  // per_page: '10',
  extras: 'o_dims,url_o,url_k,description',
  format: 'json',
};

function construirURL() {
  return (
    url +
    Object.keys(parametros)
      .map((llave) => {
        return `${llave}=${parametros[llave]}`;
      })
      .join('&')
  );
}

export default (pagina) => {
  parametros.page = pagina;

  return new Promise((res, rej) => {
    const req = new XMLHttpRequest();
    req.overrideMimeType('application/json');
    req.open('GET', construirURL(), true);
    req.onload = () => {
      if (req.status === 200) {
        res(JSON.parse(req.response).photos);
      } else {
        rej(req.statusText);
      }
    };
    req.send(null);
  });
};
