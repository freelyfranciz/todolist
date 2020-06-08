import React from 'react';

var c = 1;

function ToDoItem(props) {
    return (
        <div className="todo-item"> 
            <input 
                type="checkbox" 
                checked={props.item.completed} 
                onChange={() => props.handleChange(props.item.id, c++)} 
            />
            <p>{props.item.text}</p>
        </div>
    );

}

export default ToDoItem;