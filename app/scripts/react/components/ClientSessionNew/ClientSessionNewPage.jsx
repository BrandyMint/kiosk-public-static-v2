import React, { Component, PropTypes } from 'react';
import VendorLayoutContainer from 'rc/VendorLayout';
import ClientSessionNewContainer from './index';
import * as schemas from 'r/schemas';

class ClientSessionNewPage extends Component {
  render() {
    const {
      formAuthenticity,
      i18n,
      layoutProps,
      timeout,
      vendorClientSessionsPath,
    } = this.props;

    return (
      <VendorLayoutContainer {...layoutProps} i18n={i18n}>
        <ClientSessionNewContainer {...{
          formAuthenticity,
          i18n,
          timeout,
          vendorClientSessionsPath,
        }}
        />
      </VendorLayoutContainer>
    );
  }
}

ClientSessionNewPage.propTypes = {
  formAuthenticity: schemas.formAuthenticity.isRequired,
  i18n: PropTypes.object,
  layoutProps: PropTypes.shape(...VendorLayoutContainer.propTypes).isRequired,
  timeout: PropTypes.number,
  vendorClientSessionsPath: PropTypes.string.isRequired,
};

export default ClientSessionNewPage;
