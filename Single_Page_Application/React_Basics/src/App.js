import React from 'react';
import './App.css';
import ExternalFunctionalComponent from './components/ExternalFunctionalComponent.js';

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
    </div>
  );
}

function InternalFunctionalComponent() {
  return <div>Internal functional component is working!</div>
}

export default App;
