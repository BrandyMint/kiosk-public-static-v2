import React, { Component, findDOMNode, PropTypes } from 'react';

export default class ProductGallery extends Component {
  static propTypes = {
    images: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string,
        url: PropTypes.string.isRequired,
      })
    ),
    previewWidth: PropTypes.number,
    thumbWidth: PropTypes.number,
  }
  state = {
    selectedIndex: 0,
  }
  static defaultProps = {
    images: [],
    previewWidth: 486,
    thumbWidth: 115
  }
  componentDidMount() {
    this.initSliders();

    $(document).on('productPhotoChange', this.onPhotoChange.bind(this));
    $(document).on('updateProductImages', this.reinitSliders.bind(this));
  }
  componentDidUpdate(prevProps, prevState) {
    const $productPhoto = $(findDOMNode(this.refs.productPhoto));
    const $productThumbs = $(findDOMNode(this.refs.productThumbs));

    if (prevState.selectedIndex !== this.state.selectedIndex) {
      $productThumbs.trigger('owl.goTo', this.state.selectedIndex);
      $productPhoto.trigger('owl.goTo', this.state.selectedIndex);
    }
  }
  initSliders() {
    const $productPhoto = $(findDOMNode(this.refs.productPhoto));
    const $productThumbs = $(findDOMNode(this.refs.productThumbs));

    $productPhoto.owlCarousel({
      singleItem: true,
      afterAction: this.onAfterPhotoAction.bind(this),
    });

    if ($productThumbs.length) {
      $productThumbs.owlCarousel({
        items: 4,
        pagination: false,
      });
    }
  }
  reinitSliders() {
    const $productPhoto = $(findDOMNode(this.refs.productPhoto));
    const $productThumbs = $(findDOMNode(this.refs.productThumbs));

    $productPhoto.data('owlCarousel').reinit({
      singleItem: true,
      afterAction: this.onAfterPhotoAction.bind(this),
    });

    if ($productThumbs.length) {
      $productThumbs.data('owlCarousel').reinit({
        items: 4,
        pagination: false,
      });
    }
  }
  getIndexByUrl(images, url) {
    for (let i = 0; i < images.length; i++) {
      const image = images[i];

      if (image.url === url) {
        return i;
      }
    };

    return -1;
  }
  onAfterPhotoAction(el) {
    const $productPhoto = $(findDOMNode(this.refs.productPhoto));
    const carouselData = $productPhoto.data('owlCarousel');

    if (carouselData) {
      this.setState({
        selectedIndex: carouselData.currentItem,
      });
    }
  }
  onPhotoChange(ev, url) {
    if (url) {
      const selectedIndex = this.getIndexByUrl(this.props.images, url);

      if (selectedIndex > -1) {
        this.setState({ selectedIndex });
      }
    }
  }
  onThumbClick(idx, ev) {
    const $productPhoto = $(findDOMNode(this.refs.productPhoto));

    ev.preventDefault();
    $productPhoto.trigger('owl.goTo', idx);
  }
  renderPhotoItem(el, idx) {
    return (
      <a
        className="b-slider__item"
        data-lightbox={true}
        href={el.url}
        key={idx}
        rel="photo-stack"
      >
        <img
          alt={el.title}
          className="u-photo"
          itemProp="image"
          src={el.url}
          title={el.title}
          width={this.props.previewWidth}
        />
      </a>
    );
  }
  renderThumbItem(el, idx) {
    return (
      <div
        className="b-slider__item"
        key={idx}
        onClick={this.onThumbClick.bind(this, idx)}
      >
        <img
          alt={el.title}
          src={el.url}
          title={el.title}
          width={this.props.thumbWidth}
        />
      </div>
    );
  }
  render() {
    return (
      <div>
        <div className="b-slider" ref="productPhoto">
          {this.props.images.map(this.renderPhotoItem.bind(this))}
        </div>
        {this.props.images.length > 1 &&
          <div className="b-slider b-slider_thumbs" ref="productThumbs">
            {this.props.images.map(this.renderThumbItem.bind(this))}
          </div>
        }
      </div>
    );
  }
}