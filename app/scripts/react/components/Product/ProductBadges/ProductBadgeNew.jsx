import React, { Component, PropTypes } from 'react';
import { translate } from 'react-i18next';
import ProductBadge from './ProductBadge';

class ProductBadgeNew extends Component {
  render() {
    const { product, t } = this.props;

    if (product.is_label_new) {
      return <ProductBadge text={t('vendor.badges.new')} status="sold" />;
    } else {
      return null;
    }
  }
}

ProductBadgeNew.propTypes = {
  product: PropTypes.object.isRequired,
};

export default translate(ProductBadgeNew);