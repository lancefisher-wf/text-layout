var React = require('react');
var TextBox = require('./components/TextBox.jsx');
var Page = require('./components/Page.jsx');

var App = function() {
};

App.prototype.init = function() {
    var main = document.getElementById('app');
    React.renderComponent(Page(), main);
};

App.prototype.hello = function() {
    return 'hello';
};

var app = new App();
app.init();
