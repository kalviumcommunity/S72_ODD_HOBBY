require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = 3000;



const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(MONGO_URI)
  .then(() => console.log('Database connected'))
  .catch(err => console.error('Database not connected:', err));

app.get('/ping', (req, res) => {
  res.send('Pong!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
