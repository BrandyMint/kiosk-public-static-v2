import React, { Component, PropTypes } from 'react';
import PropertyListItem from './PropertyListItem';
import getOptions from './utils/getOptions';

export default class PropertyList extends Component {
  static propTypes = {
    properties: PropTypes.array.isRequired,
    onChange: PropTypes.func.isRequired
  }
  static defaultProps = {
    properties: [{
      id: 123,
      type: 'PropertyColor',
      title: 'Цвет',
      items: [{
        title: 'Розовый',
        color: '#333333',
        value: 123
      }, {
        title: 'Синий в горошек',
        color: '#123212', 
        image_url: '../images/15927_src.jpg',
        value: 456
      }]
    }, {
      id: 345,
      type: 'PropertyDictionary',
      title: 'Размер',
      items: [{
        title: 'Неизвестный',
        value: null
      }, {
        title: 'Размер 17',
        value: 12
      }, {
        title: 'Размер 18',
        value: 13
      }]
    }],
    variants: [{
      article: 'Артикул 12', 
      good_global_id: 'qweqwewqeq',
      image_url: 'htttp://...product.png', 
      quantity: 12,
      attributes: {
        345: 12,
        123: 456
      }
    }, {
      article: 'Артикул 13', 
      good_global_id: 'qweqwewqeq123', 
      quantity: 1, 
      attributes: {
        123: 123,
        345: 13
      }
    }]
  }
  state = {
    values: {}
  }
  render() {
    if (this.props.properties.length) {
      const propertyList = this.props.properties.map((property) => (
        <PropertyListItem
          key={property.id}
          propertyID={property.id}
          propertyType={property.type}
          propertyTitle={property.title}
          value={this.getPropertyValue.call(this, property)}
          options={this.getPropertyOptions.call(this, property)}
          onChange={this.handleChange.bind(this, property.id)}
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
  getPropertyValue(property) {
    return this.state.values[property.id];
  }
  getPropertyOptions(property) {
    return getOptions(this.props.properties, this.props.variants, this.state.values)[property.id];
    // getOptions(this.props.properties, this.props.variants, this.state.values)[property.id];
    // return this.state.options[property.id];
  }
  handleChange(propertyID, value) {
    this.setState({
      values: {
        ...this.state.values,
        [propertyID]: value
      }
    });
  }
}