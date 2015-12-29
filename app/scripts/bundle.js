// Polyfills & Shims
import './lib/console-polyfill';

// Libs configuration
import './react/libsConfigs';

// Locales
import './locales/numeral/ru';

import './shared/app';
import './shared/cart';
import './shared/load_more';
import './shared/lightbox';
import './shared/jump';
import './shared/application_slider';
import './shared/theme_switcher';
import './shared/mobile_navigation';

// TODO: Refactor and cleaning legacy shit
import './react/components/Product/add_to_basket_button';
import './react/dispatchers/basket';
import './react/actions/view/basket';
import './react/stores/basket';

// Exposing neccessary resources outside
global.CatalogFilter = require('./react/components/CatalogFilter').CatalogFilter;
global.Userbar = require('./react/components/Userbar').UserbarContainer;
global.Clientbar = require('./react/components/Clientbar').Clientbar;
global.Logo = require('./react/components/Logo/LogoContainer');
global.ProductBlock = require('./react/components/Product/ProductBlock');
global.ProductCard = require('./react/components/Product/ProductCard').ProductCard;
global.TopBanner = require('./react/components/TopBanner');
global.CartCoupon = require('./react/components/Cart/CartCoupon');
global.OrderCoupon = require('./react/components/Checkout/CheckoutCoupon');
global.OrderContainer = require('./react/components/Order').OrderContainer;
global.CartContainer = require('./react/components/Cart').CartContainer;
global.InstagramContainer = require('./react/components/Instagram').InstagramContainer;
global.ScrollToTop = require('./react/components/ScrollToTop');
global.ImageSlider = require('./react/components/common/ImageSlider');

import './react/application';