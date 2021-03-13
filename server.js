const express = require('express');

const server = express();
const { SERVER: { port } } = require('./config');

const NodeHttp = require('inblox-node-http');

const pingRoutes = require('./routes/ping.js');
const healthCheckRoutes = require('./routes/health-check.js');
const treesRoutes = require('./routes/trees');

/**
 * Start the app by listening <port>
 * */
const app = server.listen(port);

/**
 * List of all middlewares used in project cors, compression, helmet
 * */
try {
  // only if you're behind a reverse proxy (Heroku, Bluemix, AWS ELB, Nginx, etc)

  server.use(NodeHttp);

  server.use('/', pingRoutes);
  server.use('/', healthCheckRoutes);
  server.use('/', treesRoutes);
} catch (e) {
  app.close();
}

module.exports = server;
