import React from 'react';
import './App.css';

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
    </div>
  );
}

function InternalFunctionalComponent() {
  return <div>Internal functional component is working!</div>
}

export default App;
