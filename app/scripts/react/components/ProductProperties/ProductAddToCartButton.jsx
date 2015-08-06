import React, { PropTypes } from 'react';

export default class ProductAddToCartButton {
  static propTypes = {
    hasGood: PropTypes.bool.isRequired,
    disabled: PropTypes.bool.isRequired
  }
  render() {
    return (
      <button type="submit" className="b-btn" disabled={this.props.disabled}>
        {this.props.hasGood ? 'В корзину' : 'Укажите больше характеристик'}
      </button>
    );
  }
}

// window.AddToBasketButton = React.createClass
//   propTypes:
//     elementQuery: React.PropTypes.string
//     dataAttr:     React.PropTypes.string

//   getDefaultProps: ->
//     elementQuery: '[good-select] option:selected'
//     dataAttr:      'good'

//   addToBasket: ->
//     good = $(@props.elementQuery).data @props.dataAttr
//     if good?
//       BasketActions.addGood good
//     else
//       alert "Ошибка при добавлении товара в корзину. Нет атрибута good в выбранном пункте"
  
//   render: ->
//     return <button className="b-btn" onClick={this.addToBasket}>В корзину</button>
