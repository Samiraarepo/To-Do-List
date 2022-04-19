import React from 'react';


const ToDo = ({ index, todos, handleToggle, removeTask }) => {

    return (
        <div
            id={todos.id}
            value={todos.id}
            key={todos.id + todos.text}
            className={todos.status === "in progress" ? "todos" : "todos strike"}
            name="todo"
        >
            {todos.text}
            <div>
            <button className="task" onClick={() => handleToggle(index)}>
                {todos.status === "inprogress" ? <i className="far fa-square"></i>
                    : <i className="far fa-check-square"></i>}
            </button>
            <button className="task" onClick={() => removeTask(index)}>
                <i className="fa fa-xmark"></i>
            </button>
            </div>
        </div>

    );

};

export default ToDo;