var React = require('react');
var TextBox = require('./TextBox.jsx');

var Page = React.createClass({
    render: function() {
        return <div className='page'>
            <TextBox width="600" height="300"/>
        </div>
    }
});

module.exports = Page;
