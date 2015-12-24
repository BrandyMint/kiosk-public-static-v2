import React, { Component, PropTypes } from 'react';
import { translate } from 'react-i18next';
import ProductBadge from './ProductBadge';

class ProductBadgeSoldOut extends Component {
  render() {
    const { product, t } = this.props;

    if (product.is_sold) {
      return <ProductBadge text={t('vendor.badges.sold')} status="sold" />;
    } else {
      return null;
    }
  }
}

ProductBadgeSoldOut.propTypes = {
  product: PropTypes.object.isRequired,
};

export default translate(ProductBadgeSoldOut);