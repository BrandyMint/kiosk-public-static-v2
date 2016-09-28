import React, { Component, PropTypes } from 'react';

class NotFound extends Component {
  render() {
    const {
      subject,
      content,
      phone,
      email,
    } = this.props;

    return (
      <div className="b-page__content__inner b-page__content__inner_content">
        <div className="b-text b-text_center">
          <div className="lead-icon">
            <i className="icon-tools"></i>
          </div>
          <h3>{ subject }</h3>
          <p>
            { content }
            <br />
            <br />
            <a href='tel:{ phone }'>{ phone }</a>
            <span className="middot">&sdot;</span>
            <a href='mailto: { email }'>{ email }</a>
          </p>
        </div>
      </div>
    );
  }
}

NotFound.propTypes = {
  subject: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired
};

NotFound.defaultProps = {
  phone: '8(800)77-55-661',
  email: 'support@kiiiosk.ru'
};

export default NotFound;