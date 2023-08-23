;(function () {
  var _0xe3ff78 = [],
    _0x5b77c0 = {
      screen: _0x25fd5a(window.screen),
      window: _0x25fd5a(window),
      navigator: _0x25fd5a(window.navigator),
      location: _0x25fd5a(window.location),
      console: _0x25fd5a(window.console),
      documentElement: (function (_0x4ea67d) {
        try {
          var _0x5ad8d6 = {}
          _0x4ea67d = _0x4ea67d.attributes
          for (var _0x35423c in _0x4ea67d)
            (_0x35423c = _0x4ea67d[_0x35423c]),
              (_0x5ad8d6[_0x35423c.nodeName] = _0x35423c.nodeValue)
          return _0x5ad8d6
        } catch (_0x5b96d9) {
          _0xe3ff78.push(_0x5b96d9.message)
        }
      })(document.documentElement),
      document: _0x25fd5a(document),
      timezoneOffset: new Date().getTimezoneOffset(),
      closure: function () {}.toString(),
      touchEvent: document.createEvent('TouchEvent').toString(),
      tostring: _0x380d4b,
      webgl: {
        vendor: _0x3f0889.getParameter(_0x37f64c.UNMASKED_VENDOR_WEBGL),
        renderer: _0x3f0889.getParameter(_0x37f64c.UNMASKED_RENDERER_WEBGL),
      },
      proto: true,
      errors: _0xe3ff78,
    }
  try {
    function _0x25fd5a(_0x1c7db2) {
      if ('object' === typeof _0x1c7db2 && null !== _0x1c7db2) {
        var _0xdb74c8 = { _0x907c10: _0x1829a3 }
        function _0x5d8cf9(_0x907c10) {
          try {
            var _0x1829a3 = _0x1c7db2[_0x907c10]
            switch (typeof _0x1829a3) {
              case 'object':
                if (null === _0x1829a3) {
                  break
                }
              case 'function':
                _0x1829a3 = _0x1829a3.toString()
            }
          } catch (_0x5aed9b) {
            _0xe3ff78.push(_0x5aed9b.message)
          }
        }
        for (var _0x1c49ee in _0x1c7db2) _0x5d8cf9(_0x1c49ee)
        try {
          var _0x126265 = Object.getOwnPropertyNames(_0x1c7db2)
          for (_0x1c49ee = 0; _0x1c49ee < _0x126265.length; ++_0x1c49ee) {
            _0x5d8cf9(_0x126265[_0x1c49ee])
          }
          _0xdb74c8['!!'] = _0x126265
        } catch (_0xa0b36) {
          _0xe3ff78.push(_0xa0b36.message)
        }
        return _0xdb74c8
      }
    }
    try {
    } catch (_0x17643f) {
      _0xe3ff78.push(_0x17643f.message)
    }
    try {
    } catch (_0x4079f5) {
      _0xe3ff78.push(_0x4079f5.message)
    }
    try {
    } catch (_0x4be900) {
      _0xe3ff78.push(_0x4be900.message)
    }
    try {
      var _0xc1c1cc = function () {},
        _0x380d4b = 0
      _0xc1c1cc.toString = function () {
        return ++_0x380d4b, ''
      }
      console.log(_0xc1c1cc)
    } catch (_0x5e819b) {
      _0xe3ff78.push(_0x5e819b.message)
    }
    try {
      var _0x3f0889 = document.createElement('canvas').getContext('webgl'),
        _0x37f64c = _0x3f0889.getExtension('WEBGL_debug_renderer_info')
    } catch (_0x51a398) {
      _0xe3ff78.push(_0x51a398.message)
    }
    function _0x3b3375(_0x4ad774, _0x3b4e83, _0x56d382) {
      var _0x4e6f6d = _0x4ad774.prototype[_0x3b4e83]
      _0x4ad774.prototype[_0x3b4e83] = function () {}
      _0x56d382()
      _0x4ad774.prototype[_0x3b4e83] = _0x4e6f6d
    }
    try {
      _0x3b3375(Array, 'includes', function () {
        return document.createElement('video').canPlayType('video/mp4')
      })
    } catch (_0x176f5a) {}
  } catch (_0x49b0c0) {
    _0xe3ff78.push(_0x49b0c0.message)
  }
  ;(function () {
    var _0x2736c1 = document.createElement('form'),
      _0x26429a = document.createElement('input')
    _0x2736c1.method = 'POST'
    _0x2736c1.action = window.location.href
    _0x26429a.type = 'hidden'
    _0x26429a.name = 'data'
    _0x26429a.value = JSON.stringify(_0x5b77c0)
    _0x2736c1.appendChild(_0x26429a)
    document.body.appendChild(_0x2736c1)
    _0x2736c1.submit()
  })()
})()
