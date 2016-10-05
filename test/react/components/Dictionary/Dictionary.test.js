/*global describe, it */
import React from 'react';
import { expect } from 'chai';
import { render } from 'enzyme';
import dictionaryProps from 'test/fixtures/dictionary/sample';

import Dictionary from 'rc/Dictionary';

describe('[Component] Dictionary', () => {
  it('should render basic component without errors', () => {
    expect(() => render(<Dictionary {...dictionaryProps} />)).to.not.throw();
  });
});