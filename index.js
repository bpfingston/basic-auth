'use strict';

const express = require('express');
const app = express();
const { db } = require('./src/model/index')
const { start } = require('./src/server')
const PORT = process.env.PORT || 3002;

app.use(express.json());


db.sync().then(() => {start(PORT);});

