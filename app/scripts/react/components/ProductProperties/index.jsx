import { Component, PropTypes } from 'react';
import { getMatchedGood, getUpdatedValues } from './utils/utils';
import PropertyList from './PropertyList';
import ProductAddToCartButton from './ProductAddToCartButton';

// TODO: i18n
const PRODUCT_ADD_TO_CART_BUTTON = 'В корзину';
const PRODUCT_NOT_ENOUGH_DATA_BUTTON = 'Укажите больше характеристик';

// const defaultProps = {
//   properties: [{
//     id: 123,
//     type: 'colors',
//     title: 'Цвет',
//     items: [{
//       title: 'Розовый',
//       color: '#333333',
//       value: 123
//     }, {
//       title: 'Синий в горошек',
//       color: '#123212', 
//       image_url: '../images/15927_src.jpg',
//       value: 456
//     }, {
//       title: 'Синий в горошек22',
//       color: '#123212', 
//       value: 789
//     }]
//   }, {
//     id: 345,
//     type: 'items',
//     title: 'Размер',
//     items: [{
//       title: 'Неизвестный',
//       value: null
//     }, {
//       title: 'Размер 17',
//       value: 12
//     }, {
//       title: 'Размер 18',
//       value: 13
//     }, {
//       title: 'Размер 20',
//       value: 20
//     }]
//   }, {
//     id: 348,
//     type: 'items',
//     title: 'Вес',
//     items: [{
//       title: 'Шестой',
//       value: 12
//     }, {
//       title: 'Седьмой',
//       value: 13
//     }, {
//       title: 'Восьмой',
//       value: 1
//     }]
//   }],
//   goods: [{
//     article: 'Артикул 12', 
//     global_id: 'qweqwewqeq',
//     image_url: 'htttp://...product.png', 
//     quantity: 12,
//     attributes: {
//       345: 1,
//       123: 456
//     }
//   }, {
//     article: 'Артикул 13', 
//     global_id: 'qweqwewqeq123', 
//     quantity: 1, 
//     attributes: {
//       345: 13,
//       123: 123,
//       348: 12
//     }
//   }, {
//     article: 'Артикул 19', 
//     global_id: 'qweddqwewqeq123', 
//     quantity: 5, 
//     attributes: {
//       345: null,
//       123: 789
//     }
//   }, {
//     article: 'Артикул 19', 
//     global_id: 'qweddqwewqeq123', 
//     quantity: 5, 
//     attributes: {
//       345: 12,
//       123: 123,
//       348: 13
//     }
//   }]
// };

export default class ProductProperties extends Component {
  static propTypes = {
    goods: PropTypes.array.isRequired,
    properties: PropTypes.array.isRequired,
    formAction: PropTypes.string.isRequired,
  }
  static defaultProps = {
    goods: [],
    properties: []
  }
  state = {
    good: null,
    values: {},
  }
  render() {
    return (
      <form
        action={this.props.formAction}
        method="POST"
        className="b-product-properties"
      >
        <PropertyList
          {...this.props}
          values={this.state.values}
          onChange={this.updateValues.bind(this)}
        />
        {this.renderGlobalGoodID(this.state.good)}
        {this.renderAddToCart(this.props.properties)}
      </form>
    );
  }
  renderGlobalGoodID(good) {
    if (good) {
      return <input type="hidden" name="global_good_id" value={good.global_id} />;
    }
  }
  renderAddToCart(properties) {
    if (properties.length) {
      return (
        <div className="b-item-full__form__row b-item-full__form__submit">
          <ProductAddToCartButton
            text={!!this.state.good ? PRODUCT_ADD_TO_CART_BUTTON : PRODUCT_NOT_ENOUGH_DATA_BUTTON}
            disabled={!this.state.good}
          />
        </div>
      );
    }
  }
  updateValues(property, value) {
    const { properties, goods } = this.props;
    const { values } = this.state;

    const newValues = getUpdatedValues(property, properties, values, {
      [property.id]: value
    });
    const newGood = getMatchedGood(properties, goods, newValues)

    this.setState({
      good: newGood,
      values: newValues
    });
  }
}