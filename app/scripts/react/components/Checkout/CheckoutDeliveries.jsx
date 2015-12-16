import React, { Component, PropTypes } from 'react';
import { t } from 'i18next';
import HumanizedMoneyWithCurrency from '../common/Money/HumanizedMoneyWithCurrency';

class CheckoutDeliveries extends Component {
  renderItem(item) {
    const { current, itemFieldName, onChange } = this.props;

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
            {item.freeDeliveryThreshold.cents &&
              <div className="cart__form__delivery-address">
                <span>{t('vendor.order.checkout_free_delivery')} </span>
                <HumanizedMoneyWithCurrency money={item.freeDeliveryThreshold} />
              </div>
            }
            <div className="cart__form__delivery-address">
              {item.description}
            </div>
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
  current: PropTypes.object,
  itemFieldName: PropTypes.string,
  items: PropTypes.array,
  onChange: PropTypes.func,
};
CheckoutDeliveries.defaultProps = {
  itemFieldName: 'delivery_type_id',
  items: [],
};

export default CheckoutDeliveries;