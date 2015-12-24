import React, { Component, PropTypes } from 'react';
import { translate } from 'react-i18next'
import ProductBadge from './ProductBadge';

class ProductBadgeSale extends Component {
  render() {
    const { product, t } = this.props;

    if (product.is_sale) {
      let title = t('vendor.badges.sale');

      if (product.sale_percent) {
        let salePercent = product.sale_percent;

        if (parseInt(salePercent, 10) === salePercent) {
          salePercent = parseInt(salePercent, 10);
        }

        title = t('vendor.badges.sale_percent', { percent: salePercent });
      }

      return <ProductBadge text={title} status="sale" />;
    }

    return null;
  }
}

ProductBadgeSale.propTypes = {
  product: PropTypes.object.isRequired,
};

export default translate(ProductBadgeSale);