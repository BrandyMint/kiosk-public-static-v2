###* @jsx React.DOM ###

window.AddToBasketButton = React.createClass
  propTypes:
    count:              React.PropTypes.number

  getDefaultProps: ->
    count: 1

  addToBasket: (e) ->
    e.preventDefault()
    e.stopPropagation()
    good_id = $('@good_id').val()
    if good_id?
        BasketActions.addItem {good_id: good_id, count: @props.count}

  render: ->
    return `<button className="b-btn" onClick={this.addToBasket}>В корзину</button>`