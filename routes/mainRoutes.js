var express = require('express');

var router = function router() {
    var mainRouter = express.Router();
    var models = require('../models/modelRequire');

    var summaryRouter = require('./summaryRoutes')(models);

    mainRouter.use('/api/summarize', summaryRouter);

    return mainRouter;
}

module.exports = router;