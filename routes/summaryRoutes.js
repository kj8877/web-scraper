const express = require('express');

var router = models => {
    var summaryRouter = express.Router();
    var summaryController = require('../controllers/summaryController')(models);

    summaryRouter.route('/')
        .get(summaryController.get)
        .post(summaryController.post)

    return summaryRouter
}

module.exports = router;