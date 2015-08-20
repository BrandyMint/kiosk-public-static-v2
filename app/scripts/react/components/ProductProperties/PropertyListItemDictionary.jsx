import React, { PropTypes } from 'react';
import Select from '../common/Select';

export default class PropertyListItemDictionary {
  static propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.any,
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
            name={this.props.name}
            value={this.props.value}
            options={this.props.options}
            onChange={this.props.onChange}
          />
        </div>
      </div>
    );
  }
}