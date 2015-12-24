import { translate } from 'react-i18next';
import makeTranslatable from '../../HoC/makeTranslatable';
import React, { Component, PropTypes } from 'react';
import ProductCartWishlist from './ProductCartWishlist';

@makeTranslatable
@translate
class ProductCartNotAvailable extends Component {
  render() {
    const { t } = this.props;

    return (
      <div className="b-item-full__form__row b-item-full__form__row_fixed">
        <div className="b-item-full__form__submit">
          <div className="b-btn b-btn_trans">
            {t('vendor.product.not_available')}
          </div>
        </div>
        <ProductCartWishlist
          {...this.props}
          addWishlistText={t('vendor.button.to_wishlist')}
          goWishlistText={t('vendor.button.go_wishlist')}
        />
      </div>
    );
  }
}

export default ProductCartNotAvailable;