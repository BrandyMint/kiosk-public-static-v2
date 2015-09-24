import React, { PropTypes } from 'react';
import { List } from 'immutable';
import classNames from 'classnames';
import tinycolor from 'tinycolor2';
import * as designTypes from '../../constants/designTypes';

export default class DesignSettingsRadioList {
  static propTypes = {
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    items: PropTypes.array.isRequired,
    onChange: PropTypes.func.isRequired
  }
  render() {
    const listItems = this.props.items.map(::this.renderItem);
    return <span>{listItems}</span>;
  }
  renderItem(item) {
    return <DesignSettingsRadioListItem {...this.getItemProps(item)} />;
  }
  getItemProps(item) {
    const props = {
      name: this.props.name,
      checked: this.props.value === item.value,
      onChange: this.props.onChange.bind(this, item.value),
      key: this.props.name + '-' + item.value
    };

    switch(this.props.type) {
      case designTypes.DESIGN_COLOR_TYPE:
        return {
          ...props,
          className: classNames('radiobtn--circle', {
            'radiobtn--light': tinycolor(item.value).isLight()
          }),
          style: { backgroundColor: item.value },
        };
      case designTypes.DESIGN_FONT_TYPE:
        return {
          ...props,
          className: 'radiobtn--font radiobtn--font-' + item.value,
          text: 'Aa',
        };
      case designTypes.DESIGN_FONT_SIZE_TYPE:
        return {
          ...props,
          className: 'radiobtn--font radiobtn--fontsize-' + item.value,
          text: 'Aa',
        };
      case designTypes.DESIGN_RADIO_TYPE:
        return {
          ...props,
          className: 'radiobtn--default',
          text: item.title,
        };
      default:
        return {
          ...props,
          className: 'radiobtn--circle',
          text: item.value,
        };
    }
  }
}

class DesignSettingsRadioListItem {
  static propTypes = {
    name: PropTypes.string.isRequired,
    text: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    style: PropTypes.object,
    checked: PropTypes.bool.isRequired,
    className: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
  }
  render() {
    return (
      <label className={classNames('radiobtn', this.props.className)}>
        <input
          type="radio"
          name={this.props.name}
          checked={this.props.checked}
          className="radiobtn__input"
          onChange={this.props.onChange}
        />
        <span
          className="radiobtn__ind"
          style={this.props.style}
        >
          {this.props.text}
        </span>
      </label>
    );
  }
}