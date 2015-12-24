import React, { Component, PropTypes } from 'react';
import { translate } from 'react-i18next';
import { humanizedMoneyWithCurrency } from '../../helpers/money';
import { simpleFormat } from '../../helpers/text';
import * as schemas from '../../schemas';
import HumanizedMoneyWithCurrency from '../common/Money/HumanizedMoneyWithCurrency';

class CheckoutDeliveries extends Component {
  renderItem(item) {
    const { current, itemFieldName, onChange, t } = this.props;

    return (
      <div className="b-form__row__widget" key={item.id}>
        <span className="b-form__radio">
          <label>
            <input
              checked={current && item.id === current.id}
              className="form-control radio_buttons"
              name={`vendor_order[${itemFieldName}]`}
              onChange={() => onChange(item)}
              type="radio"
              value={item.id}
            />
            <div className="b-cart__form__delivery-name">
              {item.title}
            </div>
            <div className="b-cart__form__delivery-price">
              <HumanizedMoneyWithCurrency money={item.price} />
            </div>
            {item.freeDeliveryThreshold.cents
              ? <div
                  className="cart__form__delivery-address"
                  dangerouslySetInnerHTML={{
                    __html: t('vendor.order.checkout_free_delivery_text_html', {
                      free_delivery_threshold: humanizedMoneyWithCurrency(item.freeDeliveryThreshold),
                    }),
                  }}
                />
              : null
            }
            <div
              className="cart__form__delivery-address"
              dangerouslySetInnerHTML={{ __html: simpleFormat(item.description) }}
            />
          </label>
        </span>
      </div>
    );
  }

  render() {
    const { items } = this.props;

    return (
      <span>
        {items.map(item => this.renderItem(item))}
      </span>
    );
  }
}

CheckoutDeliveries.propTypes = {
  current: schemas.deliveryType,
  itemFieldName: PropTypes.string,
  items: PropTypes.arrayOf(schemas.deliveryType),
  onChange: PropTypes.func.isRequired,
};
CheckoutDeliveries.defaultProps = {
  itemFieldName: 'delivery_type_id',
  items: [],
};

export default translate(CheckoutDeliveries);