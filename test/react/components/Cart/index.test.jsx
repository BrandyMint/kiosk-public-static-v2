/*global describe, it */
import React from 'react';
import { expect } from 'chai';
import { render } from 'enzyme';
import t from 'test/mocks/t';
import CartContainer from 'rc/Cart';
import { createStore, combineReducers } from 'redux';
import * as reducers from 'r/reducers';
import { humanizedMoney } from 'r/helpers/money';

import emptyCart from 'test/fixtures/cart/empty';
import weightOfPriceCart from 'test/fixtures/cart/weight-of-price';
import withImageSlider from 'test/fixtures/cart/with-image-slider';

global.redux = createStore(combineReducers(reducers));

describe('[Component] CartContainer', () => {
  it('should render empty message when the cart is empty', () => {
    const props = { ...emptyCart, t, isTesting: true };

    expect(render(<CartContainer {...props} />)
      .find('.b-cart__content .b-text p')
      .text()
    ).to.equal('vendor.cart.empty');
  });

  it('should consider `good.weight_of_price` for weighted goods', () => {
    const props = { ...weightOfPriceCart, t, isTesting: true };
    const [ item ] = weightOfPriceCart.initialCart.items;
    const itemSum = item.weight / item.good.weight_of_price * item.good.actual_price.cents;
    const itemPrice = Object.assign({}, item.good.actual_price, { cents: itemSum });

    expect(render(<CartContainer {...props} />)
      .find('.b-cart__item__price > span > span').eq(0)
      .text()
    ).to.equal(humanizedMoney(itemPrice));
  });

  it('should render 3 images when provided with good having 3 images', () => {
    const props = { ...withImageSlider, t, isTesting: true };

    // react-owl-carousel не рендерит сразу свою разметку поэтому проверям
    // только то что компонент зарезервировал место под слайдер
    expect(render(<CartContainer {...props} />)
      .find('.b-cart__item__col-img > div').eq(0)
      .children()
      .length
    ).to.equal(3);
  });
});
