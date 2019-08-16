"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _require = require('./generated/prisma-client'),
    prisma = _require.prisma; // A `main` function so that we can use async/await


function main() {
  return _main.apply(this, arguments);
}

function _main() {
  _main = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee() {
    var newUser, allUsers, allPosts;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return prisma.createUser({
              name: 'Bob',
              email: 'bob@prisma.io',
              posts: {
                create: [{
                  title: 'Join us for GraphQL Conf in 2019'
                }, {
                  title: 'Subscribe to GraphQL Weekly for GraphQL news'
                }]
              }
            });

          case 2:
            newUser = _context.sent;
            console.log("Created new user: ".concat(newUser.name, " (ID: ").concat(newUser.id, ")")); // Read all users from the database and print them to the console

            _context.next = 6;
            return prisma.users();

          case 6:
            allUsers = _context.sent;
            console.log(allUsers);
            _context.next = 10;
            return prisma.posts();

          case 10:
            allPosts = _context.sent;
            console.log(allPosts);

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _main.apply(this, arguments);
}

main()["catch"](function (e) {
  return console.error(e);
});