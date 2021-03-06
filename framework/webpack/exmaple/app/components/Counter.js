import React, {Component} from 'react';
import num from './test.js'

export default class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {counter: 0};
    }

    componentDidMount() {
        this.interval = setInterval(this.tick.bind(this), 1000);
    }

    tick() {
        this.setState({
            counter: this.state.counter + num
        });
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        return (
            <h2>Counter: {this.state.counter}</h2>
        );
    }
}

