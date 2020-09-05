import React from 'react';
import './App.css';
import ExternalFunctionalComponent from './components/ExternalFunctionalComponent.js';
import ExternalWithClassExtendComponent from './components/ExternalWithClassExtendComponent.js';
import ExternalWithClassExtendAndPropsComponent from './components/props/ExternalWithClassExtendAndPropsComponent.js';
import ExternalFunctionalWithStateComponent from './components/state/ExternalWithClassAndStateComponent.js';
import ExternalWithClassAndSetStateWithClickEventComponent from './components/state/ExternalWithClassAndSetStateWithClickEventComponent.js';
import ExternalWithClassAndSetStateWithClickEventAndBindComponent from './components/state/ExternalWithClassAndSetStateWithClickEventAndBindComponent.js'
import ExternalWithClassAndSetStateWithClickEventAndArrowFunctionComponent from './components/state/ExternalWithClassAndSetStateWithClickEventAndArrowFunctionComponent.js'
import SetStateWithonChangeEventandSpreadComponent from './components/state/SetStateWithonChangeEventandSpreadComponent.js'

function App() {
  return (
    <div className="App">
        The App is working!
        <br/>

        <h3 style={{marginBottom: 0}}>
          Types of Component
        </h3><br/>

        {/* Internal Functional Component */}
        <InternalFunctionalComponent  />

        {/* External Functional Component */}
        <ExternalFunctionalComponent />

        {/* External With Class Extend Component */}
        <ExternalWithClassExtendComponent />
        <br/><hr/>

        <h3 style={{marginBottom: 0}}>
          Props
        </h3><br/>
        
        {/* Internal functional With Props Component */}
        <InternalFunctionalWithPropsComponent myData="#ffffff" />
        
        {/* External With Class Extend And Props Component */}
        <ExternalWithClassExtendAndPropsComponent myData="#ffffff" />      

        {/* Internal functional With Children Prop Component */}
        <InternalFunctionalWithChildrenPropComponent>#ffffff</InternalFunctionalWithChildrenPropComponent>
        <br/><hr/>

        <h3 style={{marginBottom: 0}}>
          State
        </h3><br/>

        {/* External Functional With State Component */}
        <ExternalFunctionalWithStateComponent />
        <br/><br/>
        
        <h4 style={{marginBottom: 0}}>
          Set State With Click Event
        </h4>

        {/* External With Class And Set State With Click Event Component */}
        <ExternalWithClassAndSetStateWithClickEventComponent />
        <br/><br/>
        
        <h4 style={{marginBottom: 0}}>
          Set State With Click Event and Arrow Function
        </h4>
        {/* External With Class And Set State With Click Event And Arrow Function Component */}
        <ExternalWithClassAndSetStateWithClickEventAndArrowFunctionComponent />


        <br/><br/>
        
        <h4 style={{marginBottom: 0}}>
          Set State With Click Event and Binding Function
        </h4>
        {/* External With Class And Set State With Click Event And Bind Component */}
        <ExternalWithClassAndSetStateWithClickEventAndBindComponent />
        <br/><br/>
        
        <h4 style={{marginBottom: 0}}>
          Set State With onChange Event and Spread
        </h4>
        {/* External With Class And Set State With Click Event And Bind Component */}
        <SetStateWithonChangeEventandSpreadComponent />

    </div>
  );
}

function InternalFunctionalComponent() {
  return <div>Internal Functional Component is working!</div>
}

function InternalFunctionalWithPropsComponent(props) {
  return <div>Internal With Props Component is working and the myData prop is: <u>{props.myData}</u></div>
}

function InternalFunctionalWithChildrenPropComponent(props) {
  return <div>Internal Functional With Children Prop Component is working and the children prop is: <u>{props.children}</u></div>
}

export default App;
