import React, { Component, PropTypes } from 'react';
import { translate } from 'react-i18next';
import { getOptions } from './utils';
import PropertyListItem from './PropertyListItem';

class PropertyList extends Component {
  static propTypes = {
    goods: PropTypes.array.isRequired,
    onChange: PropTypes.func.isRequired,
    properties: PropTypes.array.isRequired,
    values: PropTypes.object.isRequired,
  }
  render() {
    const { goods, values, properties, onChange, t } = this.props;

    if (properties.length) {
      const options = getOptions(properties, goods, values);
      const propertyList = properties.map((property) => (
        <PropertyListItem
          key={property.id}
          onChange={onChange.bind(this, property)}
          options={options[property.id] || []}
          property={property}
          value={values[property.id] || null}
        />
      ));

      return <span>{propertyList}</span>;
    } else {
      return (
        <div className="p-lg text-center">
          <p>{t('vendor.properties.empty')}</p>
        </div>
      );
    }
  }
}

export default translate(PropertyList);