const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI, 
            {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        // console.log('Database connected');
    } catch (error) {
        console.log(error);
    }
}

module.exports = connect;