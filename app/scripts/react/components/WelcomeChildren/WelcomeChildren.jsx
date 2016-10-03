import React, { Component, PropTypes } from 'react';
import ImageSlider from 'rc/common/ImageSlider';
import ChildrenProducts from 'rc/ChildrenProducts/ChildrenProducts';
import PostProducts from 'rc/common/PostProducts';

class WelcomeChildren extends Component {
  render() {
    const {
      childrenProducts,
      showWelcomeSlider,
      vendor: {
        pre_products_text: preProductsText,
        post_products_text: postProductsText,
        slider_images: sliderImages,
      },
    } = this.props;

    return (
      <div>
        <div className="b-page__content__inner b-page__content__inner_slider">
          {showWelcomeSlider && (
            <ImageSlider
              className="b-slider_promo"
              hasThumbs={false}
              slides={sliderImages}
            />
          )}
        </div>
        {preProductsText && (
          <div className="b-page__content__inner b-page__content__inner_content">
            <div className="lead-text">
              <div
                className="lead-text__content"
                dangerouslySetInnerHTML={{ __html: preProductsText }}
              />
            </div>
          </div>
        )}
        {childrenProducts && <ChildrenProducts childrenProducts={childrenProducts} />}
        {postProductsText && <PostProducts postProductsText={postProductsText}/>}
      </div>
    );
  }
}

WelcomeChildren.propTypes = {
  childrenProducts: PropTypes.array,
  showWelcomeSlider: PropTypes.bool.isRequired,
  vendor: PropTypes.object,
};

export default WelcomeChildren;
