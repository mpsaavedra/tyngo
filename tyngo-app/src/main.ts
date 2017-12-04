
/// <reference path="_all.d.ts" />

let response = require('ringo/jsgi/response');
let actions = require('./actions');

// minimalist request dispatcher
exports.app = (request) => {
    let path = request.pathInfo.slice(1) || 'index';

    // 1. resolve against actions
    if (typeof actions[path] == 'function') {
        return actions[path](request);
    }

    // 2. resolve against public folder
    let resource = getResource('./public/' + path);
    if (resource.exists()) {
        return response.static(resource);
    }

    // 3. return 404 response
    return response.notFound(request.pathInfo);
};

// main script to start application
if(require.main == module) {
    require('ringo/httpserver').main(module.id);
}