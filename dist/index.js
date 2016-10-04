(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', 'jquery'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('jquery'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.jquery);
    global.index = mod.exports;
  }
})(this, function (exports, _react, _jquery) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _jquery2 = _interopRequireDefault(_jquery);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  var Snapcode = function (_React$Component) {
    _inherits(Snapcode, _React$Component);

    function Snapcode() {
      _classCallCheck(this, Snapcode);

      var _this = _possibleConstructorReturn(this, (Snapcode.__proto__ || Object.getPrototypeOf(Snapcode)).call(this));

      _this.state = {
        svg: [],
        isCorrect: false
      };
      return _this;
    }

    _createClass(Snapcode, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        var url = 'https://crossorigin.me/https://feelinsonice-hrd.appspot.com/web/deeplink/snapcode?username=' + this.props.username + '&type=SVG';
        _jquery2.default.ajax({
          type: "GET",
          url: url,
          async: false,
          success: function (data, status, xhr) {
            this.setState({
              svg: [data.children[0].children[0].attributes[0].value, data.children[0].children[1].attributes[0].value, data.children[0].children[2].attributes[0].value]
            });
          }.bind(this)
        });
      }
    }, {
      key: 'render',
      value: function render() {
        return _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'svg',
            { height: '320',
              version: '1.1',
              viewBox: '0 0 320 320',
              width: '320',
              xmlns: 'http://www.w3.org/2000/svg' },
            _react2.default.createElement('path', { d: this.state.svg[0], fill: this.props.dotsColor ? this.props.dotsColor : "#000000" }),
            _react2.default.createElement('path', { d: this.state.svg[1], fill: this.props.backgroundColor ? this.props.backgroundColor : "#FFFC00" }),
            _react2.default.createElement('path', { d: this.state.svg[2], fill: this.props.ghostColor ? this.props.ghostColor : "#FFFFFF" })
          )
        );
      }
    }]);

    return Snapcode;
  }(_react2.default.Component);

  ;

  exports.default = Snapcode;
});