import express from 'express';
import { ApolloServer, gql } from 'apollo-server-express';
import 'reflect-metadata';
import { buildSchema } from 'type-graphql';
import cors from 'cors';

import { UserResolver } from './resolvers/user-resolver';


const app = express();
const port = 8000;

app.use(cors());

// const typeDefs = gql`
//     type Query {
//         info: String!
//     }
// `

// const resolvers = {
//     Query: {
//         info: () => `This is a GraphQL resolver`
//     }
// }

// const server = new ApolloServer( {
//     typeDefs,
//     resolvers,
// })

const main = async () => {
    const schema = await buildSchema({
        resolvers: [UserResolver],
        emitSchemaFile: true,
    });

    const server = new ApolloServer({schema});

    server.applyMiddleware({ app, path: '/graphql' });

    app.listen({ port: port }, () => {
        console.log(`Apollo Server listening on port ${port}`)
    });
}

main().catch((error) => {
    console.log(error, 'error')
})