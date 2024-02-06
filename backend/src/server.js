const express = require("express");
const mongoose = require('mongoose');

var cors = require('cors');
const bodyParser = require('body-parser');

const {router} = require('./services/routes');
const { notFound, errorHandler } = require('./middlewares');


mongoose.connect(process.env.MONGO_HOST);
const database = mongoose.connection;

database.on('error', (error) => {
  console.log(error)
})

database.once('connected', () => {
  console.log('Database Connected');
})



const app = express();

app.use(bodyParser.json());
app.use(cors({origin: 'http://localhost:5173'}));
app.use('/api',router);

// app.use(notFound);
app.use(errorHandler);







const PORT = process.env.PORT || 5000;







app.listen(PORT, () => {
  console.log("Server is listening to port " + PORT)
})

