/*global $, Bugsnag, gon */

import 'es5-shim';

import './render.libs';
import './render.bundle';

import './lib/ReactRailsUJS';

import 'jquery-ujs';
import './lib/csrfToken';

import './lib/eventsHelper';
import './lib/bugsnagAjax';

if (typeof Bugsnag !== 'undefined') {
  const bugsnagScript = document.querySelector('[src$="bugsnag-2.min.js"]');

  if (bugsnagScript) {
    const appVersion = bugsnagScript.getAttribute('data-appversion');

    Bugsnag.appVersion = appVersion + process.env.APP_VERSION;
  }
  Bugsnag.releaseStage = gon.env;
  Bugsnag.notifyReleaseStages = ['production', 'reproduction', 'staging'];
  Bugsnag.metaData = { space: 'public' };
}

$(() => {
  $.ajaxSetup({ cache: true });
  $('[autosubmit]').submit();
  $('.alert:not(.coupon-info):not(.cart-info)').delay(5000).fadeOut(400);
});
