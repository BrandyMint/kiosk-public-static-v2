import i18n from 'i18next';
import ErrorService from './services/Error';

// i18n
if (gon) {
  const { i18n: {locale = 'ru', translations = {}} } = gon;

  const inst = i18n.createInstance({
    lng: locale,
    fallbackLng: 'ru',
    interpolationPrefix: '%{',
    interpolationSuffix: '}',
    resources: {
      [locale]: {
        translation: translations,
      }
    }
  }, () => {});
}

// Console
// Rewrite original console.warn for detecting React's propTypes warnings
const originalWarning = console.warn;

console.warn = (warning, ...rest) => {
  if (warning && warning.indexOf('Failed propType') > -1) {
    ErrorService.notifyWarning(warning);
  }

  originalWarning.apply(console, [warning, ...rest]);
}