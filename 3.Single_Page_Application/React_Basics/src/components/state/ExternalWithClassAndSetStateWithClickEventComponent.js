import React, {Component} from 'react';

class ExternalWithClassAndSetStateWithClickEventComponent extends Component {
    state = {
        user: {
            name: '',
            email: ''
        }
    }

    render() {
       return <div>
           External With Class And Set State With Click Event Component is working!
           <br/><br/>
           <button onClick={()=>{this.setState({user:{name:'Rida', email: 'rida.labbar@gmail.com'}})}}>Get User Data</button>
           <br/><br/>
            user name: <u>{this.state.user.name}</u><br/>
            user email: <u>{this.state.user.email}</u>
       </div>
    } 
}

export default ExternalWithClassAndSetStateWithClickEventComponent;