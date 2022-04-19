import React from 'react';
import ToDo from './ToDo';

const ToDoList = ({ toDoList, handleToggle, removeTask }) => {
    
    return (
        <div className="to-do-list">
            {toDoList.map((todos, index) => {
                
                return (
                   <ToDo
                        index={index}
                        todos={todos}
                        key={todos.id}
                        handleToggle={handleToggle}
                        removeTask={removeTask} 
                    />
                )
            })}
           
        </div>
    );
};
export default ToDoList;