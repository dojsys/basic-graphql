"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fragmentReplacements = exports.resolvers = void 0;

var _prismaBinding = require("prisma-binding");

var _Query = _interopRequireDefault(require("./Query"));

var _Mutation = _interopRequireDefault(require("./Mutation"));

var _User = _interopRequireDefault(require("./User"));

var _Post = _interopRequireDefault(require("./Post"));

//import Subscription from './Subscription'
var resolvers = {
  Query: _Query["default"],
  Mutation: _Mutation["default"],
  //Subscription,
  User: _User["default"],
  Post: _Post["default"]
};
exports.resolvers = resolvers;
var fragmentReplacements = (0, _prismaBinding.extractFragmentReplacements)(resolvers);
exports.fragmentReplacements = fragmentReplacements;