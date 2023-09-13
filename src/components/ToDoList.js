import React from 'react';
import ToDo from './ToDo';

const ToDoList = ({ items, handleToggle, handleRemove }) => {

    return (
        <div className="to-do-list">
            {items.map(todo => {
                return (
                    <ToDo
                        todo={todo}
                        key={todo.id}
                        handleToggle={handleToggle}
                        handleRemove={handleRemove}
                    />
                )
            })}

        </div>
    );
};
export default ToDoList;