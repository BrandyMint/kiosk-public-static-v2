import React, { findDOMNode, Component, PropTypes } from 'react';
import * as schemas from '../../../schemas';
import { getEltHeight, getEltWidth } from '../../../helpers/dom';
import Image from './Image';

class RelativeImage extends Component {
  state = {
    height: null,
    width: null,
  }
  componentDidMount() {
    this.setRelativeSize(this.props.maxHeight, this.props.maxWidth);
  }
  shouldImageBeFixed(image, height, width) {
    if (!image) {
      return false;
    }

    return Boolean((image.width && image.height) && (height || width));
  }
  getParentWithSize(elt) {
    let current = elt;

    while (current.parentNode) {
      current = current.parentNode;
      if (getEltHeight(current) || getEltWidth(current)) {
        return current;
      }
    }

    return null;
  }
  setRelativeSize(maxHeight, maxWidth) {
    const elt = findDOMNode(this);
    const parent = this.getParentWithSize(elt);

    this.setState({
      height: parent ? getEltHeight(parent) : maxHeight,
      width: parent ? getEltWidth(parent) : maxWidth,
    });
  }
  render() {
    const { height, width } = this.state;
    const { image } = this.props;

    if (height || width) {
      return (
        <Image
          {...this.props}
          hasFixedSize={this.shouldImageBeFixed(image, height, width)}
          maxHeight={height}
          maxWidth={width}
        />
      );
    }

    return <span />;
  }
}

RelativeImage.propTypes = {
  image: schemas.image,
  maxHeight: PropTypes.number,
  maxWidth: PropTypes.number,
};
RelativeImage.defaultProps = {
  maxHeight: null,
  maxWidth: null,
};

export default RelativeImage;