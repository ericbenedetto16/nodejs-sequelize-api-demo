const bcrypt = require('bcrypt');
const { users } = require('../models/');
require('colors');

// @desc    Create a User
// @route   POST /api/v1/users/
// @access  Public
exports.createUser = async (req, res, next) => {
    try {
        // TODO: Query Database Here
        // ...
    } catch (err) {
        console.log(`${err}`.red.bold);
        res.status(500).json({ success: false, msg: 'Internal Server Error' });
    }
};
