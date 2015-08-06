import React, { PropTypes } from 'react';
import * as propertyTypes from '../../constants/propertyTypes';
import PropertyListItemColor from './PropertyListItemColor';
import PropertyListItemDictionary from './PropertyListItemDictionary';

export default class PropertyListItem {
  static propTypes = {
    value: PropTypes.any,
    options: PropTypes.array.isRequired,
    property: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired
  }
  render() {
    const { value, options, property, onChange } = this.props;
    const Component = this.getComponentByType(property.type);

    if (typeof Component === 'function') {
      return (
        <Component
          key={property.id}
          name={this.getItemName(property.id)}
          value={value}
          options={options}
          propertyTitle={property.title}
          onChange={this.props.onChange}
        />
      );
    } else {
      return <span>Неизвестный тип характеристики</span>;
    }
  }
  getComponentByType(propertyType) {
    const typeComponents = {
      [propertyTypes.PROPERTY_COLOR_TYPE]: PropertyListItemColor,
      [propertyTypes.PROPERTY_DICTIONARY_TYPE]: PropertyListItemDictionary
    };

    return typeComponents[propertyType];
  }
  getItemName(propertyID) {
    return `attribute[${propertyID}]`;
  }
}