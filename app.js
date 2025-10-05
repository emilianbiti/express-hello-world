const express = require('express');
const app = express();
const port = process.env.PORT || 10000;

app.use(express.json()); // për JSON në POST

// HTML për /
const html = `<!doctype html><html><head><meta charset="utf-8"><title>Hello</title></head>
<body><section><h1>Hello from Render!</h1></section></body></html>`;

// GET /
app.get('/', (req, res) => res.type('html').send(html));

// DELETE /delete-account/:customerId
app.delete('/delete-account/:customerId', (req, res) => {
  const { customerId } = req.params;
  if (!customerId) return res.status(400).json({ success: false, error: 'customerId mungon' });
  return res.json({ success: true, message: `Llogaria ${customerId} u fshi/anonimizua` });
});

// POST /delete-account
app.post('/delete-account', (req, res) => {
  const { customerId } = req.body || {};
  if (!customerId) return res.status(400).json({ success: false, error: 'customerId mungon' });
  return res.json({ success: true, message: `Llogaria ${customerId} u fshi/anonimizua` });
});

// Vetëm një listen
const server = app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
server.keepAliveTimeout = 120000;
server.headersTimeout = 130000;
