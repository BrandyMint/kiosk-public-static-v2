import React, { addons, PropTypes } from 'react';
import Immutable from 'immutable';
import sinon from 'sinon';
import { expect } from 'chai';
import DesignSettings from '../../../../app/scripts/react/components/DesignSettings';
const { renderIntoDocument } = addons.TestUtils;

const current = {
  "mainPageProductsInRow": 2,
  "mainPageRows": 5,
  "mainPageInstagram": true,
  "mainPageSlider": false,
  "mainPageBanner": true,
  "mainPageFilter": true,
  "categoryPageProductsInRow": 2,
  "categoryPageRows": 5,
  "categoryPageInstagram": false,
  "categoryPageSlider": false,
  "categoryPageBanner": false,
  "categoryPageFilter": true,
  "productPagePhoto": "aside",
  "productPageSimilarProducts": false,
  "logoUrl": "http://assets.kiiiosk.ru/uploads/vendor/logo/5/logo.svg",
  "pageBgUrl": null,
  "pageBgColor": "#6c7a89",
  "feedBgColor": "#000000",
  "feedTransparency": 0,
  "fontColor": "#000000",
  "fontFamily": "helvetica",
  "fontSize": "md",
};

describe('[Component] DesignSettings', () => {
  it('should render without errors', () => {  
    const design = Immutable.fromJS({
      current: current,
      currentSaved: current,
      unsavedFields: {},
      isSaving: false,
    });
    const callbacks = {
      changeImage: sinon.spy(),
      changeOption: sinon.spy(),
      saveChanges: sinon.spy(),
      closeDesignSettingsPopup: sinon.spy(),
    };

    const renderedComponent = renderIntoDocument(
      <DesignSettings {...design.toObject()} {...callbacks} />
    );

    expect(renderedComponent).to.be.an('object');
  });
});