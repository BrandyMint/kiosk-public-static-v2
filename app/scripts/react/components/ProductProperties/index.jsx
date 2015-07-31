import React, { Component, PropTypes } from 'react';
import * as propertyTypes from '../../constants/propertyTypes';
import PropertyList from './PropertyList';

const defaultProps = {
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
};

export default class ProductProperties extends Component {
  static defaultProps = defaultProps
  state = {
    filter: {}
  }
  render() {
    return <span />;
    // return (
    //   <form>
    //     <PropertyList
    //       properties={this.getProperties(this.state.filter, this.props.properties, this.props.variants)}
    //       onChange={this.updateFilter.bind(this)}
    //     />
    //   </form>
    // );
  }
  getProperties(filter, srcProperties, variants) {
    return srcProperties.map((srcProperty) => {
      return {
        ...srcProperty,
        items: srcProperty.items.map((item) => {
          const selected = filter[srcProperty.id] === item.value;
          const active = variants.some((variant) => (
            variant.attributes[srcProperty.id] === item.value
          ));

          return { ...item, active, selected };
        })
      };
    });
  }
  updateFilter(propertyID, propertyValue) {
    this.setState({
      filter: {...this.state.filter, [propertyID]: propertyValue}
    });
  }
}

// %form
//                   .b-item-full__form__row
//                     .b-item-full__form__option.b-item-full__form__option_full
//                       %h3.b-item-full__form__title Выберите цвет
//                       %label.radiobtn.radiobtn--color.radiobtn--light{data: {tooltip: 'Белый'}}>
//                         %input.radiobtn__input{type: 'radio', name: 'product-color'}
//                         %span.radiobtn__ind{style: 'background-color: #ffffff;'}
//                       %label.radiobtn.radiobtn--color{data: {tooltip: 'Черный'}}>
//                         %input.radiobtn__input{type: 'radio', name: 'product-color'}
//                         %span.radiobtn__ind{style: 'background-color: #000000;'}
//                       %label.radiobtn.radiobtn--color{data: {tooltip: 'Красный'}}>
//                         %input.radiobtn__input{type: 'radio', name: 'product-color', checked: 'true'}
//                         %span.radiobtn__ind{style: 'background-color: #e74c3c;'}
//                       %label.radiobtn.radiobtn--color{data: {tooltip: 'Серо-синий'}}>
//                         %input.radiobtn__input{type: 'radio', name: 'product-color'}
//                         %span.radiobtn__ind{style: 'background-color: #6c7a89;'}
//                       %label.radiobtn.radiobtn--color{data: {tooltip: 'Синий в горошек'}}
//                         %input.radiobtn__input{type: 'radio', name: 'product-color'}
//                         %span.radiobtn__ind{style: 'background-image: url(../images/15927_src.jpg)'}
//                   .b-item-full__form__row
//                     .b-item-full__form__option
//                       %select{product-select}
//                         %option{selected: 'selected'} Выберите размер
//                         %option{data-productItem:'{"id":3777,"product_id":2057,"title":"Размер: 13","updated_at":"2014-11-19T15:27:48.378+04:00","created_at":"2014-10-29T15:48:25.489+04:00","article":"MR007-01-13","quantity_unit":{"id":"pcs","short":"шт."},"quantity":"15.0","count":15,"description":"Миникольцо Ви без камней серебряное (родий, Серебро 925, R140114, 13, MR007-01-13)","stock_synced_at":"2014-11-19T15:25:01.742+04:00","is_stock_synced":true,"ms_consignment_uuid":"ea75f922-2e22-11e4-f123-002590a28eca","ms_feature_uuid":"ea75f327-2e22-11e4-279d-002590a28eca","product":{"id":2057,"category_id":173,"title":"Миникольцо Ви без камней серебряное","updated_at":"2014-11-18T20:03:34.676+04:00","position":33,"price":{"cents":200000,"currency":"RUB"},"is_published":true,"has_errors":false,"manual_state":0,"total_items_quantity":"155.0","quantity_unit":{"id":"pcs","short":"шт."},"state":"published","image":{"mobile_url":"http://3001.vkontraste.ru/uploads/product_image/image/4229/image.png","url":"http://3001.vkontraste.ru/uploads/product_image/image/4229/image.png","id":4229},"images":[{"mobile_url":"http://3001.vkontraste.ru/uploads/product_image/image/4229/image.png","url":"http://3001.vkontraste.ru/uploads/product_image/image/4229/image.png","id":4229}]}}'} Размер 15
//                         %option{disabled} Размер 11 — нет в наличии

//                     .b-item-full__form__submit
//                       %div{data-react-class: 'AddToBasketButton'}