import { PropTypes } from 'react';
import vendorContact from './vendorContact';
import slide from './slide';

const {
  arrayOf,
  shape,
  string,
} = PropTypes;

export default shape({
  contacts: arrayOf(vendorContact),
  title: string,
  search_products_path: string,
  pre_products_text: string,
  post_products_text: string,
  slider_images: arrayOf(slide),
});
