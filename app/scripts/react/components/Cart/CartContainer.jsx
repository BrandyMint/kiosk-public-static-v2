import React, { Component, PropTypes } from 'react';
import * as schemas from '../../schemas';

import provideTranslations from '../HoC/provideTranslations';

import Cart from './Cart';

class CartContainer extends Component {
  constructor(props) {
    super(props);

    const {
      deliveryTypeId,
      deliveryTypes,
      fields,
      paymentTypeId,
      paymentTypes,
    } = props;
    const deliveryType = this.matchEntity(deliveryTypes, deliveryTypeId);
    const paymentType = this.matchEntity(paymentTypes, paymentTypeId);

    this.state = {
      deliveryType,
      paymentType,
      fields: fields.map((field) => {
        const isRequired = deliveryType
          ? deliveryType.requiredFields.indexOf(field.name) > -1
          : false;
        const isReserved = deliveryType
          ? !!deliveryType.reservedFieldValues[field.name]
          : false;
        const isDisabled = isReserved || false;
        const value = isReserved
          ? deliveryType.reservedFieldValues[field.name]
          : field.value;

        return {isDisabled, isRequired, value, source: field};
      }),
    };

    this.changeDelivery = this.changeDelivery.bind(this);
    this.changeField = this.changeField.bind(this);
    this.changePayment = this.changePayment.bind(this);
  }
  matchEntity(items, itemId) {
    if (!items.length) return null;

    if (itemId) {
      const matched = items.filter((item) => item.id === itemId)[0];
      if (matched) return matched;
    }

    return items[0];
  }
  getFieldsForDelivery(delivery, fields) {
    if (!delivery) return fields;

    return fields.filter((field) =>
      delivery.fields.indexOf(field.source.name) > -1
    );
  }
  getPaymentsForDelivery(delivery, payments) {
    if (!delivery) return payments;

    return payments.filter((payment) =>
      delivery.availablePayments.indexOf(payment.id) > -1
    );
  }
  getTotalPrice(delivery, cart) {
    if (!delivery) return totalPrice;

    const { totalPrice } = cart;
    const { freeDeliveryThreshold: threshold } = delivery;

    if (threshold.cents === 'undefined' || totalPrice.cents > threshold.cents) {
      return totalPrice;
    }

    return {
      ...totalPrice,
      cents: totalPrice.cents + delivery.price.cents,
    };
  }
  changeDelivery(delivery) {
    const { fields } = this.state;

    this.setState({
      deliveryType: delivery,
      fields: fields.map((field) => {
        const isRequired = delivery
          ? delivery.requiredFields.indexOf(field.source.name) > -1
          : false;
        const isDisabled = delivery
          ? !!delivery.reservedFieldValues[field.source.name]
          : false;
        const value = field.value;
        const reservedValue = delivery && delivery.reservedFieldValues[field.source.name]
          ? delivery.reservedFieldValues[field.source.name]
          : null;

        return {...field, reservedValue, value, isDisabled, isRequired};
      }),
    });
  }
  changeField(name, value) {
    const { fields } = this.state;

    this.setState({
      fields: fields.map((field) => {
        if (field.source.name === name) {
          return {...field, value};
        }
        return field;
      }),
    });
  }
  changePayment(payment) {
    this.setState({ paymentType: payment });
  }
  render() {
    const {
      backUrl,
      cart,
      coupon,
      deliveryTypes,
      errorMessage,
      formAuthenticity,
      paymentTypes,
      publicOffer,
      submitOrderUrl,
      t,
    } = this.props;
    const { deliveryType, fields, paymentType } = this.state;

    return (
      <Cart
        backUrl={backUrl}
        coupon={coupon}
        deliveryType={deliveryType}
        deliveryTypes={deliveryTypes}
        errorMessage={errorMessage}
        fields={this.getFieldsForDelivery(deliveryType, fields)}
        formAuthenticity={formAuthenticity}
        onDeliveryChange={this.changeDelivery}
        onFieldChange={this.changeField}
        onPaymentChange={this.changePayment}
        paymentType={paymentType}
        paymentTypes={this.getPaymentsForDelivery(deliveryType, paymentTypes)}
        publicOffer={publicOffer}
        submitOrderUrl={submitOrderUrl}
        t={t}
        totalCount={cart.totalCount}
        totalPrice={this.getTotalPrice(deliveryType, cart)}
      />
    );
  }
}

CartContainer.propTypes = {
  backUrl: PropTypes.string,
  cart: schemas.cart,
  coupon: schemas.checkoutCoupon,
  deliveryTypeId: PropTypes.number,
  deliveryTypes: PropTypes.arrayOf(schemas.deliveryType),
  errorMessage: PropTypes.string,
  fields: PropTypes.arrayOf(schemas.checkoutField),
  formAuthenticity: schemas.formAuthenticity,
  paymentTypeId: PropTypes.number,
  paymentTypes: PropTypes.arrayOf(schemas.paymentType),
  publicOffer: schemas.checkoutPublicOffer,
  submitOrderUrl: PropTypes.string,
};
CartContainer.defaultProps = {
  cart: {},
  deliveryTypes: [],
  fields: [],
  paymentTypes: [],
};

export default provideTranslations(CartContainer);