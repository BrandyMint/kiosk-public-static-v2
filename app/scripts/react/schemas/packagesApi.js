import { PropTypes } from 'react';
import money from './money';
import image from './image';

/**
 * Схему возвращает бэкенд /v1/packages.json
 * 
 * Используется в компоненте CartContainer
 */

export default PropTypes.arrayOf(PropTypes.shape({
  id: PropTypes.number.isRequired,
  global_id: PropTypes.string.isRequired,
  has_ordering_goods: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: money.isRequired,
  image: image.isRequired,
}));
