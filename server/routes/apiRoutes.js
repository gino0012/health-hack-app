var express = require('express');
var apiRouter = express.Router();

module.exports = function () {

  apiRouter.get('/test', function (req, res) {
    res.send('hello world');
});

  return apiRouter;
};
