import React, { Component, PropTypes } from 'react';
import { translate } from 'react-i18next';
import ProductBadge from './ProductBadge';

class ProductBadgeUnavailable extends Component {
  render() {
    const { product, t } = this.props;

    if (!product.has_ordering_goods && !product.is_run_out) {
      return <ProductBadge text={t('vendor.badges.not_available')} status="sold" />;
    } else {
      return null;
    }
  }
}

ProductBadgeUnavailable.propTypes = {
  product: PropTypes.object.isRequired,
};

export default translate(ProductBadgeUnavailable);