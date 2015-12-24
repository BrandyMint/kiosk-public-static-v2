import React, { Component, PropTypes } from 'react';
import { translate } from 'react-i18next';
import HiddenInput from '../../common/HiddenInput';
import ProductCartWishlist from './ProductCartWishlist';
import ProductAddToCartButton from '../ProductAddToCartButton';

class ProductCartForProduct extends Component {
  render() {
    const { good, isWishlisted, t, wishlistUrl } = this.props;

    return (
      <span>
        <HiddenInput name="cart_item[good_id]" value={good.global_id} />
        <div className="b-item-full__form__row b-item-full__form__row_fixed">
          <div className="b-item-full__form__submit">
            <ProductAddToCartButton text={t('vendor.button.to_cart')} />
          </div>
        </div>
        <ProductCartWishlist
          {...this.props}
          addWishlistText={t('vendor.button.to_wishlist')}
          goWishlistText={t('vendor.button.go_wishlist')}
        />
      </span>
    );
  }
}

ProductCartForProduct.propTypes = {
  addWishlistUrl: PropTypes.string,
  good: PropTypes.object.isRequired,
  isWishlisted: PropTypes.bool,
  wishlistUrl: PropTypes.string,
};

export default translate(ProductCartForProduct);