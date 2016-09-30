/*global describe, it */
import React from 'react';
import { expect } from 'chai';
import { render, mount, shallow } from 'enzyme';
import ProductSearchContainer from 'rc/ProductSearch';
import props from 'test/fixtures/productSearch/sample.json';

describe('[Component] ProductSearch', () => {
  it('should render without errors', () => {
    expect(() => render(<ProductSearchContainer {...props} />)).not.to.throw();
  });
});
