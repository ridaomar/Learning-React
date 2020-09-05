import React, { Component } from 'react';

class ExternalWithClassAndStateComponent extends Component {
    state = {
        user: {
            name: 'Rida',
            email: 'rida.labbar@gmail.com'
        }
    }

    render() {
        return <div>
            External With Class And State Component is working!
            <br/>
            user name: <u>{this.state.user.name}</u><br/>
            user email: <u>{this.state.user.email}</u>
        </div>
    }
}

export default ExternalWithClassAndStateComponent;