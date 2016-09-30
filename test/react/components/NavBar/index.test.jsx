/*global describe, it */
import React from 'react';
import { expect } from 'chai';
import { render, shallow } from 'enzyme';
import navBarPropsSample from 'test/fixtures/navBar/sample';
import NavBarContainer from 'rc/NavBar';
import NavBar from 'rc/NavBar/NavBar';
import NavBarContacts from 'rc/NavBar/NavBarContacts';
import ProductSearchForm from 'rc/common/ProductSearchForm';
import { Clientbar } from 'rc/Clientbar';
import t from 'test/mocks/t';

const props = { ...navBarPropsSample, t };

describe('[Component] NavBar', () => {
  it('should render without errors', () => {
    expect(() => render(<NavBarContainer {...props} />)).not.to.throw();
  });

  it('should not render `Clientbar` when showClientBar is false', () => {
    expect(
      shallow(<NavBar {...props} showClientBar={false} />)
      .find(Clientbar)
    ).to.have.length(0);
  });

  it('should render `Clientbar` when showClientBar is true', () => {
    expect(
      shallow(<NavBar {...props} showClientBar />)
      .find(Clientbar)
    ).to.have.length(1);
  });

  it('NavBarContacts should render exact number of contacts recieved', () => {
    const {
      contacts,
      title,
    } = props.vendor;

    expect(
      render(<NavBarContacts vendorContacts={contacts} vendorTitle={title} />)
      .find('li')
    ).to.have.length(3);
  });

  it('should render ProductSearchForm inside', () => {
    expect(
      shallow(<NavBar {...props} />)
        .find(ProductSearchForm)
    ).to.have.length(1);
  });
});
