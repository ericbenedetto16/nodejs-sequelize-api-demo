// Imports for Deps.
const express = require('express');
const morgan = require('morgan');
require('colors'); // Colored Console Text
require('dotenv').config(); // Use Environment Variables

// Server Init
const app = express();
app.use(express.json()); // Body Parser

if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev')); // Logger
}

// Set Up Routes
const posts = require('./routes/posts');
const users = require('./routes/users');
app.get('/ping', (req, res, next) => res.status(200).type('txt').send('ok'));
app.use('/api/v1/posts', posts);
app.use('/api/v1/users', users);

// Server Listen
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(
        `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow
            .bold
    );
});
