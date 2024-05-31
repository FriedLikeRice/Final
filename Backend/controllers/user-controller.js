// Import user model
const { saveSubject, deleteSubject } = require('../../client/src/utils/api');
const { User } = require('../models');
// Import sign token function from auth
const { signToken } = require('../utils/auth');

module.exports = {
    // Get a single user by either their id or their username
    async getSingleUser({ user = null, params }, res) {
        try {
            const foundUser = await User.findOne({
                $or: [{ _id: user ? user._id : params.id }, { username: params.username }],
            });

            if (!foundUser) {
                return res.status(400).json({ message: 'Cannot find a user with this id!' });
            }

            res.json(foundUser);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'An error occurred while retrieving user information.' });
        }
    },

    // Create a user, sign a token, and send it back (to client/src/components/SignUpForm.js)
    async createUser({ body }, res) {
        try {
            const user = await User.create(body);

            if (!user) {
                return res.status(400).json({ message: 'Something is wrong!' });
            }
            const token = signToken(user);
            res.json({ token, user });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'An error occurred while creating the user.' });
        }
    },

    // Login a user, sign a token, and send it back (to client/src/components/LoginForm.js)
    async login({ body }, res) {
        try {
            const user = await User.findOne({ $or: [{ username: body.username }, { email: body.email }] });
            if (!user) {
                return res.status(400).json({ message: "Can't find this user" });
            }

            const correctPw = await user.isCorrectPassword(body.password);

            if (!correctPw) {
                return res.status(400).json({ message: 'Wrong password!' });
            }
            const token = signToken(user);
            res.json({ token, user });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'An error occurred while logging in.' });
        }
    },

    // Save a subject to a user's `savedSubjects` field by adding it to the set (to prevent duplicates)
    async saveSubject({ user, body }, res) {
        try {
            const updatedUser = await User.findOneAndUpdate(
                { _id: user._id },
                { $addToSet: { savedSubjects: body } },
                { new: true, runValidators: true }
            );
            if (!updatedUser) {
                return res.status(404).json({ message: "Couldn't find user with this id!" });
            }
            return res.json(updatedUser);
        } catch (err) {
            console.error(err);
            return res.status(400).json({ message: 'An error occurred while saving the subject.' });
        }
    },

    // Remove a subject from `savedSubjects`
    async deleteSubject({ user, params }, res) {
        try {
            const updatedUser = await User.findOneAndUpdate(
                { _id: user._id },
                { $pull: { savedSubjects: { subjectId: params.subjectId } } },
                { new: true }
            );
            if (!updatedUser) {
                return res.status(404).json({ message: "Couldn't find user with this id!" });
            }
            return res.json(updatedUser);
        } catch (err) {
            console.error(err);
            return res.status(400).json({ message: 'An error occurred while deleting the subject.' });
        }
    },
};
