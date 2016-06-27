const pUrl = (global.mrch) ? global.mrch.config.public_api_url : global.gon.public_api_url;
const oUrl = (global.mrch) ? global.mrch.config.operator_api_url : global.gon.operator_api_url;

export function designSettings() {
  return oUrl + '/v1/design_settings';
}

export function productsFilteredCount(filter) {
  return pUrl + '/v1/products/filtered/count?' + filter;
}

export function checkCouponCode() {
  return pUrl + '/v1/coupon/call';
}

export function productCards(id) {
  return `${pUrl}/v1/product_cards/${id}`;
}

export function instagram() {
  return `${pUrl}/v1/instagram/feed`;
}

export function cartItems() {
  return `${pUrl}/v1/cart_items`;
}

export function cartsShow() {
  return `${pUrl}/v1/carts/show`;
}
