import React, { Component, PropTypes } from 'react';
import VendorLayoutContainer from 'rc/VendorLayout';
import LookbookContainer from './index';
import ImageSlider from 'rc/common/ImageSlider';

class LookbookPage extends Component {
  render() {
    const {
      i18n,
      layoutProps,
      title,
      images,
    } = this.props;

    return (
      <VendorLayoutContainer {...layoutProps} i18n={i18n}>
        <LookbookContainer {...{
          title,
          images,
        }} />
      </VendorLayoutContainer>
    );
  }
}

LookbookPage.propTypes = {
  i18n: PropTypes.object,
  layoutProps: PropTypes.shape(...VendorLayoutContainer.propTypes).isRequired,
  title: PropTypes.string.isRequired,
  images: ImageSlider.propTypes.slides,
};

export default LookbookPage;
