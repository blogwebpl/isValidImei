"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _default = function _default(imei) {
  var parity = length % 2;
  var length = imei.length;
  var sum = 0;
  var position;

  for (position = length - 1; position >= 0; position--) {
    var c = parseInt(imei.charAt(position));

    if (position % 2 === parity) {
      c *= 2;
    }

    if (c > 9) {
      c -= 9;
    }

    sum += c;
  }

  return sum % 10 === 0;
};

exports.default = _default;
//# sourceMappingURL=isValidImei.js.map