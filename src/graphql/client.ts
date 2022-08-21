import { GraphQLClient } from 'graphql-request'

const client = new GraphQLClient(`${process.env.API_URL}/graphql`)
export default client
