import React, { Component, PropTypes } from 'react';
import ProductArchived from './ProductArchived';
import provideTranslations from 'rc/HoC/provideTranslations';
import * as schemas from 'r/schemas';

class ProductArchivedContainer extends Component {
  render() {
    return <ProductArchived {...this.props} />;
  }
}

ProductArchivedContainer.propTypes = {
  product: schemas.product.isRequired,
  searchProductsPath: PropTypes.string.isRequired,
  t: PropTypes.func.isRequired,
  vendorCategoryPath: PropTypes.string,
};

ProductArchivedContainer.defaultProps = {
  product: {},
};

export default provideTranslations(ProductArchivedContainer);
