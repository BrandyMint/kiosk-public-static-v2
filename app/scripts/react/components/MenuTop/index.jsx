import React, { Component, PropTypes } from 'react';
import * as schemas from 'r/schemas';
import MenuTopDesktop from './MenuTopDesktop';
import MenuTopMobile from './MenuTopMobile';
import provideTranslations from 'rc/HoC/provideTranslations';
import Sticky from 'react-stickynode';

class MenuTop extends Component {
  render() {
    const {
      activeItems,
      hasClientCabinet,
      items,
      t,
      vendorCabinetPath,
      isMenuTopDesktopSticky
    } = this.props;

    return (
      <div>
        <Sticky
          enabled={isMenuTopDesktopSticky}
          top=".top-banner"
          innerZ={500}
          activeClass="sticky-active"
        >
          <MenuTopDesktop
            activeItems={activeItems}
            items={items}
          />
        </Sticky>
        <MenuTopMobile
          hasClientCabinet={hasClientCabinet}
          items={items}
          t={t}
          vendorCabinetPath={vendorCabinetPath}
        />
      </div>
    );
  }
}

MenuTop.propTypes = {
  activeItems: PropTypes.arrayOf(schemas.menuItem).isRequired,
  hasClientCabinet: PropTypes.bool,
  items: PropTypes.arrayOf(schemas.menuItem).isRequired,
  t: PropTypes.func.isRequired,
  vendorCabinetPath: PropTypes.string,
  isMenuTopDesktopSticky: PropTypes.bool
};

MenuTop.defaultProps = {
  isMenuTopDesktopSticky: false
};

export default provideTranslations(MenuTop);
