const express = require('express');
const app = express();

const port = process.env.PORT || 10000;

// Root – vetëm për zgjim/test
app.get('/', (req, res) => {
  res.type('html').send(`
    <!doctype html>
    <html><head><meta charset="utf-8"><title>OK</title></head>
    <body style="font-family:sans-serif;display:grid;place-items:center;height:100vh">
      <h1>Hello from Render!</h1>
    </body></html>
  `);
});

// DELETE /delete-account/:customerId  (ID-ja në URL, jo në body)
app.delete('/delete-account/:customerId', (req, res) => {
  const { customerId } = req.params;
  if (!customerId) return res.status(400).json({ success:false, error:'customerId mungon' });
  console.log(`Kerkese per fshirje/anonimizim ID: ${customerId}`);
  return res.json({ success:true, message:`Llogaria ${customerId} u fshi/anonimizua` });
});

// Vetëm NJË listen!
app.listen(port, () => console.log(`Server running on ${port}`));
