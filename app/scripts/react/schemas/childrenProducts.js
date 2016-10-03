import { PropTypes } from 'react';
import product from './product';

const {
  arrayOf,
  shape,
  string,
} = PropTypes;

export default arrayOf(shape({
  products: arrayOf(product).isRequired,
  vendorCategoryPath: string.isRequired,
  title: string,
}));
