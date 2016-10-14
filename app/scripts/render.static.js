/*global React */
/* eslint "react/no-multi-comp": "off", "react/display-name": "off" */
import './resources/gon';
import './render.libs';
import './render.bundle';

import cartSelectPackage from '../../test/fixtures/cart/select-package';
import orderSample from '../../test/fixtures/order/with-coupon';
import orderNoCoupon from '../../test/fixtures/order/no-coupon';
import wishlistSample from '../../test/fixtures/wishlist/synteticData';
import productSample from '../../test/fixtures/products/22983';
import productMultiSelect from '../../test/fixtures/products/multi-select';
import productWeight from '../../test/fixtures/products/weight';
import productDoesntSell from '../../test/fixtures/products/3917';
import productNoGoods from '../../test/fixtures/products/no-goods';
import menuTopSample1 from 'test/fixtures/menuTop/sample1';
import menuTopStickySample from 'test/fixtures/menuTop/sticky';
import menuTopSample2 from 'test/fixtures/menuTop/sample2';
import menuBottomSample from 'test/fixtures/menuBottom/sample';
import navBarSample from 'test/fixtures/navBar/sample';
import productListSample from 'test/fixtures/productList/sample';
import productGroupSample from 'test/fixtures/productGroup/sample.json';
import childrenProductsSample from 'test/fixtures/childrenProducts/sample.json';
import categoriesShowEmpty from 'test/fixtures/categoriesShow/empty-products.json';
import dictionaryEntitiesShowSample from 'test/fixtures/dictionaryEntitiesShow/sample.json';
import productArchivedSample from 'test/fixtures/productArchived/sample.json';
import blogPostListSample from 'test/fixtures/blogPostList/sample.json';
import productSearchSample from 'test/fixtures/productSearch/sample.json';
import productSearchEmpty from 'test/fixtures/productSearch/empty.json';
import welcomeChildrenSample from 'test/fixtures/welcomeChildren/sample.json';
import welcomeSample from 'test/fixtures/welcome/sample.json';
import lookbookSample from 'test/fixtures/lookbook/sample.json';
import ContentPageSample from 'test/fixtures/contentPage/sample.json';
import orderCancelledProps from 'test/fixtures/orderCancelled/sample.json';
import orderCreatedProps from 'test/fixtures/orderCreated/sample.json';
import orderPaidProps from 'test/fixtures/orderPaid/sample.json';
import orderPaymentProps from 'test/fixtures/orderPayment/sample.json';
import orderShowProps from 'test/fixtures/orderShow/sample.json';
import clientSessionNewProps from 'test/fixtures/clientSessionNew/sample.json';
import cabinetProps from 'test/fixtures/cabinet/sample.json';

global.CartContainerSelectPackage = () => React.createElement(global.CartContainer, cartSelectPackage);
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
global.MenuTopStickySample = () => React.createElement(global.MenuTop, menuTopStickySample);
global.MenuBottomSample = () => React.createElement(global.MenuBottom, menuBottomSample);
global.NavBarSample = () => React.createElement(global.NavBar, navBarSample);
global.ProductListSample = () => React.createElement(global.ProductList, productListSample);
global.ProductGroupSample = () => React.createElement(global.ProductGroup, productGroupSample);
global.ChildrenProductsSample = () => React.createElement(global.ChildrenProducts, childrenProductsSample);
global.CategoriesShowEmpty = () => React.createElement(global.CategoriesShow, categoriesShowEmpty);
global.CategoriesShowFilterDirty = () => React.createElement(global.CategoriesShow, { ...categoriesShowEmpty, isFilterDirty: true });
global.CategoriesShowChildrenEmpty = () => React.createElement(global.CategoriesShowChildren, { childrenProducts: [], vendorRootPath: '/vendor/root/path' });
global.DictionaryEntitiesShowSample = () => React.createElement(global.DictionaryEntitiesShow, dictionaryEntitiesShowSample);
global.DictionaryEntitiesShowEmpty = () => React.createElement(global.DictionaryEntitiesShow, { ...dictionaryEntitiesShowSample, products: { items: [], pagination: {} }});
global.ProductArchivedSample = () => React.createElement(global.ProductArchived, productArchivedSample);
global.BlogPostListSample = () => React.createElement(global.BlogPostList, blogPostListSample);
global.ProductSearchSample = () => React.createElement(global.ProductSearch, productSearchSample);
global.ProductSearchEmpty = () => React.createElement(global.ProductSearch, productSearchEmpty);
global.WelcomeChildrenSample = () => React.createElement(global.WelcomeChildren, welcomeChildrenSample);
global.WelcomeSample = () => React.createElement(global.Welcome, welcomeSample);
global.LookbookSample = () => React.createElement(global.Lookbook, lookbookSample);
global.ContentPageSample = () => React.createElement(global.ContentPage, ContentPageSample);
global.OrderCancelledSample = () => React.createElement(global.OrderCancelled, orderCancelledProps);
global.OrderCreatedSample = () => React.createElement(global.OrderCreated, orderCreatedProps);
global.OrderPaidSample = () => React.createElement(global.OrderPaid, orderPaidProps);
global.OrderPaymentSample = () => React.createElement(global.OrderPayment, orderPaymentProps);
global.OrderShowSample = () => React.createElement(global.OrderShow, orderShowProps);
global.ClientSessionNewSample = () => React.createElement(global.ClientSessionNew, clientSessionNewProps);
global.CabinetSample = () => React.createElement(global.Cabinet, cabinetProps);

global.CartPageEmpty = () => React.createElement(global.CartPage, require('test/fixtures/cart/page-empty.json'));
global.CartPageWithPackage = () => React.createElement(global.CartPage, require('test/fixtures/cart/page-with-package.json'));
global.CategoriesShowChildrenPageSample = () => React.createElement(global.CategoriesShowChildrenPage, require('test/fixtures/categoriesShowChildren/page-sample.json'));
global.CategoriesShowPageSample = () => React.createElement(global.CategoriesShowPage, require('test/fixtures/categoriesShow/page-sample.json'));

import './lib/ReactRailsUJS';
