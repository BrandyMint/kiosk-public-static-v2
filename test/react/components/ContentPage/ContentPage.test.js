/*global describe, it */
import React from 'react';
import { expect } from 'chai';
import { render } from 'enzyme';
import contentPageProps from 'test/fixtures/contentPage/sample';

import ContentPage from 'rc/ContentPage';

describe('[Component] ContentPage', () => {
  it('should render basic component without errors', () => {
    expect(() => render(<ContentPage {...contentPageProps} />)).to.not.throw();
  });
});