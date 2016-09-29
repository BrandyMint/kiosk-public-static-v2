/*global describe, it */
import React from 'react';
import { expect } from 'chai';
import { render } from 'enzyme';
import BlogPost from 'rc/BlogPost';

describe('[Component] BlogPost', () => {
  it('should render basic component without errors', () => {
    expect(() => render(<BlogPost date={"2015-09-11 07:41:33 +0300"} title={"simple"} text={"simple"} prev={"simple"} next={"simple"} />)).not.to.throw();
  });
});
