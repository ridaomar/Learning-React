import React, {Component} from 'react';

class ExternalWithClassAndSetStateWithClickEventAndBindComponent extends Component{

    // method 1: by using bind in the class constructor
    constructor(props) {
        super(props);
        this.increase = this.increase.bind(this);
    }

    state = {
        counter: 0
    };

    increase()  {
        this.setState({counter: this.state.counter + 1});
    }

    decrease() {
        this.setState({counter: this.state.counter - 1});
    }

    render() {
        return <div>
            External With Class And Set State With Click Event And Bind Component is working!
            <br/><br/>

            Counter: {this.state.counter}<br/>

            <button onClick={this.increase}>Increase</button>

            {/* method 2: by adding the bind when calling the function */}
            <button onClick={this.decrease.bind(this)}>Decrease</button>
        </div>;
    }
}

export default ExternalWithClassAndSetStateWithClickEventAndBindComponent;