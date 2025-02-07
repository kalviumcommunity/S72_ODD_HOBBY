const express = require('express');
const app = express();
const port = 3000;
const routes = require('./routes');
app.use(express.json());
app.use('/', routes);

app.get('/ping', (req, res) => {
  res.send('Pong!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
