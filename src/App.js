import React, { useState } from 'react';
import Header from './components/Header';
import data from './data.json';
import ToDoList from './components/ToDoList';
import ToDoForm from './components/ToDoForm';

const App = () => {
    const [toDoList, setToDoList] = useState(data);

    const handleToggle = index => {
        const mapped = toDoList.map(task => {
            return (
                task.id === Number(index + 1) && task.status === "in progress" ? { ...task, status: "done" }
                    : { ...task } 
            )
        });
        setToDoList(mapped);
    }

    const removeTask = index => {
        const newTasks = [...toDoList];
        newTasks.splice(index, 1);
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
        <div className="App">
            <Header />
            <div className="container">
                <ToDoList toDoList={toDoList}
                    handleToggle={handleToggle}
                    removeTask={removeTask}
                />
                <ToDoForm addTask={addTask} />
            </div>
        </div>
    )
}

export default App;
