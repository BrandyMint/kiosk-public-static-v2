import React, { Component, PropTypes } from 'react';
import { findDOMNode } from 'react-dom';
import { getFilter } from './utils';
import { showFilteredCount } from '../../actions/catalogFilterActions';

class CatalogFilterRadio extends Component {
  state = {
    currentIndex: this.props.items.reduce((prev, item, i) => {
      return item.paramValue === this.props.value ? i : prev;
    }, 0),
  }
  getFieldName(item) {
    if (item.paramValue === this.props.default) return;

    if (this.props.filterName != null) {
      return `${this.props.filterName}[${this.props.paramName}]`;
    } else {
      return this.props.paramName;
    }
  }
  handleChange(index) {
    showFilteredCount(getFilter(this, this.props.params), this.props.t);
    this.setState({ currentIndex: index });
  }
  render() {
    const { items, title } = this.props;
    const { currentIndex } = this.state;

    return (
      <li className="b-full-filter__item">
        <div className="b-full-filter__item__title">
          {title}
        </div>
        <div className="b-full-filter__widget">
          {
            items.map((item, i) => (
              <label className="b-radio" key={i}>
                <input
                  type="radio"
                  name={this.getFieldName(item)}
                  value={item.paramValue}
                  checked={currentIndex === i}
                  className="b-radio__native"
                  onChange={this.handleChange.bind(this, i)}
                />
                <div className="b-radio__val">
                  {item.name}
                </div>
              </label>
            ))
          }
        </div>
      </li>
    );
  }
}

CatalogFilterRadio.propTypes = {
  filterName: PropTypes.string,
  items: PropTypes.array.isRequired,
  paramName: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default CatalogFilterRadio;