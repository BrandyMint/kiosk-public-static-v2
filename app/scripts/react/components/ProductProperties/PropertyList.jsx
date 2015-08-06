import React, { PropTypes } from 'react';
import PropertyListItem from './PropertyListItem';
import { getOptions, getCurrentGood } from './utils/getOptions';

export default class PropertyList {
  static propTypes = {
    goods: PropTypes.array.isRequired,
    values: PropTypes.object.isRequired,
    properties: PropTypes.array.isRequired,
    onChange: PropTypes.func.isRequired
  }
  render() {
    const { goods, values, properties, onChange } = this.props;

    if (properties.length) {
      const options = getOptions(properties, goods, values);
      const currentGood = getCurrentGood(properties, goods, values);
      const propertyList = properties.map((property) => (
        <PropertyListItem
          key={property.id}
          value={values[property.id] || null}
          options={options[property.id] || []}
          property={property}
          onChange={onChange.bind(this, property.id)}
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
}
