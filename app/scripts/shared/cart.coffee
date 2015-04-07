$ ->
  $cartTotal = $ '[cart-total]'

  setCartItemCount = ($el, count) ->
    price = + $el.data 'item-price'
    total = price*count

    $el.data 'item-total-price', total

    $price_el = $el.find '[cart-item-total-price]'
    $price_el.html accounting.formatMoney total

    $selector = $el.find '[cart-item-selector]'
    $selector.val count

    updateCartTotal()

  selectedPackage = ->
    $('[data-package]:checked')

  packagePrice = ->
    $p = selectedPackage()

    if $p
      $p.data('price')
    else
      0

  updateCartTotal = ->
    totalPrice = packagePrice()
    $('[cart-item]').each (idx, block) ->
      totalPrice += + $(block).data('item-total-price')

    $cartTotal.html accounting.formatMoney totalPrice

  updatePackageTotal = ->
    price = packagePrice()

    price = if price>0
      accounting.formatMoney price
    else
      ''
    $('[data-total-package-price]').html price

  updatePackage = (url, value)->
    $.ajax
      url: url
      method: 'post'
      async: false
      data:
        cart:
          package_good_global_id: value

  $('[data-package]').on 'change', ->
    updatePackageTotal()
    updateCartTotal()

  $('[data-package-add-btn]').on 'click', (e)->
    e.preventDefault()
    packageInput = selectedPackage()
    if packageInput.length
      updatePackage $(this).data('url'), packageInput.val()

  $('[data-package-remove-btn]').on 'click', (e)->
    e.preventDefault()
    updatePackage $(this).data('url'), ''

  $('[cart-item-selector]').on 'change', ->
    $e = $ @
    $el = $e.closest '[cart-item]'

    setCartItemCount $el, parseInt($e.val())
