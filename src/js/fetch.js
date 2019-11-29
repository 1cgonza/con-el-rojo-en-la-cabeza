let url = 'https://api.flickr.com/services/rest/?';

let params = {
  method: 'flickr.people.getPublicPhotos',
  user_id: '185741681@N03',
  api_key: '2512f39372e99a27a692abc3bae34fde',
  nojsoncallback: '1',
  // per_page: '10',
  extras: 'o_dims,url_o,url_k',
  format: 'json'
};

function buildUrl() {
  return (url += Object.keys(params)
    .map(key => {
      return `${key}=${params[key]}`;
    })
    .join('&'));
}

export default page => {
  params.page = page;

  return new Promise((res, rej) => {
    const req = new XMLHttpRequest();
    req.overrideMimeType('application/json');
    req.open('GET', buildUrl(), true);
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
