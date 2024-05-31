import { gql } from '@apollo/client';

// Define the mutation query
export const CREATE_USER_MUTATION = gql`
   mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
            user {
                _id
                email
            }
        }
    }
`;

// Mutation to add a new user
export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
        email
      }
    }
  }
`;

// Mutation to save a book to the user's profile
export const SAVE_Subject = gql`
  mutation saveBook($SubjectkData: SubjectInput!) {
    saveSubject(SubjectkData: $SubjectkData) {
      _id
      username
      email
      saveSubject {
        SubjectId
        authors
        description
        title
        image
        link
      }
    }
  }
`;

// Mutation to remove a book from the user's profile
export const REMOVE_Subject = gql`
  mutation removeSubject($SubjectkId: ID!) {
    removeSubject(SubjectId: $SubjectId) {
      _id
      username
      email
      savedSubject {
        SubjectId
        authors
        description
        title
        image
        link
      }
    }
  }
`;