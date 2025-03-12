const mongoose = require('mongoose');

const dbconnect = async () => {
    try {
        await mongoose.connect(process.env.DATABASE_URI, {
        });
        console.log('Connected to database');
    } catch (error) {
        console.error("Error connecting to database: " + error.message);
        process.exit(1); // Exit after logging the error
    }
};

module.exports = dbconnect;
