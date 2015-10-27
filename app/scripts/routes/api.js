const {
  operator_api_url: operatorApiUrl,
  public_api_url: publicApiUrl
} = gon;

export function designSettings() {
  return operatorApiUrl + '/v1/design_settings';
}

export function productsFilteredCount(filter) {
  return publicApiUrl + '/v1/products/filtered/count?' + filter;
}

export function checkCouponCode() {
  return publicApiUrl + '/v1/coupon/call';
}