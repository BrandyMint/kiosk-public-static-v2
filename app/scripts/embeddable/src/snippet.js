(function (window, document) {
  function load(src, cb) {
    var head = document.getElementsByTagName('head')[0];
    var script = document.createElement('script');

    cb = cb || function() {};

    script.type = 'text/javascript';
    script.async = true;
    script.src = src;
    script.onload = function () {
      this.onerror = this.onload = null;
      cb(null, script);
    };

    head.appendChild(script);
  }

  window.mrch = window.mrch || {
    widgets: {},
    registerWidget: function(name, widget) {
      this.widgets[name] = widget;
    },
  };

  mrch.showProduct = function(vendorID, productCardID, selector, config) {
    mrch.config = config = config || {};
    var node = document.querySelector(selector);

    if (node) {
      load('http://assets.kiiiosk.ru/widgets/productCard.js', function() {
        var widget = mrch.widgets['ProductCard'];

        if (widget) {
          widget.render({ productCardID: productCardID }, node);
        }
      })
    }
  };
})(window, document);