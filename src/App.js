import React from 'react';
import ToDoPage from './ToDoPage';
import Header from './components/Header';
<<<<<<< HEAD

const App = () => {
=======
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

>>>>>>> 3017acb3b0ac69009842f695440a22eb0e750c7c
    return (
        <div className="App">
            <Header />
            <ToDoPage />
        </div>
    )
}

export default App;
