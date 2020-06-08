import React, { Component } from "react";
import ToDoItem from './ToDoItem';
import todosData from '../shared/todosData';

class MainContent extends Component {
  constructor() {
    super();
    this.state = {
      todos: todosData
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(id, c) {
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

  render() {
    const todoitems = this.state.todos.map((item) =>
      <ToDoItem key={item.id} item={item} handleChange={this.handleChange} />)
    return (
      <div>
        {todoitems}
      </div>
    );
  }

}

export default MainContent;