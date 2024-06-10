const express = require('express'); //Локальный сервер
const path = require('path');
const app = express();

const staticPath = path.join(__dirname, 'public');

app.use(express.static(staticPath));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Static server is running on http://localhost:${PORT}`);
});