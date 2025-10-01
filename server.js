// server.js
const express = require('express');
const app = express();
const port = 3000;

// public klasöründeki tüm dosyaları otomatik sun
app.use(express.static('public'));

app.listen(port, () => {
  console.log(`http://localhost:${port} çalışıyor`);
});

