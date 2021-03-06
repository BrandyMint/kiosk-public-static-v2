import React, { Component, PropTypes } from 'react';
import ChildrenProducts from './ChildrenProducts';
import CatalogFilterContainer from 'rc/CatalogFilter';
import * as schemas from 'r/schemas';

class ChildrenProductsContainer extends Component {
  render() {
    return <ChildrenProducts {...this.props} />;
  }
}

ChildrenProductsContainer.propTypes = {
  catalogFilterProps: PropTypes.shape(...CatalogFilterContainer.propTypes),
  childrenProducts: schemas.childrenProducts.isRequired,
  i18n: PropTypes.object,
  showCartButton: PropTypes.bool,
  showCatalogFilter: PropTypes.bool,
  showQuantity: PropTypes.bool,
  title: PropTypes.string,
};

ChildrenProductsContainer.defaultProps = {
  childrenProducts: [],
  showCartButton: false,
  showCatalogFilter: false,
  showQuantity: false,
};

export default ChildrenProductsContainer;
