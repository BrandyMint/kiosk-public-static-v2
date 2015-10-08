import React, { Component, PropTypes } from 'react';
import Cookies from 'cookies-js';
import store from 'store';
import { bindActionCreators } from 'redux';
import { connect } from 'redux/react';
import connectToRedux from '../HoC/connectToRedux';
import * as designActions from '../../actions/designActions';
import * as popupActions from '../../actions/popupActions';
import * as storageKeys from '../../constants/storageKeys';
import * as cookieKeys from '../../constants/cookieKeys';
import { DOM_CHANGE } from '../../constants/globalEventKeys';
import DesignSettings from '.';

@connect((state) => ({
  design: state.design,
  popups: state.popup.get('popups')
}))
class DesignSettingsContainer {
  static propTypes = {
    authUrl: PropTypes.string.isRequired,
    categoryPageUrl: PropTypes.string.isRequired,
    design: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired,
    pageType: PropTypes.string.isRequired,
    productPageUrl: PropTypes.string.isRequired,
  }
  componentDidUpdate() {
    const isOpened = this.isOpened(this.props);

    if (isOpened) {
      store.set(storageKeys.DESIGN_CURRENT, this.props.design.toJS().current);
    } else {
      store.remove(storageKeys.DESIGN_CURRENT);
    }

    this.updatePageClass(isOpened);
    Cookies.set(cookieKeys.DESIGN_IS_OPEN, isOpened);
  }
  isOpened(props) {
    return props.popups.some((popup) => (
      popup.get('style') === 'DesignSettings'
    ));
  }
  updatePageClass(isOpened) {
    if (isOpened) {
      $('.b-page').addClass('b-page--design-settings');
    } else {
      $('.b-page').removeClass('b-page--design-settings');
    }
    $(document).trigger(DOM_CHANGE);
  }
  onItemClick(type, url) {
    if (url && type && this.props.pageType !== type) {
      window.location = url;
    }
  }
  render() {
    const {
      authUrl, categoryPageUrl, design, dispatch, pageType, productPageUrl
    } = this.props;

    if (this.isOpened(this.props)) {
      return (
        <DesignSettings
          {...design.toObject()}
          {...bindActionCreators({...designActions, ...popupActions}, dispatch)}
          authUrl={authUrl}
          categoryPageUrl={categoryPageUrl}
          onItemClick={this.onItemClick.bind(this)}
          pageType={pageType}
          productPageUrl={productPageUrl}
        />
      );
    }
    return null;
  }
}

export default connectToRedux(DesignSettingsContainer);