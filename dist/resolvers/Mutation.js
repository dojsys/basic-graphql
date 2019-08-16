"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var Mutation = {
  createDraft: function () {
    var _createDraft = (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee(parent, args, _ref, info) {
      var prisma;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              prisma = _ref.prisma;
              return _context.abrupt("return", prisma.mutation.createPost({
                title: args.title,
                author: {
                  connect: {
                    id: args.userId
                  }
                }
              }, info));

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    function createDraft(_x, _x2, _x3, _x4) {
      return _createDraft.apply(this, arguments);
    }

    return createDraft;
  }(),
  publish: function () {
    var _publish = (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee2(parent, args, _ref2, info) {
      var prisma;
      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              prisma = _ref2.prisma;
              return _context2.abrupt("return", prisma.mutation.updatePost({
                where: {
                  id: args.postId
                },
                data: {
                  published: true
                }
              }, info));

            case 2:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    function publish(_x5, _x6, _x7, _x8) {
      return _publish.apply(this, arguments);
    }

    return publish;
  }(),
  createUser: function () {
    var _createUser = (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee3(parent, args, _ref3, info) {
      var prisma;
      return _regenerator["default"].wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              prisma = _ref3.prisma;
              return _context3.abrupt("return", prisma.mutation.createUser({
                name: args.name
              }, info));

            case 2:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    function createUser(_x9, _x10, _x11, _x12) {
      return _createUser.apply(this, arguments);
    }

    return createUser;
  }()
};
exports["default"] = Mutation;