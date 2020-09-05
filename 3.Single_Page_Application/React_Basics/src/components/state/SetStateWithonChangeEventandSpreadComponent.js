import React, { Component } from 'react';

class SetStateWithonChangeEventandSpreadComponent extends Component {
    state = {
        user: {
            name: 'Rida',
            email: 'rida.labbar@gmail.com'
        }
    }

    changeEmail(event) {
        const newEmail = event.target.value;

        this.setState({
            user: {
                ...this.state.user,
                email: newEmail
            }
        })
    }

    render() {
        return <div>
            External With Class And Set State With Click Event And Bind Component is working!
           <br /><br />
           Enter the new email:   <input onChange={this.changeEmail.bind(this)} />

            <br />
            user name: <u>{this.state.user.name}</u>
            <br />
            New email: <u>{this.state.user.email}</u>
        </div>
    }
}

export default SetStateWithonChangeEventandSpreadComponent;