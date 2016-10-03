/*global describe, it */
import React from 'react';
import { expect } from 'chai';
import { render, mount, shallow } from 'enzyme';
import WelcomeChildrenContainer from 'rc/WelcomeChildren';
import props from 'test/fixtures/welcomeChildren/sample.json';

describe('[Component] WelcomeChildren', () => {
  it('should render without errors', () => {
    expect(() => render(<WelcomeChildrenContainer {...props} />)).not.to.throw();
  });
});
