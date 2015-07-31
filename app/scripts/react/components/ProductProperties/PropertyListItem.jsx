import React, { PropTypes } from 'react';
import * as propertyTypes from '../../constants/propertyTypes';
import PropertyListColor from './PropertyListColor';
import PropertyListDictionary from './PropertyListDictionary';

export default class PropertyListItem {
  static propTypes = {
    propertyID: PropTypes.number.isRequired,
    propertyType: PropTypes.string.isRequired,
    propertyTitle: PropTypes.string.isRequired,
    value: PropTypes.any.isRequired,
    options: PropTypes.array.isRequired,
    onChange: PropTypes.func.isRequired
  }
  render() {
    const { propertyID, propertyType, value, options, onChange } = this.props;
    const Component = this.getComponentByType(propertyType);

    if (typeof Component !== 'function') {
      return this.renderUnknown();
    } else {
      return (
        <Component
          key={propertyID}
          value={value}
          options={options}
        />
      );
    }
  }
  renderUnknown() {
    return <span>Неизвестный тип характеристики</span>;
  }
  getComponentByType(propertyType) {
    const typeComponents = {
      [propertyTypes.PROPERTY_COLOR_TYPE]: PropertyListColor,
      [propertyTypes.PROPERTY_DICTIONARY_TYPE]: PropertyListDictionary
    };

    return typeComponents[propertyType];
  }
}