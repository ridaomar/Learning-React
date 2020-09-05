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
    </div>
  );
}

function InternalFunctionalComponent() {
  return <div>Internal functional component is working!</div>
}

function InternalFunctionalWithPropsComponent(props) {
  return <div>Internal With Props Component is working and the myData prop is: <b>{props.myData}</b></div>
}

export default App;
