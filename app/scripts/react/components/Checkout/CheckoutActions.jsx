import React, { Component, PropTypes } from 'react';
import { translate } from 'react-i18next';
import * as schemas from '../../schemas';
import CheckoutPublicOffer from './CheckoutPublicOffer';

class CheckoutActions extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(ev) {
    const { backUrl } = this.props;

    if (!backUrl) {
      ev.preventDefault();
      window.history.back();
    }
  }
  render() {
    const { backUrl, publicOffer, t } = this.props;

    return (
      <div className="b-cart__action">
        {publicOffer && publicOffer.show
          ? <CheckoutPublicOffer {...publicOffer} />
          : null
        }
        <div className="b-cart__action__container">
          <div className="b-cart__action__col-back">
            <a
              className="b-btn b-btn_trans b-cart__action__clear"
              href={backUrl || '#'}
              onClick={this.handleClick}
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
  backUrl: PropTypes.string,
  publicOffer: schemas.checkoutPublicOffer,
};

export default translate(CheckoutActions);