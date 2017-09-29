import React, {Component} from 'react';
import Task from './Task.js';

class TaskListWithState extends Component{


  constructor (props){

    super(props);

    this.state={
      tasks: [
       {
        id:1,
        describe: 'Dit bonjour',
        complete: true

       },
       {
        id:2,
        describe: 'Dit bon appétit',
        complete: false

       },
       {
        id:3,
        describe: 'Dit bonsoir',
        complete: true
       }
    ]

    }

  }


 completeTask(){
      return this.state.tasks.filter(incomp => !incomp.complete);
  }

  incompleteTask(){
      return this.state.tasks.filter(incomp => incomp.complete);
  }


   render(){

     //const incompleteTask = this.state.tasks.filter(incomp => !incomp.complete);
     //const completeTask = this.state.tasks.filter(incomp => incomp.complete);

     return (

     <div>
        <h1>Tasks List With State</h1>
          <h3>  {this.state.tasks.map( task => { return (
             <Task  key={task.id} task={task}/>);})}
          </h3>

          <h1> Incomplete task</h1>
             <h3> { this.incompleteTask().map( incompTask =>
               { return (<Task key={incompTask.id} task={incompTask} /> ) }
             )} </h3>

         <h1> Complete task</h1>
             <h3> {this.completeTask().map( compTask =>
                    { return (<Task key={compTask.id} task={compTask} /> ) }
                 )}
             </h3>


    </div> );
   };




}

export default TaskListWithState;
