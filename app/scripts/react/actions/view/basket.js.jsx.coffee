window.BasketActions =
  addItem: (item) ->
    @_addItemToServer item

  _addItemToServer: (item) ->
    goodId = item.good_id
    count = item.count

    $.ajax
      dataType: 'json'
      method:   'post'
      data:
        cart_item:
          good_id: goodId
          count: count
      url:      Routes.vendor_cart_items_path()
      error: (xhr, status, err) ->
        console.log err
      success: (good) ->
        BasketDispatcher.handleServerAction
          actionType: 'productAddedToBasket'
          productItem: good

  receiveBasket: (basketItems) ->
    BasketDispatcher.handleViewAction
      actionType: 'receiveBasket'
      basketItems: basketItems