'use strict';

require('dotenv').config();
const { Sequelize, DataTypes } = require('sequelize');
const UserModel = require('./user');

let DATABASE_URL =process.env.DATABASE_URL || 'sqlite:memory';

const sequelize = new Sequelize(DATABASE_URL);

const userTable = UserModel(sequelize, DataTypes);

module.exports = {
    db: sequelize,
    users: userTable
};