const db = require('../models');

module.exports = app => {
  app.get('/', (req, res) => {
    db.Posts.findAll({})
      .then(dbres => {
        console.log(dbres);
        res.sendStatus(200);
      })
      .catch(err => console.log(err));
  });
};
