// Polyfills
import './lib/console-polyfill';

// Locales
import './locales/numeral/ru';

import './shared/app';
import './shared/cart';
import './shared/load_more';
// import './shared/lightbox';
import './shared/photoswipe';
import './shared/jump';
import './shared/product_images_slider';
import './shared/application_slider';
import './shared/theme_switcher';
import './shared/mobile_navigation';
import './shared/checkout';

// TODO: Refactor and cleaning legacy shit
import './react/components/basket/button';
import './react/components/basket/popup';
import './react/components/product/add_to_basket_button';
import './react/components/instagram/instagram_feed_mixin';
import './react/components/instagram/instagram';
import './react/components/instagram/instagram_v2';
import './react/dispatchers/basket';
import './react/actions/view/basket';
import './react/stores/basket';

import CatalogFilter from './react/components/CatalogFilter';
import Userbar from './react/components/Userbar';

import KioskEvents from './react/controllers/events';
import TooltipController from './react/controllers/tooltip';

// Exposing neccessary resources outside
global.KioskEvents = KioskEvents;
global.CatalogFilter = CatalogFilter;
global.Userbar = Userbar;

new TooltipController()
import './react/application';