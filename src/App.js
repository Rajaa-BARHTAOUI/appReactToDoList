import React, { Component } from 'react';
import './App.css';
import TaskApp from './TaskApp.js';

class App extends Component {

  render() {
    return (

      <div className="App">
        <header className="App-header"/>
          <TaskApp />
      </div>
    );
  }
}

export default App;
