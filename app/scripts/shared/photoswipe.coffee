# Photoswipe

onReady = ->
  pswp = document.querySelector('.pswp')
  items = []

  $('[ks-pswp-gallery]').each ->
    $gallertItems = $(@).find('[ks-pswp-gallery-item]')

    getItems = ->
      $gallertItems.each ->
        href = $(@).attr('href')
        size = $(@).data('size').split('x')

        item = {
          src : href
          w:    size[0]
          h:    size[1]
        }

        items.push item

      return items

    items = getItems()

    $gallertItems.each ->
      $(@).on 'click', (e) ->
        e.preventDefault()

        index = $(@).parent().index()

        options = {
          index:           index
          bgOpacity:       0.7
          showHideOpacity: true
        }

        photoswipe = new PhotoSwipe pswp, PhotoSwipeUI_Default, items, options
        photoswipe.init()

$(document).ready onReady
$(document).on 'page:load', onReady