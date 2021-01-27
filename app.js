const express = require('express');

const routes = require('./server/routes');

const PORT = process.env.PORT || 3310;

const app = express();

app.use('/api', routes)

app.use(express.static('./fronend/build'));

app.listen(PORT);