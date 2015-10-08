import React, { findDOMNode, PropTypes } from 'react';
import { DOM_CHANGE } from '../../constants/globalEventKeys';

export default class TopBanner {
  static propTypes = {
    content: PropTypes.string.isRequired,
    parent: PropTypes.string,
  }
  static defaultProps = {
    parent: '.b-page__content',
  }
  constructor() {
    this.recalcSticky = this.recalcSticky.bind(this);
  }
  componentDidMount() {
    const { parent } = this.props;
    const $topBanner = $(findDOMNode(this.refs.banner));

    $topBanner.stick_in_parent({ parent });
    $(document).on(DOM_CHANGE, this.recalcSticky);
  }
  componentWillUnmount() {
    const $topBanner = $(findDOMNode(this.refs.banner));

    $topBanner.trigger('sticky_kit:detach');
    $(document).off(DOM_CHANGE, this.recalcSticky);
  }
  recalcSticky() {
    $(document.body).trigger('sticky_kit:recalc');
  }
  render() {
    return (
      <div className="top-banner" ref="banner">
        <a className="top-banner__link" href="#">
          <div className="top-banner__content">
            {this.props.content}
          </div>
        </a>
      </div>
    );
  }
}