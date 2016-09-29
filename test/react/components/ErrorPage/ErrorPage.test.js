/*global describe, it */
import React from 'react';
import { expect } from 'chai';
import { render } from 'enzyme';
import ErrorPage from 'rc/ErrorPage';

describe('[Component] ErrorPage', () => {
  it('should render basic component without errors', () => {
    expect(() => render(<ErrorPage subject={"404 - Страница не найдена"} content={"Ресурс, к которому вы обратились, не был найден"} />)).not.to.throw();
  });
});
