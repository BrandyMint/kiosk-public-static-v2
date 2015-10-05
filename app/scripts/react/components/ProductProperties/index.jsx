import { Component, PropTypes } from 'react';
import { getMatchedGood, getUpdatedValues } from './utils/utils';
import HiddenInput from '../common/HiddenInput';
import PropertyList from './PropertyList';
import ProductAddToCartButton from './ProductAddToCartButton';

// TODO: i18n
const ADD_TO_CART_BUTTON = 'В корзину';
const NOT_ENOUGH_DATA_BUTTON = 'Укажите больше характеристик';

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
//     image_url: 'http://citycycle.ru/upload/product_images/13976/ac433b32eeb1e39147083a6d0c6cbfe9_0x0.jpg', 
//     quantity: 12,
//     attributes: {
//       345: 1,
//       123: 456
//     }
//   }, {
//     article: 'Артикул 13', 
//     global_id: 'qweqwewqeq123', 
//     image_url: 'http://citycycle.ru/upload/product_images/69063/8cebf4c6a251a09f0ab2ebf66feb0026_0x0.jpg',
//     quantity: 1, 
//     attributes: {
//       345: 13,
//       123: 123,
//       348: 12
//     }
//   }, {
//     article: 'Артикул 19', 
//     global_id: 'qweddqwewqeq123',
//     image_url: 'http://assets.kiiiosk.ru/uploads/shop/5/uploads/product_image/image/28960/60bdcb79-3c3b-421e-8a78-36257d1cb196.jpg',
//     quantity: 5, 
//     attributes: {
//       345: null,
//       123: 789
//     }
//   }, {
//     article: 'Артикул 19', 
//     global_id: 'qweddqwewqeq123',
//     image_url: 'http://assets.kiiiosk.ru/uploads/shop/5/uploads/product_image/image/28960/60bdcb79-3c3b-421e-8a78-36257d1cb196.jpg',
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
    properties: [],
  }
  state = {
    good: null,
    values: {},
  }
  componentDidUpdate() {
    if (this.state.good) {
      $(document).trigger('productPhotoChange', this.state.good.image_url);
    } else {
      $(document).trigger('productPhotoChange', null);
    }
  }
  render() {
    const { formAction, properties } = this.props;
    const { good, values } = this.state;

    return (
      <form
        action={formAction}
        className="b-product-properties"
        method="POST"
      >
        <PropertyList
          {...this.props}
          onChange={this.updateValues.bind(this)}
          values={values}
        />
        {good &&
          <HiddenInput name="global_good_id" value={good.global_id} />
        }
        {!!properties.length &&
          <div className="b-item-full__form__row b-item-full__form__submit">
            <ProductAddToCartButton
              text={!!good ? ADD_TO_CART_BUTTON : NOT_ENOUGH_DATA_BUTTON}
              disabled={!good}
            />
          </div>
        }
      </form>
    );
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