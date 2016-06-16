"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FooterSmall = (function (_React$Component) {
  _inherits(FooterSmall, _React$Component);

  function FooterSmall() {
    _classCallCheck(this, FooterSmall);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(FooterSmall).apply(this, arguments));
  }

  _createClass(FooterSmall, [{
    key: "render",
    value: function render() {
      var currentYear = new Date().getFullYear();
      return _react2.default.createElement(
        "footer",
        { className: "nib-footer nib-footer--small" },
        _react2.default.createElement(
          "div",
          { className: "nib-footer__body" },
          _react2.default.createElement(
            "div",
            { className: "nib-footer__copyright" },
            _react2.default.createElement(
              "div",
              { className: "nib-footer__copyright-text" },
              "Copyright ",
              _react2.default.createElement(
                "span",
                null,
                "©"
              ),
              " ",
              currentYear,
              " nib health funds limited ABN 83 000 124 381"
            ),
            _react2.default.createElement(
              "nav",
              { id: "ga-footer-copyright-links", className: "nib-footer__copyright-links" },
              _react2.default.createElement(
                "a",
                { className: "nib-footer__copyright-link", id: "ga-footer-fund-rules", href: "https://www.nib.com.au/health-information/content/assets/pdf/nib-fund-rules.pdf" },
                "Fund Rules"
              ),
              _react2.default.createElement(
                "a",
                { className: "nib-footer__copyright-link", id: "ga-footer-terms", href: "https://www.nib.com.au/legal/terms-and-conditions" },
                "Terms & Conditions"
              ),
              _react2.default.createElement(
                "a",
                { className: "nib-footer__copyright-link", id: "ga-footer-privacy", href: "https://www.nib.com.au/legal#privacy" },
                "Privacy Policy"
              ),
              _react2.default.createElement(
                "a",
                { className: "nib-footer__copyright-link", id: "ga-footer-code-conduct", href: "https://www.nib.com.au/legal#codeofconduct" },
                "Code of Conduct"
              ),
              _react2.default.createElement(
                "a",
                { className: "nib-footer__copyright-link nib-footer__copyright-link--phone-number", id: "ga-footer-call-mobile", href: "tel:131642" },
                _react2.default.createElement("i", { "class": "v2-icon v2-icon--phone" }),
                "13 16 42"
              )
            )
          )
        )
      );
    }
  }]);

  return FooterSmall;
})(_react2.default.Component);

exports.default = FooterSmall;
//# sourceMappingURL=index.js.map