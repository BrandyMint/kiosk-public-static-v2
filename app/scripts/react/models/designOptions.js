import * as designTypes from '../constants/designTypes';

export default {
  mainPageProductsInRow: {
    type: designTypes.DESIGN_ANY_TYPE,
    name: 'designoption-mainPageProductsInRow',
    items: [
      { title: '1 ряд', value: 1 },
      { title: '2 ряда', value: 2 },
      { title: '3 ряда', value: 3 },
      { title: '4 ряда', value: 4 },
    ],
  },
  mainPageRows: {
    type: designTypes.DESIGN_SLIDER_TYPE,
    name: 'designoption-mainPageRows',
    from: 1,
    to: 20,
    step: 1,
  },
  mainPageInstagram: {
    type: designTypes.DESIGN_CHECKBOX_TYPE,
    name: 'designoption-mainPageInstagram',
  },
  mainPageSlider: {
    type: designTypes.DESIGN_CHECKBOX_TYPE,
    name: 'designoption-mainPageSlider',
  },
  mainPageBanner: {
    type: designTypes.DESIGN_CHECKBOX_TYPE,
    name: 'designoption-mainPageBanner',
  },
  mainPageFilter: {
    type: designTypes.DESIGN_CHECKBOX_TYPE,
    name: 'designoption-mainPageFilter',
  },
  categoryPageProductsInRow: {
    type: designTypes.DESIGN_ANY_TYPE,
    name: 'designoption-categoryPageProductsInRow',
    items: [
      { title: '1 ряд', value: 1 },
      { title: '2 ряда', value: 2 },
      { title: '3 ряда', value: 3 },
      { title: '4 ряда', value: 4 },
    ],
  },
  categoryPageRows: {
    type: designTypes.DESIGN_SLIDER_TYPE,
    name: 'designoption-categoryPageRows',
    from: 1,
    to: 20,
    step: 1,
  },
  categoryPageInstagram: {
    type: designTypes.DESIGN_CHECKBOX_TYPE,
    name: 'designoption-categoryPageInstagram',
  },
  categoryPageSlider: {
    type: designTypes.DESIGN_CHECKBOX_TYPE,
    name: 'designoption-categoryPageSlider',
  },
  categoryPageBanner: {
    type: designTypes.DESIGN_CHECKBOX_TYPE,
    name: 'designoption-categoryPageBanner',
  },
  categoryPageFilter: {
    type: designTypes.DESIGN_CHECKBOX_TYPE,
    name: 'designoption-categoryPageFilter',
  },
  productPagePhoto: {
    type: designTypes.DESIGN_RADIO_TYPE,
    name: 'designoption-productPagePhoto',
    items: [{
      title: 'Сверху',
      value: 'above',
    }, {
      title: 'Сбоку',
      value: 'aside',
    }],
  },
  productPageSimilarProducts: {
    type: designTypes.DESIGN_CHECKBOX_TYPE,
    name: 'designoption-productPageSimilarProducts',
  },
  logoUrl: {
    type: designTypes.DESIGN_ATTACHMENT_TYPE,
    name: 'designoption-logoUrl',
  },
  pageBgUrl: {
    type: designTypes.DESIGN_ATTACHMENT_TYPE,
    name: 'designoption-pageBgUrl',
  },
  pageBgColor: {
    type: designTypes.DESIGN_COLOR_TYPE,
    name: 'designoption-pageBgColor',
    items: [{
      title: 'Белый',
      value: '#ffffff',
    }, {
      title: 'Чёрный',
      value: '#000000',
    }, {
      title: 'Оранжевый',
      value: '#e74c3c',
    }, {
      title: 'Серый',
      value: '#6c7a89',
    }, {
      title: 'Бежевый',
      value: '#f4d3c4',
    }],
  },
  feedBgColor: {
    type: designTypes.DESIGN_COLOR_TYPE,
    name: 'designoption-feedBgColor',
    items: [{
      title: 'Белый',
      value: '#ffffff',
    }, {
      title: 'Чёрный',
      value: '#000000',
    }, {
      title: 'Салатовый',
      value: '#2ac67e',
    }, {
      title: 'Оранжевый',
      value: '#e74c3c',
    }, {
      title: 'Серый',
      value: '#c6c9cc',
    }],
  },
  feedTransparency: {
    type: designTypes.DESIGN_SLIDER_TYPE,
    name: 'designoption-feedTransparency',
    from: 0,
    to: 1,
    step: .01,
  },
  fontColor: {
    type: designTypes.DESIGN_COLOR_TYPE,
    name: 'designoption-fontColor',
    items: [{
      title: 'Белый',
      value: '#ffffff',
    }, {
      title: 'Чёрный',
      value: '#000000',
    }, {
      title: 'Салатовый',
      value: '#2ac67e',
    }, {
      title: 'Красный',
      value: '#e74c3c',
    }, {
      title: 'Серый',
      value: '#c6c9cc',
    }],
  },
  fontFamily: {
    type: designTypes.DESIGN_FONT_TYPE,
    name: 'designoption-fontfamily',
    items: [{
      title: 'Helvetica',
      value: 'helvetica',
    }, {
      title: 'PT Serif',
      value: 'ptserif',
    }, {
      title: 'PT Sans',
      value: 'ptsans',
    }, {
      title: 'Gotham Pro',
      value: 'gotham',
    }, {
      title: 'Lora',
      value: 'lora',
    }],
  },
  fontSize: {
    type: designTypes.DESIGN_FONT_SIZE_TYPE,
    name: 'designoption-fontsize',
    items: [{
      title: 'Маленький',
      value: 'sm',
    }, {
      title: 'Средний',
      value: 'md',
    }, {
      title: 'Большой',
      value: 'lg',
    }],
  },
}