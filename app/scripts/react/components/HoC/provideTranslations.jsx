import React, { Component, PropTypes } from 'react';
import i18next from 'i18next';
import localeLanguages from '../../constants/localeLanguages';

const provideTranslations = (WrappedComponent) => {
  let i18n;

  class I18nextProvider extends Component {
    componentWillMount() {
      const locale = this.getLocale();
      const translations = this.getTranslations();

      this.i18n = i18next.createInstance({
        lng: locale,
        fallbackLng: 'ru',
        interpolationPrefix: '%{',
        interpolationSuffix: '}',
        resources: {
          [locale]: {
            translation: translations,
          }
        },
      }, () => {});
    }
    getChildContext() {
      return { i18n: this.i18n };
    }
    getLocale() {
      const { i18n } = this.props;

      if (i18n && i18n.locale) {
        return i18n.locale;
      }
      if (gon && gon.i18n && gon.i18n.locale) {
        return gon.i18n.locale;
      }

      return 'ru';
    }
    getTranslations() {
      const { i18n } = this.props;

      if (i18n && i18n.translations) {
        return i18n.translations;
      }
      if (gon && gon.i18n && gon.i18n.translations) {
        return gon.i18n.translations;
      }

      return {};
    }
    render() {
      return (
        <WrappedComponent {...this.props} ref="translatable" />
      );
    }
  }

  I18nextProvider.propTypes = {
    i18n: PropTypes.shape({
      locale: PropTypes.oneOf(localeLanguages).isRequired,
      translations: PropTypes.object.isRequired,
    }),
  };
  I18nextProvider.childContextTypes = {
    i18n: PropTypes.object.isRequired,
  };
  I18nextProvider.defaultProps = {
    i18n: {
      locale: 'ru',
      translations: {},
    },
  };

  return I18nextProvider;
};

export default provideTranslations;