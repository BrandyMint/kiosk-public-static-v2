import React, { Component, PropTypes } from 'react';
import ProductGroup from './ProductGroup';
import ProductBlock from 'rc/Product/ProductBlock';
import provideTranslations from 'rc/HoC/provideTranslations';

class ProductGroupContainer extends Component {
  render() {
    return <ProductGroup {...this.props} />;
  }
}

ProductGroupContainer.propTypes = {
  products: PropTypes.shape({
    items: PropTypes.arrayOf(PropTypes.shape(
      ...ProductBlock.wrapped.propTypes,
    )).isRequired,
  }).isRequired,
  showCartButton: PropTypes.bool.isRequired,
  showQuantity: PropTypes.bool.isRequired,
  t: PropTypes.func.isRequired,
  title: PropTypes.string,
  vendorCategoryPath: PropTypes.string.isRequired,
};

ProductGroupContainer.defaultProps = {
  products: {
    items: [],
  },
  showCartButton: false,
  showQuantity: false,
  title: '',
};

export default provideTranslations(ProductGroupContainer);
