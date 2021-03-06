import React, { Component, PropTypes } from 'react';

class OrderSelfDeliveryMessage extends Component {
  render() {
    const {
      deliveryType: {
        selfdelivery,
        pickup_address: pickupAdress,
      },
      t,
    } = this.props;

    return selfdelivery && pickupAdress != null
      ? (
        <span>
          {t('vendor.order.pickup_address')}
          {pickupAdress}
        </span>
      )
      : null;
  }
}

OrderSelfDeliveryMessage.propTypes = {
  deliveryType: PropTypes.shape({
    selfdelivery: PropTypes.bool,
    pickup_address: PropTypes.string,
  }).isRequired,
  t: PropTypes.func.isRequired,
};

OrderSelfDeliveryMessage.defaultProps = {
  deliveryType: {
    selfdelivery: false,
  },
};

export default OrderSelfDeliveryMessage;
