/* global __resourceQuery: false */
'use strict';

var React = require('react');
var Router = require('react-router');
var routes = require('../app/' + __resourceQuery.substr(1) + 'Routes');

// react-router handles location
routes().then(function(routeDefinition) {
    Router.run(routeDefinition, Router.HistoryLocation, function(Application, state) {
        React.withContext({}, function() {
            React.render(<Application />, document.getElementById('content'));
        });
    });
}).catch(function(res) {
    console.error(res);
});
