const routes = require('express').Router();
const StudentRouter = require('./app/routes/student.router');

routes.get('/', (req, res) => {
   res.status(200).send(
      `Grupo A - API is up and running!`
   );
});

StudentRouter.addRoutes(routes);

module.exports = routes;
