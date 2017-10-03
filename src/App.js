import React, { Component } from 'react';
import './App.css';
//import TaskApp from './TaskApp.js';

import TaskWithReactRouter from './TaskWithReactRouter.js';

class App extends Component {

  render() {
    return (

      <div className="App">
        <header className="App-header"/>
          <TaskWithReactRouter/>

      </div>
    );
  }
}

export default App;
