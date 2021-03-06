import React, { Component, PropTypes } from 'react';
import OrderPayment from './OrderPayment';
import provideTranslations from 'rc/HoC/provideTranslations';

class OrderPaymentContainer extends Component {
  render() {
    return <OrderPayment {...this.props} />;
  }
}

OrderPaymentContainer.propTypes = {
  autosubmitTimeout: PropTypes.number,
  fields: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  })).isRequired,
  orderPaymentUrl: PropTypes.string.isRequired,
  shouldAutosubmit: PropTypes.bool.isRequired,
  t: PropTypes.func.isRequired,
};

OrderPaymentContainer.defaultProps = {
  autosubmitTimeout: 5000,
  fields: [],
  shouldAutosubmit: false,
};

export default provideTranslations(OrderPaymentContainer);
