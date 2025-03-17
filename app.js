const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 5000;

app.use(bodyParser.json());
app.get('/', (req, res) => {
  res.json({ message: "Welcome to the Node.js Web Service!" });
});

app.get('/greet', (req, res) => {
  const name = req.query.name || 'Guest';
  res.json({ greeting: `Hello, ${name}!` });
});

app.post('/data', (req, res) => {
  res.json({ received: req.body });
});
app.listen(port, () => {
  console.log(`Node.js server running on port ${port}`);
});
