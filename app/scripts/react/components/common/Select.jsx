import React, { PropTypes } from 'react';

export default class Select {
  static propTypes = {
    name: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    options: PropTypes.array.isRequired,
    onChange: PropTypes.func
  }
  render() {
    return (
      <select
        name={this.props.name}
        value={this.props.value || ''}
        onChange={this.handleChange.bind(this)}
      >
        {this.props.options.map((option) =>
          <option
            key={option.value}
            value={option.value || ''}
            title={option.title}
            disabled={option.disabled}
          >
            {option.title}
          </option>
        )}
      </select>
    );
  }
  handleChange(e) {
    if (this.props.onChange) {
      let value = e.target.value === '' ? null : e.target.value;
      value = isNaN(parseInt(value)) ? value : parseInt(value);

      this.props.onChange(value);
    }
  }
}