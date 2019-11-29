export function buildUrl(i, size) {
  return `https://farm${i.farm}.staticflickr.com/${i.server}/${i.id}_${i.secret}_${size}.jpg`;
}
