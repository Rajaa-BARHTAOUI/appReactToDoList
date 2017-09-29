import React, { Component } from 'react';
import TaskList from './TaskList.js';
import NotFound from './NotFound.js';
import  {Button, Form} from 'reactstrap';
const ROUTES={
  home: '/',
  completeTasks: '/completeTasks',
  incompleteTasks: '/incompleteTasks'
};
class TaskWithRouter extends Component {


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
  this.ajouterTache=this.ajouterTache.bind(this);

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

  ajouterTache(event){
    //  desactiver l evenement par defaut
    event.preventDefault();
    
    const task={
      id: this.state.tasks.length + 1,
      describe: this.state.newTask,
      complete: true
    }
    this.setState({tasks: this.state.tasks.concat(task), newTask: ''});

  }


  renderRoute(){
     switch(window.location.pathname){
       case ROUTES.home:  return <TaskList tasks={this.allTasks()} title="ROUTER All Tasks" />;
       case ROUTES.completeTasks: return <TaskList tasks={this.completeTasks()} title="ROUTER Complete Tasks" />;
       case ROUTES.incompleteTasks: return <TaskList tasks={this.incompleteTasks()} title="ROUTER Incomplete Tasks" />;
       default : return <NotFound />;

     }
  }
  handleChange(event){
    this.setState({newTask: event.target.value});
    return <task />
  }

  render() {
    return (

        <div>
           <Form>
            <input type='text'  placeholder="Description tache" value= {this.state.newTask}  onChange={this.handleChange}/>
             <Button color="danger" onClick={this.ajouterTache} >Ajouter Tache</Button>
          </Form>

          <ul>
             <li><a href={ROUTES.home} > HOME </a> </li>
             <li><a href={ROUTES.completeTasks} > CompleteTasks </a></li>
             <li><a href={ROUTES.incompleteTasks} > IncompleteTasks</a></li>
          </ul>
            {this.renderRoute()}

        </div>




    );
  }
}

export default TaskWithRouter;
