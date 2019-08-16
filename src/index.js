import { resolvers, fragmentReplacements } from './resolvers/index'
import { GraphQLServer, PubSub } from 'graphql-yoga'
import prisma from './prisma'

const pubsub = new PubSub()

const server = new GraphQLServer({
    typeDefs: 'src/schema.graphql',
    resolvers,
    context(request) {
        return {
            pubsub,
            prisma,
            request
        }
    },
    fragmentReplacements
})

const options = {
    env: process.env.NODE_ENV,
    port: process.env.PORT || 4000,
    endpoint: '/graphql',
    subscriptions: '/subscriptions',
    playground: '/playground',
  }

server.start(options, ({ port, env }) =>
  console.log(
    `Server started in ${env} mode, listening on port ${port} for incoming requests.`,
  ),
)