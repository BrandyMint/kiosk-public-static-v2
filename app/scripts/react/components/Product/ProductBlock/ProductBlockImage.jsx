import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import { RelativeImage } from '../../common/Image';

const ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

class ProductBlockImage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isHover: false,
    };

    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
  }
  getCurrentImage() {
    const { index_image, second_image } = this.props.product;
    const { isHover } = this.state;

    return isHover && second_image ? second_image : index_image;
  }
  handleMouseEnter() {
    this.setState({ isHover: true });
  }
  handleMouseLeave() {
    this.setState({ isHover: false });
  }
  render() {
    const { maxWidth, product: {index_image, second_image, title} } = this.props;

    return (
      <span
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
      >
        <ReactCSSTransitionGroup transitionName="fade">
          {!this.state.isHover &&
            <RelativeImage
              key="one"
              className="b-item__pic"
              image={index_image}
              maxWidth={maxWidth}
              title={title}
            />
          }
          {second_image && this.state.isHover &&
            <RelativeImage
              key="two"
              className="b-item__pic"
              image={second_image}
              maxWidth={maxWidth}
              title={title}
            />
          }
        </ReactCSSTransitionGroup>
      </span>
    );
  }
}

ProductBlockImage.propTypes = {
  product: PropTypes.object.isRequired,
  maxWidth: PropTypes.number,
};
ProductBlockImage.defaultProps = {
  maxWidth: 458,
};

export default ProductBlockImage;