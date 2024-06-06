const { gql } = require('apollo-server');

const typeDefs = gql`
  type User {
    id: ID!
    username: String!
    email: String!
    # Add other fields as needed
  }

  type Query {
    me: User # Example query to fetch current user data
    # Add other queries here
  }

  type Mutation {
    register(username: String!, email: String!, password: String!): User # Mutation for user registration
    login(email: String!, password: String!): User # Mutation for user login
    # Add other mutations here
  }
`;

module.exports = typeDefs;