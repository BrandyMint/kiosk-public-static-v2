import React, { Component, PropTypes } from 'react';
import ChildrenProducts from './ChildrenProducts';
import * as schemas from 'r/schemas';

class ChildrenProductsContainer extends Component {
  render() {
    return <ChildrenProducts {...this.props} />;
  }
}

ChildrenProductsContainer.propTypes = {
  childrenProducts: schemas.childrenProducts.isRequired,
  title: PropTypes.string,
};

ChildrenProductsContainer.defaultProps = {
  childrenProducts: [],
};

export default ChildrenProductsContainer;
