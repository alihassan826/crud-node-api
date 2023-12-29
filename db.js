const mongoose = require('mongoose');

const connectDb = async () => {
    try {
        await mongoose.connect(process.env.dbUrl);

        console.log('Mongodb connected Succesfully');
    } catch (err) {
        console.log(err)
        process.exit(1);
    }
}

module.exports = connectDb;
