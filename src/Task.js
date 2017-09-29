import React, {Component} from 'react';

class Task extends Component{

 render (){
   return (
     <div>
       <h2 >
        # {this.props.task.id} -- {this.props.task.describe}  ==> {this.props.task.complete ? 'Ok' : 'Non Ok'}
       </h2>
     </div>
   );
 }


}
export default Task;
