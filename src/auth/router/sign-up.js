'use strict';

const { users } = require('../../model');
const express = require('express');
const bcrypt = require('bcrypt');
const router = express();

// Signup Route -- create a new user
// Two ways to test this route with httpie
// echo '{"username":"john","password":"foo"}' | http post :3000/signup
// http post :3001/signup username=john password=foo

router.post('/signup', async (req, res) => {
  try {
    let userData = req.body;
    let hashed = await bcrypt.hash(req.body.password, 10);
    let newUser = await users.create({
      username: userData.username,
      password: hashed,
    });
    res.status(201).send(newUser);
  } catch (e) {
    console.log(e);
    res.status(403).send('Error Creating User');
  }
});

module.exports = router;
