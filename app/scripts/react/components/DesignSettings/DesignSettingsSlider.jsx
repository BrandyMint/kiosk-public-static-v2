import React, { PropTypes } from 'react';
import classNames from 'classnames';
import Slider from '../common/Slider';

export default class DesignSettingsSlider {
  static propTypes = {
    displayValue: PropTypes.bool,
    from: PropTypes.number,
    onChange: PropTypes.func.isRequired,
    step: PropTypes.number,
    to: PropTypes.number,
    value: PropTypes.number.isRequired,
  }
  render() {
    const { displayValue, value } = this.props;
    const sliderClasses = classNames({
      'design-settings__slider--with-value': displayValue,
    });

    return (
      <span className={sliderClasses}>
        <Slider
          {...this.props}
          onSlide={::this.handleSlide}
          onChange={::this.handleSlide}
        />
        {displayValue
         && <span className="design-settings__slider-value">
              {value}
            </span>
        }
      </span>
    );
  }
  handleSlide(range) {
    this.props.onChange(parseFloat(range[0]));
  }
}