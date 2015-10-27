import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

export default class Alert extends Component {
  static propTypes = {
    className: PropTypes.string,
    info: PropTypes.bool,
    text: PropTypes.string.isRequired,
  }
  static defaultProps = {
    info: false,
  }
  render() {
    const { className, info, text } = this.props;
    const alertClasses = classNames(className, {
      'alert': true,
      'alert-info': info,
    });

    return (
      <div className={alertClasses}>
        {text}
      </div>
    );
  }
}