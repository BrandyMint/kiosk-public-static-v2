import React, { Component, PropTypes } from 'react';
import makeTranslatable from '../HoC/makeTranslatable';
import Cart from './Cart';

@makeTranslatable
class CartContainer extends Component {
  constructor(props) {
    super(props);

    const { deliveryTypes, fields } = props;
    const delivery = deliveryTypes.length ? deliveryTypes[0] : null;

    this.state = {
      deliveryType: delivery,
      fields: props.fields.map((field) => {
        const isRequired = delivery
          ? delivery.requiredFields.indexOf(field.fieldName) > -1
          : false;
        const isDisabled = delivery
          ? delivery.reservedFieldValues[field.fieldName]
          : false;
        const value = delivery
          ? delivery.reservedFieldValues[field.fieldName]
          : field.value;

        return {isDisabled, isRequired, value, source: field};
      }),
      paymentMethod: null,
    };

    this.changeDelivery = this.changeDelivery.bind(this);
    this.changeField = this.changeField.bind(this);
    this.changePayment = this.changePayment.bind(this);
  }
  getFieldsForDelivery(delivery, fields) {
    if (!delivery) return fields;

    return fields.filter((field) =>
      delivery.fields.indexOf(field.source.fieldName) > -1
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
          ? delivery.requiredFields.indexOf(field.source.fieldName) > -1
          : false;
        const isDisabled = delivery
          ? delivery.reservedFieldValues[field.source.fieldName]
          : false;
        const value = delivery
          ? delivery.reservedFieldValues[field.source.fieldName]
          : field.value;

        return {...field, value, isDisabled, isRequired};
      }),
    });
  }
  changeField(name, value) {
    const { fields } = this.state;

    this.setState({
      fields: fields.map((field) => {
        if (field.source.fieldName === name) {
          return {...field, value};
        }
        return field;
      }),
    });
  }
  changePayment(payment) {
    this.setState({ paymentMethod: payment });
  }
  render() {
    const { cart, coupon, deliveryTypes, formAuthenticity, paymentMethods, publicOffer } = this.props;
    const { deliveryType, fields, paymentMethod } = this.state;

    return (
      <Cart
        coupon={coupon}
        deliveryType={deliveryType}
        deliveryTypes={deliveryTypes}
        fields={this.getFieldsForDelivery(deliveryType, fields)}
        formAuthenticity={formAuthenticity}
        onDeliveryChange={this.changeDelivery}
        onFieldChange={this.changeField}
        onPaymentChange={this.changePayment}
        paymentMethod={paymentMethod}
        paymentMethods={this.getPaymentsForDelivery(deliveryType, paymentMethods)}
        publicOffer={publicOffer}
        totalCount={cart.totalCount}
        totalPrice={this.getTotalPrice(deliveryType, cart)}
      />
    );
  }
}

CartContainer.propTypes = {
  deliveryTypes: PropTypes.array.isRequired,
  formAuthenticity: PropTypes.object,
  cart: PropTypes.object,
  paymentMethods: PropTypes.array,
};
CartContainer.defaultProps = {
  cart: {},
  deliveryTypes: [],
  fields: [],
  paymentMethods: [],
};

export default CartContainer;