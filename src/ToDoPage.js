import React, { useState } from 'react';
import data from './data.json';
import ToDoList from './components/ToDoList';
import ToDoForm from './components/ToDoForm';

const ToDoPage = () => {
    const [toDoList, setToDoList] = useState(data);

    const handleToggle = id => {
        const toggled = toDoList.map(task => {
            if (task.id === id) {
                return (
                    task.status === "in progress" ? { ...task, status: "done" }
                       : { ...task, status: "in progress" }
               )
            } else {
                return task;
            }
           
        });
        setToDoList(toggled);
    }

    const handleRemove = id => {
        const newTasks = toDoList.filter(item => item.id !== id );
        setToDoList(newTasks);
    }

    const addTask = (userInput) => {
        let newTask = [...toDoList];
        newTask = [...newTask, {
            id: toDoList.length + 1, text: userInput,
            status: "in progress"
        }];
        setToDoList(newTask);
    };

    return (
        <div className="container">
                <ToDoList items={toDoList}
                    handleToggle={handleToggle}
                    handleRemove={handleRemove}
                />
                <ToDoForm addTask={addTask} />
            </div>
    ) 
};


export default ToDoPage;
