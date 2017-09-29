import React, { Component } from 'react';
import './App.css';
import Hello from './Hello.js';
import TaskList from './TaskList.js';
import TaskListWithState from './TaskListWithState.js';
import TaskWithRouter from './TaskWithRouter.js';


class TaskApp extends Component {
  constructor(props){

    super(props);
    this.state={
      tasks: [
        {
         id:1,
         describe: 'Say Rajaa',
         complete: true

        },
        {
         id:2,
         describe: 'Say BARHTAOUI',
         complete: false

        },
      ]
    }


  }

  allTasks(){
    return this.state.tasks;
  }

  completeTasks(){
     return this.state.tasks.filter(task => task.complete);
  }
  incompleteTasks(){
    return this.state.tasks.filter(task => !task.complete);
  }

  render() {
    return (

      <div className="App">

        <header className="App-header"/>
           <Hello name='Rajaa' age='26'/>

          <h1>Tasks Router 0</h1>
              <TaskWithRouter />
           <h1>Tasks 1 </h1>
           <TaskListWithState />
           <h1>Tasks 2 </h1>
           <TaskList tasks={[
            {
             id:1,
             describe: 'Say Hello',
             complete: true

            },
            {
             id:2,
             describe: 'Say ??',
             complete: false

            },
            {
             id:3,
             describe: 'Say Bye',
             complete: true
            }

          ]}  title="All Tasks"/>


          <h1>Tasks 3 </h1>
          <TaskList tasks={this.allTasks()} title="All Tasks" />
          <TaskList tasks={this.completeTasks()} title="Complete Tasks" />
          <TaskList tasks={this.incompleteTasks()} title="Incomplete Tasks" />


      </div>
    );
  }
}

export default TaskApp;
