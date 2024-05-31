import { gql } from '@apollo/client';

// Define the GraphQL query
export const GET_USERS_QUERY = gql`
  query GetUsers {
    users {
      id
      username
      email
    }
  }
`;

// Example function to fetch users
export const getUsers = async (client) => {
    try {
        const { data } = await client.query({
            query: GET_USERS_QUERY,
        });
        return data.users;
    } catch (error) {
        console.error('Error fetching users:', error);
        throw new Error('Failed to fetch users');
    }
};