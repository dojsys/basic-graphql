"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _getUserId = _interopRequireDefault(require("../utils/getUserId"));

var User = {
  email: {
    fragment: 'fragment userId on User { id }',
    resolve: function resolve(parent, args, _ref, info) {
      var request = _ref.request;
      var userId = (0, _getUserId["default"])(request, false);

      if (userId && userId === parent.id) {
        return parent.email;
      } else {
        return null;
      }
    }
  }
};
exports["default"] = User;