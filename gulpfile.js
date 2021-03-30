const report = require('multiple-cucumber-html-reporter');


function defaultTask(cb){
    report.generate({
        jsonDir: './cypress/cucumber-json',
        reportPath: '../cucumber-report/',
    });
    cb();
}

exports.default = defaultTask