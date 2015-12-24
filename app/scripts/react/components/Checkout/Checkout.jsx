import React, { Component, PropTypes } from 'react';
import { translate } from 'react-i18next';
import * as schemas from '../../schemas';
import { vendorOrder } from '../../../routes/app';
import Alert from '../common/Alert';
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
      backUrl,
      coupon,
      deliveryType,
      deliveryTypes,
      errorMessage,
      fields,
      formAuthenticity,
      onDeliveryChange,
      onFieldChange,
      onPaymentChange,
      paymentType,
      paymentTypes,
      publicOffer,
      submitOrderUrl,
      t,
    } = this.props;

    return (
      <form
        acceptCharset="UTF-8"
        action={submitOrderUrl}
        className="simple_form new_vendor_order"
        id="new_vendor_order"
        method="POST"
        noValidate="novalidate"
      >
        <FormAuthenticity {...formAuthenticity} />
        <div className="b-cart__form b-form">
          {errorMessage
            ? <Alert
                className="cart-info"
                danger
                text={errorMessage}
              />
            : null
          }
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
                current={paymentType}
                items={paymentTypes}
                onChange={onPaymentChange}
              />
            </CheckoutStep>
          </div>
          <div className="b-form__row">
            <CheckoutActions
              backUrl={backUrl}
              publicOffer={publicOffer}
            />
          </div>
        </div>
      </form>
    );
  }
}

Checkout.propTypes = {
  backUrl: PropTypes.string,
  coupon: schemas.checkoutCoupon,
  deliveryType: schemas.deliveryType,
  deliveryTypes: PropTypes.arrayOf(schemas.deliveryType),
  errorMessage: PropTypes.string,
  fields: PropTypes.array.isRequired,
  formAuthenticity: schemas.formAuthenticity,
  onDeliveryChange: PropTypes.func.isRequired,
  onFieldChange: PropTypes.func.isRequired,
  onPaymentChange: PropTypes.func.isRequired,
  paymentType: schemas.paymentType,
  paymentTypes: PropTypes.arrayOf(schemas.paymentType),
  publicOffer: schemas.checkoutPublicOffer,
  submitOrderUrl: PropTypes.string,
};
Checkout.defaultProps = {
  formAuthenticity: {},
  submitOrderUrl: vendorOrder(),
};

export default translate(Checkout);