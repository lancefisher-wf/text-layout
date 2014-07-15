/* global module */

var React = require('react');

var TextBox = React.createClass({
    getInitialState: function() {
        window.textBox = this;

        var line0 = { key: 0, text: 'line 0' };
        var line1 = { key: 1, text: 'line 1' };
        return { lines: [line0, line1], currentLine: line1 };
    },
    componentDidMount: function() {
        //console.debug('componentDidMount');
        var node = this.refs.textInput.getDOMNode();
        //debugger;
        //
        // not focusing for some reason...
        node.focus();
    },
    render: function() {
        //console.debug('render');
        var viewBox = "0 0 " + this.props.width + ' ' + this.props.height;

        return <div>
            <input type="text" ref="textInput" className="textInput"
                onKeyPress={this.onKeyPress}
                onKeyUp={this.onKeyUp}
            ></input>
            <h1>SVG<span>:</span></h1>
            <svg
                width={this.props.width} height={this.props.height}
                viewBox={viewBox}
                xmlns="http://www.w3.org/2000/svg" version="1.1">

                <text x="30" y="30">
                    {this.state.lines.map(function(line) {
                        var ref = 'line' + line.key;
                        return <tspan ref={ref} dy="25" x="0" key={line.key}>{line.text}</tspan>
                    })}
                </text>
            </svg>

        </div>;
    },
    onKeyPress: function(evt) {
        var newText = '';

        if (evt.key === 'Enter') {
            var newLine = {
                key: this.state.currentLine.key + 1,
                text: ''
            };

            var lines = this.state.lines;
            lines.push(newLine);

            this.setState({
                lines: lines,
                currentLine: newLine
            });
            //console.debug('set new line');
            return;

        } else {
            newText = evt.key;
            var currentLine = this.state.currentLine;
            currentLine.text = currentLine.text + newText;
            this.setState({ currentLine: currentLine });
        }
    },
    onKeyUp: function(evt) {
        if (evt.key === 'Backspace') {
            var currentLine = this.state.currentLine;
            currentLine.text = currentLine.text.slice(0, -1);
            this.setState( { currentLine: currentLine });
        }
    }
});

module.exports = TextBox;
