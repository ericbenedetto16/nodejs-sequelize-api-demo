const router = require('express').Router();
const { createUser } = require('../controllers/users');

// TODO: Add Callbacks for Routes
router.route('/').post(createUser);

module.exports = router;
