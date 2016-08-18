import $ from 'jquery';
import classNames from 'classnames';
import React, { Component, PropTypes } from 'react';
import provideTranslations from '../../HoC/provideTranslations';
import { findDOMNode } from 'react-dom';
import { PHOTO_CHANGE } from '../../../constants/globalEventKeys';
import ProductCardGalleryImage from './ProductCardGalleryImage';
import ProductCardGallerySlider from './ProductCardGallerySlider';

class ProductCardGallery extends Component {
  render() {
    const { isKioskEnvironment } = this.props;

    if (isKioskEnvironment) {
      return <ProductCardGallerySlider {...this.props} />;
    } else {
      return <ProductCardGalleryImage {...this.props} />;
    }
  }
}

ProductCardGallery.propTypes = {
  isKioskEnvironment: PropTypes.bool.isRequired,
  images: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      uid: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      url: PropTypes.string.isRequired,
    }),
  ),
};
ProductCardGallery.defaultProps = {
  images: [],
};

export default provideTranslations(ProductCardGallery);
