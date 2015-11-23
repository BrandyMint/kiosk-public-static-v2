/*global gon */
function prepareUrl(url) {
  return /^\/\/\S*$/.test(url) ? `http:${url}` : url;
}

function filters(additional = []) {
  const common = []; //['no_upscale()'];
  const fx = [
    ...common,
    ...additional,
  ];
  return fx.length ? `/filters:${fx.join(':')}` : '';
}

export default {
  // thumborWithUrl: gon.thumbor_url,

  imageUrl(url, size) {
    const _url = prepareUrl(url);
    const width = size.width || '';
    const height = size.height || '';

    return this.thumborWithUrl
      ? `${this.thumborWithUrl}/unsafe/${width}x${height}${filters()}/${_url}`
      : _url;
  },

  retinaImageUrl(url, size) {
    const _url = prepareUrl(url);
    const width = size.width ? size.width * 2 : '';
    const height = size.height ? size.height * 2 : '';

    return this.thumborWithUrl
      ? `${this.thumborWithUrl}/unsafe/${width}x${height}${filters()}/${_url} 2x`
      : _url;
  }
};