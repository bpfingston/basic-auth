'use strict';

const validate = require('../middleware/validate');
const express = require('express');
const router = express();

//http post :3001/signin -a john:foo

router.post('/signin', validate, async (req, res) => {

  res.send(req.user);
});

module.exports = router;