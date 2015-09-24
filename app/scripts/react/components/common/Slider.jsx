import React, { PropTypes, findDOMNode } from 'react';
import noUiSlider from 'nouislider';

const MINIMUM_VALUE = 0,
      MAXIMUM_VALUE = 100,
      STEP = 1;

export default class Slider {
  static propTypes = {
    from: PropTypes.number,
    to: PropTypes.number,
    value: PropTypes.number,
    step: PropTypes.number,
    reverse: PropTypes.bool,
    onSlide: PropTypes.func,
    onChange: PropTypes.func.isRequired,
  }
  static defaultProps = {
    from: MINIMUM_VALUE,
    to: MAXIMUM_VALUE,
    step: STEP
  }
  componentDidMount() {
    const slider = findDOMNode(this);

    noUiSlider.create(slider, {
      start: this.props.value,
      range: {
        min: this.props.from,
        max: this.props.to
      },
      step: this.props.step
    });

    slider.noUiSlider.on('slide', ::this.handleSlide);
    slider.noUiSlider.on('change', ::this.handleChange);
  }
  componentWillUnmount() {
    const slider = findDOMNode(this);
    slider.noUiSlider.destroy();
  }
  render() {
    return <div />;
  }
  handleSlide(range) {
    if (this.props.onSlide) {
      this.props.onSlide(range);
    }
  }
  handleChange(range) {
    if (this.props.onChange) {
      this.props.onChange(range);
    }
  }
}