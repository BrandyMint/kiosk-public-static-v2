import React, { Component, PropTypes } from 'react';
import ClientSessionNew from './ClientSessionNew';
import provideTranslations from 'rc/HoC/provideTranslations';
import * as schemas from 'r/schemas';

class ClientSessionNewContainer extends Component {
  render() {
    return <ClientSessionNew {...this.props} />;
  }
}

ClientSessionNewContainer.propTypes = {
  formAuthenticity: schemas.formAuthenticity.isRequired,
  t: PropTypes.func.isRequired,
  timeout: PropTypes.number,
  vendorClientSessionsPath: PropTypes.string.isRequired,
};

ClientSessionNewContainer.defaultProps = {
  timeout: 0,
};

export default provideTranslations(ClientSessionNewContainer);
