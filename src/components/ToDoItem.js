import React, { useState } from 'react';


function ToDoItem(props) {
    const [completed, setCompleted] = useState(props.item.completed);

    const handleStateChange = (props) => {
        setCompleted(!completed);
        props.handleChange(props.item.id, props.item.text, !completed);
    }
    const completeStyle = {
        fontStyle: "italic",
        color: "gray",
        textDecoration: "line-through"
    }

    return (
        <div className="todo-item">
            <input
                type="checkbox"
                checked={completed}
                onChange={() => handleStateChange(props)}
            />
            <p style={completed ? completeStyle : null}>{props.item.text}</p>
            <button className="btnClose" onClick={() => props.handleClose(props.item)}>x</button>
        </div>
    );

}

export default ToDoItem;