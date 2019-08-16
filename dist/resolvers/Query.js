"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var Query = {
  publishedPosts: function publishedPosts(parent, args, _ref, info) {
    var prisma = _ref.prisma;
    var opArgs = {
      where: {
        published: true
      }
    };

    if (args.query) {
      opArgs.where = [{
        title_contains: args.query
      }];
    }

    return prisma.query.posts(opArgs, info);
  },
  post: function post(parent, args, _ref2, info) {
    var prisma = _ref2.prisma;
    return prisma.query.post({
      id: args.postId
    }, info);
  },
  postsByUser: function postsByUser(parent, args, _ref3, info) {
    var prisma = _ref3.prisma;
    return prisma.query.user({
      id: args.userId
    }, info);
  }
};
exports["default"] = Query;