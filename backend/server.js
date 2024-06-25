const router = require('./routes/Router.js');
const express = require('express');

const app = express();

app.use(express.json())
app.use('/home_data', router);
app.listen(5425);