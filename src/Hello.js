import React, {Component} from 'react'
import {Button} from 'reactstrap'

class Hello extends Component{
  constructor(props){
    super(props);
    this.state= {
      count:0,
      age:0
    }


    this.increment= this.increment.bind(this);
    this.decrement=this.decrement.bind(this);
  //  this.affiche=this.affiche.bind(this);

  }


  increment(){
      this.setState({ count: this.state.count + 1 });
  }
  decrement(){
     this.state.count>0 && this.setState({ count: this.state.count - 1 });

  }

  render(){
    var user= {
      name: 'Rajae',
      age: '26',
      coucou(){
        return this.name+" OK";
      }

    };

    return (
      <div>
        <h1> {user.coucou()} {this.props.name} {this.props.age}</h1>
        <h2>Count {this.state.count}</h2>

         <br/><br/>
         <Button color="danger" onClick={this.increment}>++</Button>
         <br/><br/>
         <Button color="danger" onClick={this.decrement}>--</Button>
      </div>

    );
  }

}
export default Hello;
