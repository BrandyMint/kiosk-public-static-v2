import React, { PropTypes } from 'react';
import tinycolor from 'tinycolor2';
import classNames from 'classnames';

export default class RadioColor {
  static propTypes = {
    name: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    options: PropTypes.array.isRequired,
    onChange: PropTypes.func
  }
  render() {
    return (
      <span>
        {this.props.options.map(this.renderOption.bind(this))}
      </span>
    );
  }
  renderOption(option) {
    const { value, title, color, image_url, disabled } = option;
    const optionClasses = classNames('radiobtn', 'radiobtn--color', {
      'radiobtn--light': tinycolor(color).isLight(),
      '__disabled': disabled
    });

    let indStyles;
    if (image_url) {
      indStyles = { backgroundImage: `url("${image_url}")` };
    } else {
      indStyles = { backgroundColor: color };
    }

    return (
      <label
        key={value}
        data-tooltip={title}
        className={optionClasses}
      >
        <input
          type="radio"
          name={this.props.name}
          checked={value === this.props.value}
          disabled={disabled}
          className="radiobtn__input"
          onChange={this.handleChange.bind(this, value)}
        />
        <span style={indStyles} className="radiobtn__ind" />
      </label>
    );
  }
  handleChange(value) {
    if (this.props.onChange) {
      this.props.onChange(value);
    }
  }
}