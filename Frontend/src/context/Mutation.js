import { gql } from '@apollo/client';

// Mutation for user registration
export const REGISTER_USER = gql`
  mutation Register($username: String!, $password: String!) {
    register(username: $username, password: $password) {
      token
    }
  }
`;

// Mutation for user login
export const LOGIN_USER = gql`
  mutation Login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      token
    }
  }
`;

// Mutation for user logout (if applicable)
export const LOGOUT_USER = gql`
  mutation Logout {
    logout {
      message
    }
  }
`;