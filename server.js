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
// ...

// Server Listen
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(
        `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow
            .bold
    );
});
