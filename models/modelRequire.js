var generateModels = function generateModelsFunc() {
    var models = {};
 
    models.sumary =  require('./summaryModel')();
 
    return models;
 }
 module.exports = generateModels;