const { authJwt } = require('../middleware');
const controller = require('../controllers/transaction.controller');

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      'Access-Control-Allow-Headers',
      'x-access-token, Origin, Content-Type, Accept'
    );
    next();
  });

  app.post('/api/transactions', [authJwt.verifyToken], controller.create);

  app.get('/api/transactions', [authJwt.verifyToken], controller.findAll);

  app.put('/api/transactions/:id', [authJwt.verifyToken], controller.update);

  app.delete('/api/transactions/:id', [authJwt.verifyToken], controller.delete);
};
