import React, { PropTypes } from 'react';

export default class CatalogFilterSelectedOptions {
  static propTypes = {
    selectedOptions: PropTypes.array.isRequired
  }
  render() {
    return (
      <li className="b-full-filter__item">
        <div className="b-full-filter__item__title">Текущий выбор</div>
        {this.renderOptions()}
      </li>
    );
  }
  renderOptions() {
    const options = this.props.selectedOptions.map((item, i) => (
      <span
        className="b-full-filter__value"
        onClick={() => this.removeOption(item.url)}
        key={i}
      >
        {item.name}
      </span>
    ));

    return (
      <div className="b-full-filter__widget">
        {options}
      </div>
    );
  }
  removeOption(url) {
    window.location = url;
  }
}