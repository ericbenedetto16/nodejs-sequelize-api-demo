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
// TODO: Import and Setup Routes
app.get('/ping', (req, res, next) => res.status(200).send('ok'));

const users = require('./routes/users');
app.use('/api/v1/users', users);

const posts = require('./routes/posts');
app.use('/api/v1/posts', posts);

// Server Listen
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(
        `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow
            .bold
    );
});
