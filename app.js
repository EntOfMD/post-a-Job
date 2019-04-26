require('dotenv').config();
const express = require('express');
const hbs = require('express-handlebars');
const bodyParser = require('body-parser');
const db = require('./models');

const app = express();
const PORT = process.env.PORT || 3000;
const syncOptions = { force: false };

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

if (app.get('env') === 'development') {
  const logger = require('morgan');
  app.use(logger('dev'));
} else if (app.get('env') === 'test') {
  syncOptions.force = true;
}

db.sequelize.sync(syncOptions).then(() => {
  app.listen(PORT, err => {
    if (err) throw err;
    console.log(`App is online on http://localhost:${PORT}`);
  });
});
