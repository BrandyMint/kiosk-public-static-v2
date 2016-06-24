import React, { Component, PropTypes } from 'react';
import Bubble from '../Bubble';

class CartButton extends Component {
  render() {
    const { itemsCount, text, url } = this.props;

    return (
      <Bubble
        className="Bubble--cart element--active-opacity"
        count={itemsCount}
        data={['cart-button']}
        text={text}
        url={url}
      />
    );
  }
}

export default CartButton;
