import React, { PropTypes } from 'react';
import PropertyListItem from './PropertyListItem';
import getOptions from './utils/getOptions';

export default class PropertyList {
  static propTypes = {
    values: PropTypes.object.isRequired,
    variants: PropTypes.array.isRequired,
    properties: PropTypes.array.isRequired,
    onChange: PropTypes.func.isRequired
  }
  render() {
    if (this.props.properties.length) {
      const { properties, variants, values } = this.props;
      const options = getOptions(properties, variants, values);
      const propertyList = this.props.properties.map((property) => (
        <PropertyListItem
          key={property.id}
          value={this.getValue(property.id, values)}
          options={options[property.id] || []}
          property={property}
          onChange={this.props.onChange.bind(this, property.id)}
        />
      ));

      return <span>{propertyList}</span>;
    } else {
      return (
        <div className="p-lg text-center">
          <p>Нет характеристик для вывода</p>
        </div>
      );
    }
  }
  getValue(propertyID, values) {
    return values[propertyID] || null;
  }
}
