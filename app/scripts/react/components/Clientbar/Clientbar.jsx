import React, { Component, PropTypes } from 'react';
import { CabinetButton } from '../buttons/CabinetButton';
import { WishlistButton } from '../buttons/WishlistButton';
import CartButtonController from '../buttons/CartButton/CartButtonController';
import provideTranslations from '../HoC/provideTranslations';

class Clientbar extends Component {
  render() {
    const {
      cabinetText, cabinetUrl, cartUrl, showFullBasketCount, t,
      hasCabinet, hasCart, hasWishlist, wishlistText, wishlistUrl,
    } = this.props;

    return (
      <div className="Clientbar">
        {hasCabinet && cabinetUrl &&
          <CabinetButton
            text={cabinetText}
            url={cabinetUrl}
          />
        }
        {hasWishlist && wishlistUrl &&
          <WishlistButton
            text={wishlistText}
            url={wishlistUrl}
          />
        }
        {hasCart && cartUrl &&
          <CartButtonController
            url={cartUrl}
            t={t}
            showFullBasketCount={showFullBasketCount}
          />
        }
      </div>
    );
  }
}

Clientbar.propTypes = {
  cabinetText: PropTypes.string,
  cabinetUrl: PropTypes.string,
  cartUrl: PropTypes.string,
  hasCabinet: PropTypes.bool,
  hasCart: PropTypes.bool,
  hasWishlist: PropTypes.bool,
  wishlistText: PropTypes.string,
  wishlistUrl: PropTypes.string,
  showFullBasketCount: PropTypes.bool
};
Clientbar.defaultProps = {
  hasCabinet: false,
  hasCart: false,
  hasWishlist: false,
  showFullBasketCount: false
}

export default provideTranslations(Clientbar);
