"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var getUserId = function getUserId(request) {
  var requireAuth = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var header = request.request ? request.request.headers.authorization : request.connection.context.Authorization;

  if (header) {
    var token = header.replace('Bearer ', '');

    var decoded = _jsonwebtoken["default"].verify(token, process.env.JWT_SECRET);

    return decoded.userId;
  }

  if (requireAuth) {
    throw new Error('Authentication required');
  }

  return null;
};

exports["default"] = getUserId;