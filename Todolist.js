import React ,{Component } from "react"; 
import './App.css';
export class Todolist extends Component {
    
    state={
        tasks:[], 
        input :'', 
    }
    handleAddClick=()=>{
        const taskList=this.state.tasks ; 
        taskList.push(this.state.input);
        this.setState(
            {
                tasks: taskList, 
                input:''
            }
        )}
    render(){
  return (
    <div>
      <h1>To Do List</h1>
      <input type='text' value={this.state.input{}/>
      <button>Add</button>
    </div>
  );
}
}