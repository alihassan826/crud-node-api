const express = require('express')
const app = express();

require('dotenv').config();

const connectDb = require('./db');

connectDb();

app.use(express.json()); // automatically parse the json data send by client

app.get('/', function (req, res) {
  res.send('Hello World')
});

require('./routes/profile.route')(app);

app.listen(3000, () => {
    console.log('Api is running')
});
