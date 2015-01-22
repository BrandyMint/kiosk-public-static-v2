BaseStore = require './_base'

_items = []

window.BasketDispatcher.register (payload) ->
  action = payload.action

  switch action.actionType
    when 'productAddedToBasket'
      BasketStore._addItem action.productItem
      BasketStore.emitChange()
      break

    when 'receiveBasket'
      BasketStore._receiveBasket action.basketItems
      BasketStore.emitChange()
      break

window.BasketStore = _.extend new BaseStore(), {
  _items: []
  getBasketItems: ->
    @_items

  getBasketCount: ->
    total = 0
    _.forEach @_items, (item)->
      total += item.count
    return total

  _findItem: (itemToFind) ->
    index = _.findIndex @_items, (item) ->
      item.id == itemToFind.id
    return @_items[index]

  _addItem: (item)->
    foundItem = BasketStore._findItem item
    if foundItem?
      foundItem.count += 1
    else
      @_items.push item

  _receiveBasket: (items)->
    if items?
      _.forEach items, (item)->
        @basket.push item
      , basket: @_items

}