'use strict';
const express = require('express');
const homeController = require("./controllers/homeController.js");
const homeRouter = express.Router();
const jsonParser = express.json();

homeRouter.get('/', homeController.index);
homeRouter.get('/search', jsonParser, homeController.searchInfo);

module.exports = homeRouter;
