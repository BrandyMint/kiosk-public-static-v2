import React, { PropTypes } from 'react';
import { t } from 'i18next';
import { PHOTO_CHANGE } from '../../../constants/globalEventKeys';
import { goodOrderTitle } from '../../../helpers/product';
import ProductAddToCartButton from '../ProductAddToCartButton';
import ProductCartWishlist from '../ProductCart/ProductCartWishlist';

export default class ProductGoods {
  static propTypes = {
    addWishlistUrl: PropTypes.string,
    isWishlisted: PropTypes.bool,
    onGoodChange: PropTypes.func,
    product: PropTypes.object.isRequired,
    wishlistUrl: PropTypes.string,
  }
  componentDidMount() {
    const { product, onGoodChange } = this.props;

    for (let i = 0; i < product.goods.length; i++) {
      const good = product.goods[i];

      if (good.is_ordering) {
        if (onGoodChange) onGoodChange(good);
        break;
      }
    }
  }
  isTitlesValid(product, maxLength = 30) {
    return !product.goods.some((el) =>
      goodOrderTitle(product, el).length > maxLength
    );
  }
  handleSelectChange(e) {
    const value = e.target.value;
    const { onGoodChange, product: { goods } } = this.props;

    for (let i = 0; i < goods.length; i++) {
      const good = goods[i];

      if (good.global_id === value) {
        $(document).trigger(PHOTO_CHANGE, good.image);
        if (onGoodChange) onGoodChange(good);
        break;
      }
    };
  }
  renderOption(good, product) {
    return (
      <option
        disabled={!good.is_ordering}
        key={good.global_id}
        value={good.global_id}
      >
        {goodOrderTitle(product, good)}
      </option>
    );
  }
  renderSelect(product) {
    let selectedValue;

    for (let i = 0; i < product.goods.length; i++) {
      const good = product.goods[i];

      if (good.is_ordering) {
        selectedValue = good.global_id;
        break;
      }
    }

    return (
      <select
        defaultValue={selectedValue}
        name="cart_item[good_id]"
        onChange={this.handleSelectChange.bind(this)}
      >
        {product.goods.map((good) => this.renderOption(good, product))}
      </select>
    );
  }
  render() {
    const { product, wishlistUrl } = this.props;

    if (this.isTitlesValid(product)) {
      return (
        <span>
          <div className="b-item-full__form__row b-item-full__form__row_fixed">
            <div className="b-item-full__form__option">
              {this.renderSelect(product)}
            </div>
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
    } else {
      return (
        <span>
          <div className="b-item-full__form__row">
            <div className="b-item-full__form__option b-item-full__form__option_full">
              {this.renderSelect(product)}
            </div>
            <ProductCartWishlist
              {...this.props}
              addWishlistText={t('vendor.button.to_wishlist')}
              goWishlistText={t('vendor.button.go_wishlist')}
            />
          </div>
          <div className="b-item-full__form__row b-item-full__form__submit">
            <ProductAddToCartButton text={t('vendor.button.to_cart')} />
          </div>
        </span>
      );
    }
  }
}