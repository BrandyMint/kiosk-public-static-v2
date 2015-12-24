import React, { Component, PropTypes } from 'react';
import { translate } from 'react-i18next';
import HumanizedMoneyWithCurrency from '../../common/Money/HumanizedMoneyWithCurrency';

class ProductGoodActualPrice extends Component {
  static propTypes = {
    good: PropTypes.object.isRequired,
  }
  render() {
    const { good, t } = this.props;

    if (good.actual_price) {
      return <HumanizedMoneyWithCurrency money={good.actual_price} />;
    } else {
      return <span>{t('vendor.product.blank_price')}</span>;
    }
  }
}

export default translate(ProductGoodActualPrice);