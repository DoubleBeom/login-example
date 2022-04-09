const express = require('express');
const app = express();
// const tasks = require('./routes/tasks');
const connectDB = require('./db/connect');
require('dotenv').config();

// error-handler

// middleware

// routes

const port = 3001;

const mongoose = require('mongoose');
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected...'))
  .catch((error) => console.log(error));

app.get('/', (req, res) => res.send('Welcome!'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
