import React, {Component} from 'react';

class ExternalWithClassAndSetStateWithClickEventAndArrowFunctionComponent extends Component {

    state = {
        counter: 0
    };

    increase = ()=> {
        this.setState({counter: this.state.counter + 1});
    }

    decrease = ()=> {
        this.setState({counter: this.state.counter - 1});
    }
    

    render() {
        return <div>
            Set State With Click Event and Arrow Function component is working!
            <br/><br/>

            Counter: {this.state.counter}<br/>
            <button onClick={this.increase}>Increase</button>
            <button onClick={this.decrease}>Decrease</button>
        </div>;
    }
}

export default ExternalWithClassAndSetStateWithClickEventAndArrowFunctionComponent;