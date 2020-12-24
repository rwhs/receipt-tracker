import express from 'express';
import { ApolloServer, gql } from 'apollo-server-express';

const app = express();
const port = 8000;

const typeDefs = gql`
    type Query {
        info: String!
    }
`

const resolvers = {
    Query: {
        info: () => `This is a GraphQL resolver`
    }
}

const server = new ApolloServer( {
    typeDefs,
    resolvers,
})

server.applyMiddleware({ app, path: '/graphql' });

app.listen({ port: port }, () => {
    console.log(`Apollo Server listening on port ${port}`)
})