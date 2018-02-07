const express = require('express');
const path = require('path');
const morgan = require('morgan');

const app = express();

app.use(morgan('dev'));

const root = path.join(__dirname, '../client');
app.use(express.static(root));

const PORT = 1234;
app.listen(PORT, error => {
  if (error) {
    console.log('Application startup error', error);
    process.exit(-1);
  }

  console.log(`Application started. Go to http://127.0.0.1:${PORT} in your browser.`);
});
