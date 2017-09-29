import React, {Component} from 'react';
import Task from './Task.js';

class TaskList extends Component{

   render(){

     return (

     <div>
        <h1>{this.props.title}</h1>
          <h3>  {this.props.tasks.map( task => { return (
             <Task  key={task.id} task={task}/>);})}
          </h3>
    </div> );
   };




}

export default TaskList;
