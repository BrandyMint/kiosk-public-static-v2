import React, { Component, PropTypes } from 'react';
import { camelize } from 'humps';
// import { Map, List } from 'immutable';

const STRING_TYPE = 'string';
const TEXTAREA_TYPE = 'textarea';

// const emptyList = List();

class CheckoutFields extends Component {
  renderItem(item, value) {
    const {
      deliveryType,
      onChange,
    } = this.props;
    const errorMessage = item.get('errorMessage', '');
    const name = item.get('name', '');
    const type = item.get('type', STRING_TYPE);
    const placeholder = item.get('placeholder', '');
    const title = item.get('title', '');
    // const isRequired = deliveryType.get('requiredFields', emptyList).includes(name);
    const reservedValue = deliveryType.getIn(['reservedFieldValues', camelize(name)]);
    const isDisabled = !!reservedValue;
    const itemId = `vendor_order_${name}`;
    const itemName = `vendor_order[${name}]`;

    let itemContent = null;
    switch(type) {
      case STRING_TYPE:
        itemContent = (
          <div className="form-group string">
            <label className="string control-label" htmlFor={itemId}>
              {title}
            </label>
            <input
              className="string form-control"
              disabled={isDisabled}
              id={itemId}
              name={itemName}
              onChange={(ev) => onChange(name, ev.target.value)}
              placeholder={placeholder}
              type="text"
              value={reservedValue || value}
            />
            {errorMessage &&
              <span className="help-block">{errorMessage}</span>
            }
          </div>
        );
        break;
      case TEXTAREA_TYPE:
        itemContent = (
          <div className="form-group text">
            <label className="text control-label" htmlFor={itemId}>
              {title}
            </label>
            <textarea
              className="text form-control"
              disabled={isDisabled}
              id={itemId}
              name={itemName}
              onChange={(ev) => onChange(name, ev.target.value)}
              placeholder={placeholder}
              value={value}
            />
            {errorMessage &&
              <span className="help-block">{errorMessage}</span>
            }
          </div>
        );
        break;
    }

    return (
      <div className="b-form__row__widget" key={name}>
        {itemContent}
      </div>
    );
  }
  render() {
    const {
      items,
      itemValues,
    } = this.props;

    return (
      <span>
        {items.map((item) => {
          const value = itemValues.getIn([item.get('name'), 'value'], null);

          return this.renderItem(item, value);
        }).valueSeq()}
      </span>
    );
  }
}

CheckoutFields.propTypes = {
  deliveryType: PropTypes.object.isRequired,
  items: PropTypes.object.isRequired,
  itemValues: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
};

CheckoutFields.defaultProps = {
};

export default CheckoutFields;
