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
            user name: <b>{this.state.user.name}</b><br/>
            user email: <b>{this.state.user.email}</b>
        </div>
    }
}

export default ExternalWithClassAndStateComponent;