import { PropTypes } from 'react';
import money from './money';
import image from './image';

/**
 * add_to_cart_url - урл для добавления товара в корзину. используется в WishlistAddToCartButton
 * default_url - урл для перехода на страницу товара
 * custom_attributes - описание товара в виде {'имя характеристики': 'характеристика'}
 */

export default PropTypes.shape({
  custom_attributes: PropTypes.object,
  is_sale: PropTypes.bool.isRequired,
  image: image,
  images: PropTypes.arrayOf(image),
  price: money,
  actual_price: money,
  add_to_cart_url: PropTypes.string,
  default_url: PropTypes.string,
  selling_by_weight: PropTypes.bool,
  weight_of_price: PropTypes.number,
});
