import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import * as schemas from 'r/schemas';

class MenuTopDesktopSingle extends Component {
  render() {
    const {
      checkIfActive,
      item,
    } = this.props;
    const {
      id,
      title,
      url,
    } = item;
    const liClasses = classNames({
      'b-nav__item': true,
      'b-nav__item__active': checkIfActive(item),
    });

    return (
      <li 
        className={liClasses} 
        id={`menu_item_li_${id}`}
        key={`menu-item-single-${id}`}
      >
        <a
          className="b-nav__link"
          href={url}
        >
          {title}
        </a>
      </li>
    );
  }
}

MenuTopDesktopSingle.propTypes = {
  checkIfActive: PropTypes.func.isRequired,
  item: schemas.menuItem.isRequired,
};

export default MenuTopDesktopSingle;
