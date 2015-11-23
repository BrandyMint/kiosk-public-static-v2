import reqwest from 'reqwest';
import { productCards } from '../../routes/api';

export function load(productCardID) {
  return reqwest({
    url: productCards(productCardID),
    type: 'json',
  });
}