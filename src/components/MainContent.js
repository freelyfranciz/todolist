import React, { Component } from "react";
import ToDoItem from './ToDoItem';
import todosData from '../shared/todosData';

class MainContent extends Component {
  constructor() {
    super();
    this.state = {
      todos: todosData,
      value: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.updateItem = this.updateItem.bind(this);
    this.handleAddItem = this.handleAddItem.bind(this);
  }

  handleChange(id) {
    this.setState(prevState => {
      const updatedTodos = prevState.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      });
      return {
        todos: updatedTodos
      }
    })
  }

  updateItem(evt) {
    this.setState({
        value: evt.target.value
      });
  }

  handleAddItem() {
  
   this.setState((prevState) => {
    const newTodos = [...prevState.todos, {
      id: Object.keys(prevState.todos).length + 1,
      text: this.state.value,
      completed: false
    }];

    
    console.log(newTodos);
    return {todos : newTodos};
   });


  }

  render() {
    const todoitems = this.state.todos.map((item) =>
      <ToDoItem key={item.id} item={item} handleChange={this.handleChange} />)
    return (
      <div>
        <input type="text" placeholder="Enter item" onChange={this.updateItem} />        
        <button  onClick={this.handleAddItem}>Add</button>
        {todoitems}
      </div>
    );
  }

}

export default MainContent;