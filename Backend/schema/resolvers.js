const { AuthenticationError } = require('apollo-server');

const resolvers = {
    Query: {
        // Example resolver for fetching current user data
        me: (_, __, { user }) => {
            if (!user) {
                throw new AuthenticationError('Authentication required');
            }
            return user;
        }
    },
    Mutation: {
        // Example resolver for user registration
        register: async (_, { username, email, password }, { dataSources }) => {
            const user = await dataSources.userService.registerUser(username, email, password);
            return user;
        },
        // Example resolver for user login
        login: async (_, { email, password }, { dataSources }) => {
            const user = await dataSources.userService.loginUser(email, password);
            return user;
        }
    }
};

module.exports = resolvers;