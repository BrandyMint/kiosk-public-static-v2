import React, { Component, PropTypes } from 'react';
import { t } from 'i18next';
import CheckoutPublicOffer from './CheckoutPublicOffer';

class CheckoutActions extends Component {
  render() {
    const { publicOffer } = this.props;

    return (
      <div className="b-cart__action">
        {publicOffer && publicOffer.show &&
          <CheckoutPublicOffer url={publicOffer.url} />
        }
        <div className="b-cart__action__container">
          <div className="b-cart__action__col-back">
            <a
              className="b-btn b-btn_trans b-cart__action__clear"
              href="/cart"
            >
              {t('vendor.order.go_back')}
            </a>
          </div>
          <div className="b-cart__action__col-submit">
            <input
              className="b-btn b-cart__action__next"
              type="submit"
              value={t('vendor.order.next')}
            />
          </div>
        </div>
      </div>
    );
  }
}

CheckoutActions.propTypes = {
  publicOffer: PropTypes.object,
};

export default CheckoutActions;