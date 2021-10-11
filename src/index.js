import { h, render, Component } from './core';
/**
 * @jsx h
 */
class App extends Component {
    constructor() {
        super();
        this.state = {
            name: 'world',
        }
    }
    handleClick() {
        if (this.state.name === 'world') {
            this.setState({name:'kingne'});
        } else {
            this.setState({name:'world'})
        }
    }
    render() {
        return <div onclick={() => this.handleClick()}>hello, {this.state.name}</div>
    }
}

render(<App />, document.body);

