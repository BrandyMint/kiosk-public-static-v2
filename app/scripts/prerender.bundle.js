window = undefined; // React-rails set window to this, it's unexpected behavior
React = require('react');
ReactDOM = require('react-dom');
ReactDOMServer = require('react-dom/server');
createRedux = require('redux').createRedux;
Provider = require('redux/react').Provider;
DesignReducer = require('./react/reducers/Design.prerender');
PopupReducer = require('./react/reducers/Popup');
require('./locales/numeral/ru');

var prerenderReducers = {
  design: DesignReducer,
  popup: PopupReducer,
};

global.redux = createRedux(prerenderReducers, {});

Logo = require('./react/components/Logo/LogoContainer');
ProductBlock = require('./react/components/Product/ProductBlock');
ProductCardGallery = require('./react/components/Product/ProductCard/ProductCardGallery');
ProductCard = require('./react/components/Product/ProductCard').ProductCard;
TopBanner = require('./react/components/TopBanner');
CartCoupon = require('./react/components/Cart/CartCoupon').default;
OrderCoupon = require('./react/components/Checkout/CheckoutCoupon');
Clientbar = require('./react/components/Clientbar');
OrderContainer = require('./react/components/Cart').CartContainer;
ScrollToTop = require('./react/components/ScrollToTop');
ImageSlider = require('./react/components/common/ImageSlider');
CurrencySwitcher = require('./react/components/CurrencySwitcher');
