import React, { Component, PropTypes } from 'react';
import { t } from 'i18next';
import Checkbox from '../common/Checkbox';
import HiddenInput from '../common/HiddenInput';

class CheckoutPublicOffer extends Component {
  render() {
    const { url = '' } = this.props;

    return (
      <div className="b-form__row b-cart__form__data-row">
        <div className="form-group boolean">
          <div className="checkbox control-label">
            <HiddenInput
              name="vendor_order[public_offer_accepted]"
              value="0"
            />
            <span className="b-form__checkbox">
              <label className="boolean optional">
                <Checkbox
                  className="boolean m-r-sm"
                  name="vendor_order[public_offer_accepted]"
                  value="1"
                />
                <span dangerouslySetInnerHTML={{ __html: t('vendor.order.public_offer_accepted_html', { url }) }} />
              </label>
            </span>
          </div>
        </div>
      </div>
    );
  }
}

CheckoutPublicOffer.propTypes = {
  url: PropTypes.string,
};

export default CheckoutPublicOffer;