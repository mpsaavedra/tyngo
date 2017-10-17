/// <reference path="_all.d.ts"/>

exports.index = function(request) {
    let response = require('ringo/jsgi/response');

    
    // We don't use a real template parser in the
    // skeleton. Our recommended package for 
    // templating: reinhardt
    // See: https://github.com/orfon/reinhardt
    let rawTemplate = getResource('./templates/index.html').content;
    return response.html(rawTemplate);
}