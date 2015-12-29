import React, { Component, PropTypes } from 'react';
import * as schemas from '../../schemas';
import Checkout from '../Checkout';
import OrderTitle from './OrderTitle';

class Order extends Component {
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
      totalCount,
      totalPrice,
    } = this.props;

    return (
      <section className="b-cart">
        <div className="b-cart__content">
          <OrderTitle totalCount={totalCount} totalPrice={totalPrice} />
          <Checkout
            backUrl={backUrl}
            coupon={coupon}
            deliveryType={deliveryType}
            deliveryTypes={deliveryTypes}
            errorMessage={errorMessage}
            fields={fields}
            formAuthenticity={formAuthenticity}
            onDeliveryChange={onDeliveryChange}
            onFieldChange={onFieldChange}
            onPaymentChange={onPaymentChange}
            paymentType={paymentType}
            paymentTypes={paymentTypes}
            publicOffer={publicOffer}
            submitOrderUrl={submitOrderUrl}
          />
        </div>
      </section>
    );
  }
}

Order.propTypes = {
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
  totalCount: PropTypes.number,
  totalPrice: schemas.money,
};

export default Order;