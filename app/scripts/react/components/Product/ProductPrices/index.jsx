/*global Bugsnag */
import React, { Component, PropTypes } from 'react';
import { diff } from 'deep-diff';
import ProductGoodPrice from './ProductGoodPrice';
import ProductGoodPrices from './ProductGoodPrices';

class ProductPrices extends Component {
  getMinPrice(goods) {
    let minPrice = { cents: +Infinity };

    for (let i = 0; i < goods.length; i++) {
      const good = goods[i];

      if (good.actual_price != null && typeof good.actual_price === 'object') {
        if (good.actual_price.cents < minPrice.cents) {
          minPrice = good.actual_price;
        }
      }
    }

    return minPrice;
  }
  getMaxPrice(goods) {
    let maxPrice = { cents: -Infinity };

    for (let i = 0; i < goods.length; i++) {
      const good = goods[i];

      if (good.actual_price != null && typeof good.actual_price === 'object') {
        if (good.actual_price.cents > maxPrice.cents) {
          maxPrice = good.actual_price;
        }
      }
    }

    return maxPrice;
  }
  render() {
    const { good, product, t } = this.props;

    if (good) {
      return (
        <ProductGoodPrice 
          good={good} 
          product={product} 
          t={t} 
        />
      );
    } else if (Array.isArray(product.goods) && product.goods.length > 0) {
      const maxPrice = this.getMaxPrice(product.goods);
      const minPrice = this.getMinPrice(product.goods);

      if (!isFinite(maxPrice.cents)) {
        return null;
      }

      if (diff(minPrice, maxPrice)) {
        return (
          <ProductGoodPrices maxPrice={maxPrice} minPrice={minPrice} />
        );
      }else {
        return (
          <ProductGoodPrice 
            good={product.goods[0]} 
            product={product} 
            t={t} 
          />
        );
      }
    } else {
      if (typeof Bugsnag === 'object' && typeof Bugsnag.warn === 'function') {
        Bugsnag.warn('Ошибка ProductPrices', `Product:id[${product.id}] не имеет ни одного элемента goods`);
      }

      return null;
    }
  }
}

ProductPrices.propTypes = {
  good: PropTypes.object,
  product: PropTypes.object.isRequired,
  t: PropTypes.func.isRequired,
};

export default ProductPrices;
