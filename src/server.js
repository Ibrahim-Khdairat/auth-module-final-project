'use strict';

const express = require('express');
const app = express();
app.use(express.json());


const notFoundError = require('./errors-handler/404');
const serverError = require('./errors-handler/500');
const loggerMiddleWare = require('./middleware/logger');

const userAuthRouter = require('../src/routes/user-routs');
const courseRouter = require('./routes/course-route');



app.get('/', (req, res) => {
    res.status(200).send('Hello 👋 to Auth Project🖥 server');
  });

app.use(courseRouter);
app.use(userAuthRouter);
app.use(loggerMiddleWare);
app.use('*' , notFoundError);
app.use(serverError);


module.exports = {
    server: app,
    start: port => {
      if (!port) { throw new Error('Missing Port'); }
      app.listen(port, () => console.log(`Listening on ${port}`));
    },
  };