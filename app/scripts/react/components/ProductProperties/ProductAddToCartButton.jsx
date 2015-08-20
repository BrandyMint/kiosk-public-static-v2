import { PropTypes } from 'react';

export default class ProductAddToCartButton {
  static propTypes = {
    text: PropTypes.string.isRequired,
    disabled: PropTypes.bool.isRequired,
  }
  render() {
    return (
      <button type="submit" disabled={this.props.disabled} className="b-btn">
        {this.props.text}
      </button>
    );
  }
}