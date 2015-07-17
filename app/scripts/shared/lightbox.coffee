# Lightbox
$ ->
  isTouch = 'ontouchstart' of document.documentElement

  initSwipe = ->
    if isTouch
      $('.fancybox-nav').css 'display', 'none'
      $('.fancybox-wrap').swipe
        swipe: (event, direction) ->
          if direction == 'left' or direction == 'up'
            $.fancybox.next direction
          else
            $.fancybox.prev direction

  destroySwipe = ->
    $('.fancybox-wrap').swipe 'destroy' if isTouch

  $('[lightbox]').fancybox
    padding: 0
    margin: 0
    helpers: {
      thumbs: {
        width: 8
        height: 8
      }
    }
    tpl: {
      closeBtn: '<a title="Close" class="fancybox-item fancybox-close" href="javascript:;"><i></i></a>'
      next: '<a title="Next" class="fancybox-nav fancybox-next" href="javascript:;"><i></i></a>'
      prev: '<a title="Previous" class="fancybox-nav fancybox-prev" href="javascript:;"><i></i></a>'
    }
    afterShow: ->
      initSwipe()
    beforeChange: ->
      destroySwipe()
    beforeClose: ->
      destroySwipe()
