import React, { Component } from 'react';
import Added from './App'
//import reportWebVitals from './reportWebVitals';

class App extends Component {
  constructor(props){
    super(props)
  }

  render(){
    return(
      <React.StrictMode>
        <Added />
      </React.StrictMode>
    )
  }
}

export default App
//reportWebVitals();
