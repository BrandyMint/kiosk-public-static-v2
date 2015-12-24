import React, { Component, PropTypes } from 'react';
import { vendorCartItems } from '../../../../routes/app';
import CSRFToken from '../../common/CSRFToken';
import HiddenInput from '../../common/HiddenInput';
import ProductCartForProduct from './ProductCartForProduct';
import ProductCartForProductItems from './ProductCartForProductItems';
import ProductCartNotAvailable from './ProductCartNotAvailable';

class ProductCart extends Component {
  static propTypes = {
    addWishlistUrl: PropTypes.string,
    formAuthenticity: PropTypes.object,
    good: PropTypes.object,
    hasWishlist: PropTypes.bool,
    isWishlisted: PropTypes.bool,
    product: PropTypes.object.isRequired,
    onGoodChange: PropTypes.func,
    wishlistUrl: PropTypes.string,
  }
  static defaultProps = {
    formAuthenticity: {},
  }
  renderContent(product) {
    if (product.has_ordering_goods) {
      if (product.goods.length === 1) {
        return (
          <ProductCartForProduct {...this.props} good={product.goods[0]} />
        );
      } else {
        return (
          <ProductCartForProductItems {...this.props} />
        );
      }
    } else {
      return (
        <ProductCartNotAvailable {...this.props} />
      );
    }
  }
  render() {
    const { onProductChange, product } = this.props;

    return (
      <form
        acceptCharset="UTF-8"
        action={vendorCartItems()}
        className="simple_form cart_item"
        method="POST"
      >
        <div style={{ display: 'none'}}>
          <HiddenInput name="utf8" value="✓" />
          <CSRFToken {...this.props.formAuthenticity} />
        </div>
        {this.renderContent(product)}
      </form>
    );
  }
}

export default ProductCart;