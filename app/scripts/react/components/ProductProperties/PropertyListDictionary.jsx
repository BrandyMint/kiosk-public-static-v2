import React, { PropTypes } from 'react';
import Select from '../common/Select';

export default class PropertyListDictionary {
  static propTypes = {
    propertyValue: PropTypes.any.isRequired,
    propertyTitle: PropTypes.string.isRequired,
    options: PropTypes.array.isRequired,
    onChange: PropTypes.func.isRequired
  }
  render() {
    return (
      <div className="b-item-full__form__row">
        <div className="b-item-full__form__option b-item-full__form__option_full">
          <h3 className="b-item-full__form__title">
            {this.props.propertyTitle}
          </h3>
          <Select
            value={this.props.propertyValue}
            options={this.props.options}
          />
        </div>
      </div>
    );
  }
  getOptions() {
    return [{
      title: 'Неизвестный',
      value: null,
      disabled: false
    }, {
      title: 'Размер 17',
      value: 12,
      disabled: true
    }, {
      value: 13,
      title: 'Размер 18',
      disabled: false
    }];
  }
}