import React, { Component } from "react";
import ToDoItem from './ToDoItem';
import { connect } from 'react-redux';
import { fetchTodo, postTodo, updateTodo, removeItem } from '../action/todoData.action';

const mapStateToProps = (state) => {
  return {
    todo: state.todo
  }
}

const mapDispacthToProps = (dispatch) => ({
  fetchTodo: () => { dispatch(fetchTodo()) },
  postTodo: (value) => { dispatch(postTodo(value)) },
  updateTodo: (id, text, completed) => { dispatch(updateTodo(id,text, completed)) },
  removeItem: (item) => {dispatch(removeItem(item))}
})

class MainContent extends Component {
  constructor() {
    super();
    this.state = {
      value: ''
    }
    this.handleValueChange = this.handleValueChange.bind(this);
    this.handleAddItem = this.handleAddItem.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleValueChange(evt) {
    this.setState({
      value: evt.target.value
    });
  }

  componentDidMount() {
    this.props.fetchTodo();
  }

  handleChange(id, text, completed) {
    this.props.updateTodo(id, text, completed);
  }

  handleAddItem() {
    this.props.postTodo(this.state.value);
  }

  handleClose(item) {
    this.props.removeItem(item);
  }

  render() {
    const todoitems = this.props.todo.map((item) =>
      <ToDoItem key={item.id} item={item} handleChange={this.handleChange} handleClose={this.handleClose}/>)
    return (
      <div>
        <input type="text" placeholder="Enter item" onChange={this.handleValueChange} />
        <button onClick={this.handleAddItem}>Add</button>
        {todoitems}
      </div>
    );
  }

}

export default connect(mapStateToProps, mapDispacthToProps)(MainContent);