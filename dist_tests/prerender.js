require('../dist/scripts/public.prerender.development');

const logoProps = {
  'linkUrl': 'http://wannabe.vagrant.dev:3000',
  'logoText': 'Wannabe Jewelry Moscow',
  'imageAlt': 'Wannabe Jewelry Moscow',
  'logoUrl': null,
};

global.ReactDOMServer.renderToString(global.React.createElement(global.Logo, logoProps));
global.ReactDOMServer.renderToString(global.React.createElement(global.ProductBlock, require('../test/fixtures/productBlock/sample.json')));
global.ReactDOMServer.renderToString(global.React.createElement(global.ProductCard, require('../test/fixtures/products/22983.json')));
global.ReactDOMServer.renderToString(global.React.createElement(global.CartContainer, require('../test/fixtures/cart/with-package.json')));
global.ReactDOMServer.renderToString(global.React.createElement(global.CartContainer, require('../test/fixtures/cart/select-package.json')));
global.ReactDOMServer.renderToString(global.React.createElement(global.OrderContainer, require('../test/fixtures/order/with-coupon.json')));
global.ReactDOMServer.renderToString(global.React.createElement(global.WishlistContainer, require('../test/fixtures/wishlist/synteticData.json')));
global.ReactDOMServer.renderToString(global.React.createElement(global.MenuTop, require('../test/fixtures/menuTop/sample1.json')));
global.ReactDOMServer.renderToString(global.React.createElement(global.MenuBottom, require('../test/fixtures/menuBottom/sample.json')));
global.ReactDOMServer.renderToString(global.React.createElement(global.NavBar, require('../test/fixtures/navBar/sample.json')));
global.ReactDOMServer.renderToString(global.React.createElement(global.ProductList, require('../test/fixtures/productList/sample.json')));
global.ReactDOMServer.renderToString(global.React.createElement(global.CategoriesShow, require('../test/fixtures/categoriesShow/sample.json')));
global.ReactDOMServer.renderToString(global.React.createElement(global.CategoriesShowChildren, require('../test/fixtures/childrenProducts/sample.json')));
global.ReactDOMServer.renderToString(global.React.createElement(global.PostProducts, { title: 'a', postProductsText: '<p>b</p>' }));
global.ReactDOMServer.renderToString(global.React.createElement(global.DictionaryEntitiesShow, require('../test/fixtures/dictionaryEntitiesShow/sample.json')));
global.ReactDOMServer.renderToString(global.React.createElement(global.ProductArchived, require('../test/fixtures/productArchived/sample.json')));
global.ReactDOMServer.renderToString(global.React.createElement(global.WelcomeChildren, require('../test/fixtures/welcomeChildren/sample.json')));

console.log('Prerendering public components test finished successfully');
