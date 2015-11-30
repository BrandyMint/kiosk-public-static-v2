window = undefined; // React-rails set window to this, it's unexpected behavior
React = require('react');
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
ProductCard = require('./react/components/Product/ProductCard').ProductCard;
TopBanner = require('./react/components/TopBanner').TopBanner;
CartCoupon = require('./react/components/Cart/CartCoupon');
OrderCoupon = require('./react/components/Order/OrderCoupon');
Clientbar = require('./react/components/Clientbar');