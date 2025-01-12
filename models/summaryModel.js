let mongoose = require('mongoose');

let Schema = mongoose.Schema;

var getModel = () => {
    let summaryModel = Schema({
        url: {
            type: String,
            required: true
        },
        status: {
            type: String
        },
        summary: {
            type: String
        },
        msg: {
            type: String
        },
        err: []
    }, { timestamps: true });

    try {
        return mongoose.model('Summary', summaryModel);
    } catch (e) {
        return mongoose.model('summaryModel');
    }
}

module.exports = getModel;