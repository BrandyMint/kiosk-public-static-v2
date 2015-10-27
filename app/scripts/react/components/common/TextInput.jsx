import React, { Component, PropTypes } from 'react';

export default class TextInput extends Component {
  static propTypes = {
    className: PropTypes.string,
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
  }
  render() {
    return (
      <input {...this.props} type="text" />
    );
  }
}