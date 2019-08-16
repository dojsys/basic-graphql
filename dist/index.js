"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _index = require("./resolvers/index");

var _graphqlYoga = require("graphql-yoga");

var _prisma = _interopRequireDefault(require("./prisma"));

var pubsub = new _graphqlYoga.PubSub();
var server = new _graphqlYoga.GraphQLServer({
  typeDefs: 'src/schema.graphql',
  resolvers: _index.resolvers,
  context: function context(request) {
    return {
      pubsub: pubsub,
      prisma: _prisma["default"],
      request: request
    };
  },
  fragmentReplacements: _index.fragmentReplacements
});
var options = {
  env: process.env.NODE_ENV,
  port: process.env.PORT || 4000,
  endpoint: '/graphql',
  subscriptions: '/subscriptions',
  playground: '/playground'
};
server.start(options, function (_ref) {
  var port = _ref.port,
      env = _ref.env;
  return console.log("Server started in ".concat(env, " mode, listening on port ").concat(port, " for incoming requests."));
});