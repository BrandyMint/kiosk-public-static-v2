import React, { Component, findDOMNode, PropTypes } from 'react';
import classNames from 'classnames';
import { DOM_CHANGE } from '../../constants/globalEventKeys';
import { STICKY_DETACH, STICKY_RECALC } from './TopBanner.constants';

class TopBanner extends Component {
  constructor() {
    super();
    this.recalcSticky = this.recalcSticky.bind(this);
  }
  componentDidMount() {
    const { parent } = this.props;
    const $banner = $(findDOMNode(this.refs.banner));

    $banner.stick_in_parent({ parent });
    $(document).on(DOM_CHANGE, this.recalcSticky);
  }
  componentWillUnmount() {
    const $banner = $(findDOMNode(this.refs.banner));

    $banner.trigger(STICKY_DETACH);
    $(document).off(DOM_CHANGE, this.recalcSticky);
  }
  recalcSticky() {
    $(document.body).trigger(STICKY_RECALC);
  }
  render() {
    const { content, url } = this.props;
    const contentClasses = classNames({
      'TopBanner-content': true,
      'TopBanner-content--long': this.props.content.length >= 70,
    });

    return (
      <div className="TopBanner" ref="banner">
        <a className="TopBanner-link" href={url || null}>
          <div className={contentClasses}>
            {content}
          </div>
        </a>
      </div>
    );
  }
}

TopBanner.propTypes = {
  content: PropTypes.string.isRequired,
  parent: PropTypes.string,
  url: PropTypes.string,
};
TopBanner.defaultProps = {
  parent: '.b-page__content',
};

export default TopBanner;