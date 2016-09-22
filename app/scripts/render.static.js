/*global React */
import './resources/gon';
import './render.libs';
import './render.bundle';

import cartEmpty from '../../test/fixtures/cart/empty';
import cartSelectPackage from '../../test/fixtures/cart/select-package';
import cartWithPackage from '../../test/fixtures/cart/with-package';
import cartWithImageSlider from 'test/fixtures/cart/with-image-slider';

import orderSample from '../../test/fixtures/order/with-coupon';
import orderNoCoupon from '../../test/fixtures/order/no-coupon';

import wishlistSample from '../../test/fixtures/wishlist/synteticData';

import productSample from '../../test/fixtures/products/22983';
import productMultiSelect from '../../test/fixtures/products/multi-select';
import productWeight from '../../test/fixtures/products/weight';
import productDoesntSell from '../../test/fixtures/products/3917';
import productNoGoods from '../../test/fixtures/products/no-goods';

import menuTopSample1 from 'test/fixtures/menuTop/sample1';
import menuTopSample2 from 'test/fixtures/menuTop/sample2';

import menuBottomSample from 'test/fixtures/menuBottom/sample';

global.CartContainerEmpty = () => React.createElement(global.CartContainer, cartEmpty);
global.CartContainerSelectPackage = () => React.createElement(global.CartContainer, cartSelectPackage);
global.CartContainerWithPackage = () => React.createElement(global.CartContainer, cartWithPackage);
global.CartContainerWithImageSlider = () => React.createElement(global.CartContainer, cartWithImageSlider);

global.OrderContainerSample = () => React.createElement(global.OrderContainer, orderSample);
global.OrderContainerNoCoupon = () => React.createElement(global.OrderContainer, orderNoCoupon);

global.WishlistContainerSample = () => React.createElement(global.WishlistContainer, wishlistSample);

global.ProductCardSample = () => React.createElement(global.ProductCard, productSample);
global.ProductCardMultiSelect = () => React.createElement(global.ProductCard, productMultiSelect);
global.ProductCardDoesntSell = () => React.createElement(global.ProductCard, productDoesntSell);
global.ProductCardWeight = () => React.createElement(global.ProductCard, productWeight);
global.ProductCardNoGoods = () => React.createElement(global.ProductCard, productNoGoods);

global.MenuTopSample1 = () => React.createElement(global.MenuTop, menuTopSample1);
global.MenuTopSample2 = () => React.createElement(global.MenuTop, menuTopSample2);
global.MenuBottomSample = () => React.createElement(global.MenuBottom, menuBottomSample);


import './lib/ReactRailsUJS';
