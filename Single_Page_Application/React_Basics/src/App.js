import React from 'react';
import './App.css';
import ExternalFunctionalComponent from './components/ExternalFunctionalComponent.js';
import ExternalWithClassExtendComponent  from './components/ExternalWithClassExtendComponent.js';
import ExternalWithClassExtendAndPropsComponent from './components/ExternalWithClassExtendAndPropsComponent.js';

function App() {
  return (
    <div className="App">
        The App is working!
        <br/>

        <h3 style={{marginBottom: 0}}>
          Types of Component
        </h3>

        {/* Internal Functional Component */}
        <InternalFunctionalComponent  />

        {/* External Functional Component */}
        <ExternalFunctionalComponent />

        {/* External With Class Extend Component */}
        <ExternalWithClassExtendComponent />

        <h3 style={{marginBottom: 0}}>
          Props
        </h3>
        
        {/* Internal functional With Props Component */}
        <InternalFunctionalWithPropsComponent myData="#ffffff" />
        
        {/* External With Class Extend And Props Component */}
        <ExternalWithClassExtendAndPropsComponent myData="#ffffff" />      

        {/* Internal functional With Children Prop Component */}
        <InternalFunctionalWithChildrenPropComponent>#ffffff</InternalFunctionalWithChildrenPropComponent>          
    </div>
  );
}

function InternalFunctionalComponent() {
  return <div>Internal functional component is working!</div>
}

function InternalFunctionalWithPropsComponent(props) {
  return <div>Internal With Props Component is working and the myData prop is: <b>{props.myData}</b></div>
}

function InternalFunctionalWithChildrenPropComponent(props) {
  return <div>Internal functional With Children Prop Component is working and the children prop is: <b>{props.children}</b></div>
}

export default App;
