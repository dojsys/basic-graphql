"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var Post = {
  author: {
    resolve: function resolve(parent, args, _ref, info) {
      var prisma = _ref.prisma;
      return parent.author;
    }
  }
};
exports["default"] = Post;