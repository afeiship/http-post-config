'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _nextJsCore = require('next-js-core2');

var _nextJsCore2 = _interopRequireDefault(_nextJsCore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function httpCurdConfg(inApiContext, inHttp, inConfig) {
  var items = inConfig.items,
      baseUrl = inConfig.baseUrl;

  _nextJsCore2.default.each(items, function (key, item) {
    inApiContext[item] = function (inData) {
      return Http.post('' + baseUrl + item, inData);
    };
  });
};

module.exports = httpCurdConfg;
exports.default = httpCurdConfg;