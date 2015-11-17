import React, { PropTypes } from 'react';
import { t } from 'i18next';
import HiddenInput from '../../common/HiddenInput';
import ProductCartWishlist from './ProductCartWishlist';
import ProductAddToCartButton from '../ProductAddToCartButton';

export default class ProductCartForProduct {
  static propTypes = {
    good: PropTypes.object.isRequired,
    wishlistUrl: PropTypes.string,
  }
  render() {
    const { good, wishlistUrl } = this.props;

    return (
      <span>
        <HiddenInput name="cart_item[good_id]" value={good.global_id} />
        <div className="b-item-full__form__row b-item-full__form__row_fixed">
          <div className="b-item-full__form__submit">
            <ProductAddToCartButton text={t('vendor.button.to_cart')} />
            <ProductCartWishlist url={wishlistUrl} />
          </div>
        </div>
      </span>
    );
  }
}