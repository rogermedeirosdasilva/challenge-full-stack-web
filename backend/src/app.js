require('dotenv').config({
   path:
      process.env.NODE_ENV === 'teste'
         ? './src/environment/.env.test'
         : process.env.NODE_ENV === 'dev'
            ? './src/environment/.env.dev'
            : './src/environment/.env'
});

const express = require('express');
const cors = require('cors');

class AppController {
   constructor() {
      this.express = express();

      this.middlewares();
      this.routes();
   }

   middlewares() {
      this.express.use(express.json());
      this.express.use(cors());
   }

   routes() {
      this.express.use(require('./routes'));
   }
}

module.exports = new AppController().express;
