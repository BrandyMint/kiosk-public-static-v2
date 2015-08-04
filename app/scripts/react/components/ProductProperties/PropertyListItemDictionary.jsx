import React, { PropTypes } from 'react';
import Select from '../common/Select';

export default class PropertyListItemDictionary {
  static propTypes = {
    value: PropTypes.any.isRequired,
    options: PropTypes.array.isRequired,
    propertyTitle: PropTypes.string.isRequired,
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
            value={this.props.value}
            options={this.props.options}
            onChange={this.handleChange.bind(this)}
          />
        </div>
      </div>
    );
  }
  handleChange(value) {
    const val = isNaN(parseInt(value)) ? value : parseInt(value);
    this.props.onChange(val);
  }
  // getOptions() {
  //   return [{
  //     title: 'Неизвестный',
  //     value: null,
  //     disabled: false
  //   }, {
  //     title: 'Размер 17',
  //     value: 12,
  //     disabled: true
  //   }, {
  //     value: 13,
  //     title: 'Размер 18',
  //     disabled: false
  //   }];
  // }
}