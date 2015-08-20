import React, { PropTypes } from 'react';

export default class ProductAddToCartButton {
  static propTypes = {
    hasGood: PropTypes.bool.isRequired,
    disabled: PropTypes.bool.isRequired
  }
  render() {
    return (
      <button type="submit" className="b-btn" disabled={this.props.disabled}>
        {this.props.hasGood ? 'В корзину' : 'Укажите больше характеристик'}
      </button>
    );
  }
}