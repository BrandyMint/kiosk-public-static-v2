// Libs configuration
import './react/libsConfigs';

// Polyfills & Shims
import './lib/console-polyfill';

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
import './shared/checkout';

// TODO: Refactor and cleaning legacy shit
import './react/components/basket/button';
import './react/components/basket/popup';
import './react/components/Product/add_to_basket_button';
import './react/components/instagram/instagram_feed_mixin';
import './react/components/instagram/instagram';
import './react/components/instagram/instagram_v2';
import './react/dispatchers/basket';
import './react/actions/view/basket';
import './react/stores/basket';

// Exposing neccessary resources outside
global.CatalogFilter = require('./react/components/CatalogFilter');
global.Userbar = require('./react/components/Userbar/UserbarContainer');
global.Logo = require('./react/components/Logo/LogoContainer');
global.ProductBlock = require('./react/components/Product/ProductBlock');
global.ProductCard = require('./react/components/Product/ProductCard');
global.TopBanner = require('./react/components/TopBanner');
global.CartCoupon = require('./react/components/Cart/CartCoupon');

import './react/application';