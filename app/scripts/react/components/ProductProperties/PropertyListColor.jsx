import React, { PropTypes } from 'react';
import RadioColor from '../common/RadioColor';

export default class PropertyListColor {
  static propTypes = {
    propertyValue: PropTypes.any.isRequired,
    propertyTitle: PropTypes.string.isRequired,
    options: PropTypes.array.isRequired,
    onChange: PropTypes.func.isRequired
  }
  render() {
    console.log(this.props.options);
    return (
      <div className="b-item-full__form__row">
        <div className="b-item-full__form__option b-item-full__form__option_full">
          <h3 className="b-item-full__form__title">
            {this.props.propertyTitle}
          </h3>
          <RadioColor
            value={this.props.propertyValue}
            options={this.props.options}
          />
        </div>
      </div>
    );
  }
  getOptions() {
    return [{
      value: 123,
      title: 'Розовый',
      color: '#333333',
      disabled: false
    }, {
      value: 456,
      title: 'Синий в горошек',
      color: '#123212',
      image_url: '../images/15927_src.jpg',
      disabled: true
    }, {
      value: 789,
      title: 'Серо-синий',
      color: '#6c7a89',
      disabled: false
    }];
  }
}