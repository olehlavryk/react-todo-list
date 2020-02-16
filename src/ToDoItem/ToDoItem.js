import React from 'react';

const ToDoItem = props => {
    const resolvedClass =   {
        textDecoration : 'line-through'
    }

    return (
        <li className="todo-item">
            <div className="task-wrapper" style={
                props.complited === true ? resolvedClass : {} 
            }>
                <span>{props.description}</span>
            </div>
            <div className="input-wrapper">
                <input type="checkbox" onChange={props.handleChange} defaultChecked={props.complited}/>
            </div>
        </li>
    )
};

export default ToDoItem;