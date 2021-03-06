import React, { Component, PropTypes } from 'react';

class Checkbox extends Component {
  render() {
    return <input {...this.props} type="checkbox" />;
  }
}

Checkbox.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
};

export default Checkbox;