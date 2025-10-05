const express = require('express');
const app = express();
const port = process.env.PORT || 10000;

// Middleware bazë
app.use(express.json());
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} ${req.method} ${req.url}`);
  next();
});

// Rrënja (vetëm për provë)
app.get('/', (req, res) => {
  res.json({ ok: true, msg: 'API up' });
});

// DELETE /delete-account/:customerId
app.delete('/delete-account/:customerId', (req, res) => {
  const { customerId } = req.params;
  if (!customerId) {
    return res.status(400).json({ success: false, error: 'customerId mungon' });
  }
  console.log(`Fshi/anon ${customerId}`);
  return res.json({ success: true, message: `Llogaria ${customerId} u fshi/anonimizua` });
});

// POST /delete-account  { "customerId": "289" }
app.post('/delete-account', (req, res) => {
  const { customerId } = req.body || {};
  if (!customerId) {
    return res.status(400).json({ success: false, error: 'customerId mungon' });
  }
  console.log(`Fshi/anon ${customerId}`);
  return res.json({ success: true, message: `Llogaria ${customerId} u fshi/anonimizua` });
});

// 404 JSON (që të mos kthehet HTML kurrë)
app.use((req, res) => {
  res.status(404).json({ success: false, error: 'Not Found', path: req.method + ' ' + req.url });
});

app.listen(port, () => console.log(`Server running on ${port}`));
