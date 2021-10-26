'use strict';

const { users } = require('../../model');
const bcrypt = require('bcrypt');
const base64 = require('base-64');

const validate = async (req, res, next) => {
  try {
    let basicHeaderParts = req.headers.authorization.split(' '); // ['Basic', 'sdkjdsljd=']
    let encodedString = basicHeaderParts.pop(); // sdkjdsljd=
    let decodedString = base64.decode(encodedString); // "username:password"
    let [username, password] = decodedString.split(':'); // username, password
    const user = await users.findOne({ where: { username: username } });
    const valid = await bcrypt.compare(password, user.password);
    if (valid) {
      req.user = user;
      res.status(200)
      next();
    }
  } catch (error) {
      console.log(error)
    // res.status(403).send
    next('Invalid Login');
  }
};

module.exports = validate;
