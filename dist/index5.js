"use strict";

var _require = require('./generated/prisma-client'),
    prisma = _require.prisma;

var _require2 = require('graphql-yoga'),
    GraphQLServer = _require2.GraphQLServer;

var resolvers = {
  Query: {
    publishedPosts: function publishedPosts(root, args, context) {
      return context.prisma.posts({
        where: {
          published: true
        }
      });
    },
    post: function post(root, args, context) {
      return context.prisma.post({
        id: args.postId
      });
    },
    postsByUser: function postsByUser(root, args, context) {
      return context.prisma.user({
        id: args.userId
      }).posts();
    }
  },
  Mutation: {
    createDraft: function createDraft(root, args, context) {
      return context.prisma.createPost({
        title: args.title,
        author: {
          connect: {
            id: args.userId
          }
        }
      });
    },
    publish: function publish(root, args, context) {
      return context.prisma.updatePost({
        where: {
          id: args.postId
        },
        data: {
          published: true
        }
      });
    },
    createUser: function createUser(root, args, context) {
      return context.prisma.createUser({
        name: args.name
      });
    }
  },
  User: {
    posts: function posts(root, args, context) {
      return context.prisma.user({
        id: root.id
      }).posts();
    }
  },
  Post: {
    author: function author(root, args, context) {
      return context.prisma.post({
        id: root.id
      }).author();
    }
  }
};
var server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers: resolvers,
  context: {
    prisma: prisma
  }
});
var options = {
  port: 4000,
  endpoint: '/graphql',
  subscriptions: '/subscriptions',
  playground: '/playground'
};
server.start(options, function (_ref) {
  var port = _ref.port;
  return console.log("Server started, listening on port ".concat(port, " for incoming requests."));
});