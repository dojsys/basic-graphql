"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var User = {
  posts: {
    resolve: function resolve(parent, args, _ref, info) {
      var prisma = _ref.prisma;
      return prisma.query.posts({
        where: {
          user: {
            id: parent.id
          }
        }
      });
    }
  }
};
exports["default"] = User;