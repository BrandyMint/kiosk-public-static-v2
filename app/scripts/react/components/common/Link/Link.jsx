import React, { Children, Component, PropTypes } from 'react';

class Link extends Component {
  request(method, url) {
    const form = document.createElement('form');
    form.setAttribute('method', 'POST');
    form.setAttribute('action', url);

    function addField(key, value) {
      const hiddenField = document.createElement('input');
      hiddenField.setAttribute('type', 'hidden');
      hiddenField.setAttribute('name', key);
      hiddenField.setAttribute('value', value);
      form.appendChild(hiddenField);
    };

    addField('_method', method);
    document.body.appendChild(form);
    form.submit();
  }
  handleClick(ev) {
    const { href, method } = this.props;

    if (method !== 'GET') {
      ev.preventDefault();
      this.request(method, href);
    }
  }
  render() {
    const { children, href } = this.props;

    if (href) {
      return (
        <a href={href} onClick={this.handleClick.bind(this)}>
          {children}
        </a>
      );
    }

    return Children.only(children);
  }
}

Link.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.element,
  ]).isRequired,
  href: PropTypes.string.isRequired,
  method: PropTypes.string,
};
Link.defaultProps = {
  method: 'GET',
};

export default Link;