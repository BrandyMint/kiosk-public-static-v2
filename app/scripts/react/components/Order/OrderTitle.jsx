import React, { findDOMNode, Component, PropTypes } from 'react';
import $ from 'jquery';
import { t } from 'i18next';
import HumanizedMoneyWithCurrency from '../common/Money/HumanizedMoneyWithCurrency';

class OrderTitle extends Component {
  componentWillUpdate(nextProps) {
    if (this.props.totalPrice.cents !== nextProps.totalPrice.cents) {
      this.animatePriceChanges();
    }
  }
  animatePriceChanges() {
    const $priceNode = $(findDOMNode(this.refs.price));

    $priceNode.addClass('bounce animated');
    setTimeout(() => {
      $priceNode.removeClass('bounce animated');
    }, 1000);
  }
  render() {
    const { totalCount, totalPrice } = this.props;

    if (totalCount || totalPrice) {
      return (
        <h1 className="b-cart__title">
          {`${t('vendor.pages.titles.order')} `}
          <strong>{t('vendor.entities.product', {count: totalCount})}</strong>
          {` ${t('vendor.order.new.sum')} `}
          <strong ref="price">
            <HumanizedMoneyWithCurrency money={totalPrice} />
          </strong>
        </h1>
      );
    }

    return null;
  }
}

OrderTitle.propTypes = {
  totalCount: PropTypes.number,
  totalPrice: PropTypes.object,
};

export default OrderTitle;