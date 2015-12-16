import React, { Component, PropTypes } from 'react';
import { t } from 'i18next';
import { vendorOrder } from '../../../routes/app';
import FormAuthenticity from '../common/FormAuthenticity';
import CheckoutActions from './CheckoutActions';
import CheckoutStep from './CheckoutStep';
import CheckoutDeliveries from './CheckoutDeliveries';
import CheckoutFields from './CheckoutFields';
import CheckoutPayments from './CheckoutPayments';
import CheckoutCoupon from './CheckoutCoupon';

class Checkout extends Component {
  render() {
    const {
      coupon,
      deliveryType,
      deliveryTypes,
      fields,
      formAuthenticity,
      onDeliveryChange,
      onFieldChange,
      onPaymentChange,
      paymentMethod,
      paymentMethods,
      publicOffer,
    } = this.props;

    return (
      <form
        acceptCharset="UTF-8"
        action={vendorOrder()}
        className="simple_form new_vendor_order"
        method="POST"
        noValidate="novalidate"
      >
        <FormAuthenticity {...formAuthenticity} />
        <div className="b-cart__form b-form">
          <div className="b-cart__form__inner">
            <CheckoutStep number={1} title={t('vendor.order.new.delivery_title')}>
              <CheckoutDeliveries
                current={deliveryType}
                items={deliveryTypes}
                onChange={onDeliveryChange}
              />
            </CheckoutStep>
            <CheckoutStep number={2} title={t('vendor.order.new.contacts_title')}>
              <CheckoutFields
                items={fields}
                onChange={onFieldChange}
              />
              {coupon && coupon.show &&
                <CheckoutCoupon code={coupon.value} />
              }
            </CheckoutStep>
            <CheckoutStep number={3} title={t('vendor.order.new.payment_title')}>
              <CheckoutPayments
                current={paymentMethod}
                items={paymentMethods}
                onChange={onPaymentChange}
              />
            </CheckoutStep>
          </div>
          <div className="b-form__row">
            <CheckoutActions publicOffer={publicOffer} />
          </div>
        </div>
      </form>
    );
  }
}

Checkout.propTypes = {
  coupon: PropTypes.object,
  deliveryType: PropTypes.object,
  deliveryTypes: PropTypes.array.isRequired,
  fields: PropTypes.array.isRequired,
  formAuthenticity: PropTypes.object,
  onDeliveryChange: PropTypes.func.isRequired,
  onFieldChange: PropTypes.func.isRequired,
  onPaymentChange: PropTypes.func.isRequired,
  paymentMethod: PropTypes.object,
  paymentMethods: PropTypes.array,
  publicOffer: PropTypes.object,
};
Checkout.defaultProps = {
  formAuthenticity: {},
};

export default Checkout;