import React, { findDOMNode, Component, PropTypes } from 'react';
import $ from 'jquery';
import { translate } from 'react-i18next';
import HumanizedMoneyWithCurrency from '../common/Money/HumanizedMoneyWithCurrency';

class CartTitle extends Component {
  componentWillUpdate(nextProps) {
    if (this.props.totalPrice.cents !== nextProps.totalPrice.cents) {
      this.animatePriceChanges();
    }
  }
  animatePriceChanges() {
    const $priceNode = $(findDOMNode(this.refs.price));

    $priceNode.addClass('animated bounce');
    setTimeout(() => {
      $priceNode.removeClass('animated bounce');
    }, 1000);
  }
  render() {
    const { totalCount, t, totalPrice } = this.props;

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

CartTitle.propTypes = {
  totalCount: PropTypes.number,
  totalPrice: PropTypes.object,
};

export default translate(CartTitle);