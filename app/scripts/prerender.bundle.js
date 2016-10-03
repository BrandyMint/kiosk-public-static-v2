window = undefined; // React-rails set window to this, it's unexpected behavior
React = require('react');
ReactDOM = require('react-dom');
ReactDOMServer = require('react-dom/server');
createStore = require('redux').createStore;
combineReducers = require('redux').combineReducers;
Provider = require('react-redux').Provider;
DesignReducer = require('./react/reducers/Design.prerender');
PopupReducer = require('./react/reducers/Popup');
CartReducer = require('./react/reducers/cart').default;
PackagesReducer = require('./react/reducers/packages').default;
require('./locales/numeral/ru');

var prerenderReducers = combineReducers({
  cart: CartReducer,
  packages: PackagesReducer,
  design: DesignReducer,
  popup: PopupReducer,
});

global.redux = createStore(prerenderReducers, {});

Logo = require('./react/components/Logo/LogoContainer');
ProductBlock = require('./react/components/Product/ProductBlock');
ProductCard = require('./react/components/Product/ProductCard').ProductCard;
TopBanner = require('./react/components/TopBanner');
CartContainer = require('./react/components/Cart');
CartCoupon = require('./react/components/Cart/CartCoupon').default;
OrderCoupon = require('./react/components/Checkout/CheckoutCoupon');
Clientbar = require('./react/components/Clientbar');
OrderContainer = require('./react/components/Order');
ScrollToTop = require('./react/components/ScrollToTop');
ImageSlider = require('./react/components/common/ImageSlider');
CurrencySwitcher = require('./react/components/CurrencySwitcher');
LocaleSwitcher = require('./react/components/LocaleSwitcher');
Pagination = require('./react/components/Pagination').default;
WishlistContainer = require('./react/components/Wishlist');
MenuTop = require('./react/components/MenuTop');
MenuBottom = require('./react/components/MenuBottom');
NavBar = require('./react/components/NavBar');
ProductList = require('./react/components/ProductList');
ProductGroup = require('./react/components/ProductGroup');
ChildrenProducts = require('./react/components/ChildrenProducts');
CategoriesShow = require('./react/components/CategoriesShow');
ErrorPage = require('./react/components/ErrorPage');
CategoriesShowChildren = require('./react/components/CategoriesShowChildren');
PostProducts = require('./react/components/common/PostProducts');
DictionaryEntitiesShow = require('./react/components/DictionaryEntitiesShow');
ProductArchived = require('./react/components/ProductArchived');
WelcomeChildren = require('./react/components/WelcomeChildren');
