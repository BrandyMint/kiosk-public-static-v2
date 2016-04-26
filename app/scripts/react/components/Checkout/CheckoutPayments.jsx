import React, { Component, PropTypes } from 'react';
import { simpleFormat } from '../../helpers/text';
import * as schemas from '../../schemas';

class CheckoutPayments extends Component {
  renderPaymentTypes(item) {
    const { t } = this.props;
    if (item.payment_methods instanceof Array) {
      return (
        <div className="b-cart__form__payment-payment_types">
          <div className="b-item-full__form__option">
            <select name="vendor_order[payment_method]">
              {
                item.payment_methods.map((payment_method, i) => {
                  return(
                    <option key={i} value={payment_method}>
                      {t('vendor.payment.' + item.agent + '.payment_methods.' + payment_method.toLowerCase())}
                    </option>
                  );
                })
              }
            </select>
          </div>
        </div>
      );
    }else {
      return null;
    }
  }
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
            <div className="b-cart__form__payment-name">
              {item.title}
            </div>
            <div
              className="b-cart__form__payment-description"
              dangerouslySetInnerHTML={{ __html: simpleFormat(item.description) }}
            />
            {this.renderPaymentTypes(item)}
          </label>
        </span>
      </div>
    );
  }
  render() {
    const { current, items } = this.props;

    return (
      <span>
        {items.map(item => this.renderItem(item))}
      </span>
    );
  }
}

CheckoutPayments.propTypes = {
  current: schemas.paymentType,
  itemFieldName: PropTypes.string,
  items: PropTypes.arrayOf(schemas.paymentType),
  onChange: PropTypes.func.isRequired,
};
CheckoutPayments.defaultProps = {
  itemFieldName: 'payment_type_id',
  items: [],
};

export default CheckoutPayments;
