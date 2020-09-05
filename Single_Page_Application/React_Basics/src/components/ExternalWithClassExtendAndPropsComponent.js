import React, {Component} from 'react';

class ExternalWithClassExtendAndPropsComponent extends Component{
    render() {
        return <div>External With Class Extend And Props component is working and myData propo is: <b>{this.props.myData}</b></div>
    }
}

export default ExternalWithClassExtendAndPropsComponent;