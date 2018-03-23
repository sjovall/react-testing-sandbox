import React, {Component} from 'react';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {counter: 0};
    }

    onIncrement = () => this.setState(doIncrement);
    onDecrement = () => this.setState(doDecrement);

    render() {
        const {counter} = this.state;

        return (
            <div>
                <h1>My Counter</h1>
                <Counter counter={counter}/>

                <button type="button" onClick={this.onIncrement}>
                    Increment
                </button>

                <button type="button" onClick={this.onDecrement}>
                    Decrement
                </button>
            </div>
        );
    }
}


export const Counter = ({counter}) => (
    <p>{counter}</p>
);

const doIncrement = (prevState) => ({
    counter: prevState.counter + 1,
});

const doDecrement = (prevState) => ({
    counter: prevState.counter - 1,
});

export default App;