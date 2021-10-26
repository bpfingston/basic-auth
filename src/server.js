'use strict';

const express = require('express');
const app = express();
const bcrypt = require('bcrypt');
const base64 = require('base-64');
const invalidUser = require('./auth/middleware/invalid-user');
const signUp = require('./auth/router/sign-up');
const signIn = require('./auth/router/sign-in');


app.use(express.json());
app.use(signUp);
app.use(signIn);
app.use(express.urlencoded({ extended: true }));
app.use(invalidUser);

module.exports = {
  app,
  start: (port) => {
    try {
      app.listen(port, () => console.log('server listening on', port));
    } catch (e) {
      console.log(e);
    }
  },
};
