import React, { Component, PropTypes } from 'react';
import ChildrenProducts from 'rc/ChildrenProducts';

class CategoriesShowChildren extends Component {
  render() {
    const {
      childrenProducts,
      showCartButton,
      showQuantity,
      t,
      title,
      vendorRootPath,
    } = this.props;

    return childrenProducts.length
      ? (
        <ChildrenProducts
          childrenProducts={childrenProducts}
          showCartButton={showCartButton}
          showQuantity={showQuantity}
          title={title}
        />
      )
      : (
        <div className="b-text b-text_center">
          <p>
            {t('vendor.category.empty')}
          </p>
          <a className="b-btn" href={vendorRootPath}>
            {t('vendor.category.continue_shopping')}
          </a>
        </div>
      );
  }
}

CategoriesShowChildren.propTypes = {
  childrenProducts: PropTypes.array.isRequired,
  showCartButton: PropTypes.bool,
  showQuantity: PropTypes.bool,
  t: PropTypes.func.isRequired,
  title: PropTypes.string,
  vendorRootPath: PropTypes.string,
};

export default CategoriesShowChildren;
