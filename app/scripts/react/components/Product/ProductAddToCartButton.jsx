import React, { Component, PropTypes } from 'react';
import { translate } from 'react-i18next';

class ProductAddToCartButton extends Component {
  render() {
    const { disabled, t, text } = this.props;

    return (
      <button
        className="b-btn element--active-opacity"
        data-disable-with={t('vendor.button.disable_with.adding')}
        disabled={disabled}
        name="to_cart"
        type="submit"
      >
        {text}
      </button>
    );
  }
}

ProductAddToCartButton.propTypes = {
  disabled: PropTypes.bool,
  text: PropTypes.string.isRequired,
};

export default translate(ProductAddToCartButton);