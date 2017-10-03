import React, {Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import {Form, Button} from 'reactstrap';

import TaskList from './TaskList.js';

class TaskWithReactRouter extends Component{
  constructor(props){

    super(props);
    this.state={
      route: '/',
      newTask: '',
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
    this.handleChange=this.handleChange.bind(this);
    this.addNewTask=this.addNewTask.bind(this);

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

  addNewTask(){
    //event.preventDefault();

    const task={
      id: this.state.tasks.length + 1,
      describe: this.state.newTask,
      complete: true
    }
    this.setState({tasks: this.state.tasks.concat(task), newTask: ''});
    return this.state.tasks;
  }

  handleChange(event){

    this.setState({newTask: event.target.value});
    return <task />
  }

  render(){
     return (
       <Router>
    <div>
      <ul>
        <li><Link to="/">All Tasks</Link></li>
        <li><Link to="/completeTasks">Complete Tasks</Link></li>
        <li><Link to="/incompleteTasks">Incomplete Tasks</Link></li>
        <li><Link to="/addNewTask">Add New Task</Link></li>

      </ul>

      <hr/>

      <Route exact path="/" render={() => (
        <TaskList tasks={this.allTasks()} title="ROUTER All Tasks" />
    )}/>

      <Route  path="/completeTasks" render={() => (
        <TaskList tasks={this.completeTasks()} title="ROUTER Complete Tasks" />
    )}/>

     <Route  path="/incompleteTasks" render={() => (
      <TaskList tasks={this.incompleteTasks()} title="ROUTER Incomplete Tasks" />
  )}/>

    <Route  path="/addNewTask" render={() => (

      <div>
       <Form>
         <input type='text'  placeholder="Describe task"  value= {this.state.newTask}  onChange={this.handleChange} required />
         <Button color="danger" onClick={this.addNewTask} >Add New Task</Button>
       </Form>

      </div>
)}/>

    </div>
  </Router>
     );
  }

}
export default TaskWithReactRouter;
