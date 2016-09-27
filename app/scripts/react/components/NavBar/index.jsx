import React, { Component, PropTypes } from 'react';
import * as schemas from 'r/schemas';
import provideTranslations from 'rc/HoC/provideTranslations';
import NavBar from './NavBar';
import Logo from 'rc/Logo';
import { Clientbar } from 'rc/Clientbar';

class NavBarContainer extends Component {
  render() {
    return <NavBar {...this.props} />;
  }
}

NavBarContainer.propTypes = {
  clientBarProps: PropTypes.shape(Clientbar.propTypes).isRequired,
  i18n: PropTypes.object,
  logoProps: PropTypes.shape(Logo.propTypes).isRequired,
  searchQuery: PropTypes.string,
  showClientBar: PropTypes.bool,
  vendor: schemas.vendor.isRequired,
  t: PropTypes.func.isRequired,
};

NavBarContainer.defaultProps = {
  clientBarProps: {},
  logoProps: {},
  vendor: {
    contacts: [],
    title: '',
    search_products_path: '',
  },
  searchQuery: '',
  showClientBar: false,
};

export default provideTranslations(NavBarContainer);
