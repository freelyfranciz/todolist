import React from 'react';

function ToDoItem(props) {
    const completeStyle = {
        fontStyle : "italic",
        color: "gray",
        textDecoration : "line-through"
    }

    return (
        <div className="todo-item"> 
            <input 
                type="checkbox" 
                checked={props.item.completed} 
                onChange={() => props.handleChange(props.item.id)} 
            />
            <p style={props.item.completed? completeStyle : null}>{props.item.text}</p>
        </div>
    );

}

export default ToDoItem;