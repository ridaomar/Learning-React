import React, {Component} from 'react';

class ExternalWithClassExtendAndPropsComponent extends Component{
    render() {
        return <div>External With Class Extend And Props component is working and myData propo is: <u>{this.props.myData}</u></div>
    }
}

export default ExternalWithClassExtendAndPropsComponent;