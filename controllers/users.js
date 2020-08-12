const bcrypt = require('bcrypt');
const { users } = require('../models/');
require('colors');

// @desc    Create a User
// @route   POST /api/v1/users/
// @access  Public
exports.createUser = async (req, res, next) => {
    try {
        // TODO: Query Database Here
        const { email, password } = req.body;

        const now = Date.now();

        const salt = await bcrypt.genSalt(10);
        const pwd = await bcrypt.hash(password, salt);

        const user = await users.create({
            email,
            password: pwd,
            created: now,
            updated: now,
        });

        res.status(200).json({ success: true, user });
    } catch (err) {
        console.log(`${err}`.red.bold);
        res.status(500).json({ success: false, msg: 'Internal Server Error' });
    }
};
