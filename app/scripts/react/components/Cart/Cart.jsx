import React, { Component, PropTypes } from 'react';
import Checkout from '../Checkout';
import CartTitle from './CartTitle';

class Cart extends Component {
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
      totalCount,
      totalPrice,
    } = this.props;

    return (
      <section className="b-cart">
        <div className="b-cart__content">
          <CartTitle totalCount={totalCount} totalPrice={totalPrice} />
          <Checkout
            coupon={coupon}
            deliveryType={deliveryType}
            deliveryTypes={deliveryTypes}
            fields={fields}
            formAuthenticity={formAuthenticity}
            onDeliveryChange={onDeliveryChange}
            onFieldChange={onFieldChange}
            onPaymentChange={onPaymentChange}
            paymentMethod={paymentMethod}
            paymentMethods={paymentMethods}
            publicOffer={publicOffer}
          />
        </div>
      </section>
    );
  }
}

Cart.propTypes = {
  coupon: PropTypes.object,
  deliveryType: PropTypes.object,
  deliveryTypes: PropTypes.array.isRequired,
  fields: PropTypes.array.isRequired,
  formAuthenticity: PropTypes.object,
  onDeliveryChange: PropTypes.func.isRequired,
  onFieldChange: PropTypes.func.isRequired,
  onPaymentChange: PropTypes.func.isRequired,
  paymentMethod: PropTypes.object,
  paymentMethods: PropTypes.array.isRequired,
  publicOffer: PropTypes.object,
  totalCount: PropTypes.number,
  totalPrice: PropTypes.object,
};

export default Cart;