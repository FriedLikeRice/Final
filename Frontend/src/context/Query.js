import { gql } from '@apollo/client';

// Query to fetch user data
export const GET_USER = gql`
  query GetUser {
    user {
      id
      username
      email
      // Add other fields you want to retrieve
    }
  }
`;

// Query to check user authentication status
export const IS_LOGGED_IN = gql`
  query IsUserLoggedIn {
    isLoggedIn @client
  }
`;