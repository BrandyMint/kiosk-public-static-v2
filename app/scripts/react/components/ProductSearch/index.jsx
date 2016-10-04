import React, { Component, PropTypes } from 'react';
import ProductSearch from './ProductSearch';
import * as schemas from 'r/schemas';
import CatalogFilterContainer from 'rc/CatalogFilter';
import provideTranslations from 'rc/HoC/provideTranslations';

class ProductSearchContainer extends Component {
  render() {
    return <ProductSearch {...this.props} />;
  }
}

ProductSearchContainer.propTypes = {
  catalogFilterProps: PropTypes.shape(...CatalogFilterContainer.propTypes),
  products: schemas.productList.isRequired,
  showCatalogFilter: PropTypes.bool.isRequired,
  showCartButton: PropTypes.bool.isRequired,
  showQuantity: PropTypes.bool.isRequired,
  t: PropTypes.func.isRequired,
  vendorRootPath: PropTypes.string,
};

ProductSearchContainer.defaultProps = {
  products: {
    items: [],
    pagination: {},
  },
  showCatalogFilter: false,
  showCartButton: false,
  showQuantity: false,
};

export default provideTranslations(ProductSearchContainer);
