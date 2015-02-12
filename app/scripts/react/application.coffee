ReactUjs = require 'reactUjs'

KioskApp =

  start: (vendorKey = '') ->
    global.vendorKey = localStorage.getItem('vendorKey') || vendorKey

    console.log 'KioskApp start'
    ReactUjs.initialize()

module.exports = KioskApp